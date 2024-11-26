import { Request, Response } from "express";
import { usuarioService } from "../services/usuario-service";

export namespace usuarioController {
  export const criar = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: "Email e senha são obrigatórios." });
      }

      const usuario = await usuarioService.criar({ email, password });

      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar usuário." });
    }
  };
}
