import { Request, Response } from "express";
import { usuarioCriarService } from "../services/usuario-criacao-service";

export namespace usuarioController {
  export const criar = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      // Validação básica
      if (!email || !password) {
        res.status(400).json({ message: "Email e senha são obrigatórios." });
      }

      // Chama o serviço para criar o usuário
      const usuario = await usuarioCriarService({ email, password });

      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar usuário." });
    }
  };
}
