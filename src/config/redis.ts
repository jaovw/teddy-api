import { createClient } from "redis";

const redisConfig = () => {
  const redisClient = createClient({ url: process.env.REDIS_URL || `redis://${process.env.REDIS_HOST!}:${+process.env.REDIS_PORT!}` });

  redisClient.on("error", (err) => console.error("Erro no Redis:", err));
  redisClient.connect().then(() => console.log("✅ Conectado ao Redis"));

  return redisClient;
};

export const redisClient = redisConfig();
