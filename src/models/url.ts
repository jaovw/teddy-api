import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

export class Url extends Model {
  public id!: number;
  public id_usuario!: number | null;
  public url_origem!: string;
  public url_reduzida!: string;
  public qtd_acesso!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date | null;
  public readonly deletedAt!: Date | null;
}

Url.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    url_origem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_reduzida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qtd_acesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at",
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "deleted_at",
    },
  },
  {
    sequelize,
    tableName: "url",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);
