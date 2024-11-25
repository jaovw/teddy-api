import { redisClient } from "../config/redis";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido ou inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verifica o token no Redis
    const tokenData = await redisClient.get(`auth:${token}`);
    if (!tokenData) {
      return res.status(401).json({ error: "Token expirado ou inválido" });
    }

    // Decodifica o JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as { id: number };
    // req.body.id = decoded.id;

    next();
  } catch (err) {
    console.error("Erro de autenticação:", err);
    return next(err);
  }
};
