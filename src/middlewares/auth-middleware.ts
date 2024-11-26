import { redisClient } from "../config/redis";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction, Handler } from "express";

export const authMiddleware: Handler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const authHeader = req.headers.authorization;
    (req as any).user = { auth: false };

    if (authHeader && authHeader?.startsWith("Bearer ")) {
      let token = authHeader.split(" ")[1];

      // Verifica o token no Redis comentado para analisar uma melhor forma de aplicação
      // const tokenData = await redisClient.get(token);

      // Decodifica o JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as { id: number };
      (req as any).user = { id_usuario: decoded.id, auth: true };

    }    
    next();
  } catch (err) {
    console.error("Erro de autenticação:", err);
    return res.status(500).json({ error: "Erro interno de autenticação" });
  }
};
