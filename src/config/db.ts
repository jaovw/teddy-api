import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE!,
  process.env.MYSQL_USERNAME!,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_DOCKER_PORT!,
    logging: process.env.APP_DEBUG ? console.log : false,
    dialect: "mysql",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("🚀 Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database. Retrying...", error);
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
};
