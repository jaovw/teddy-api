import { Request, Response } from "express";
import { urlService } from "../services/url-service";

export namespace urlController {
  export const criar = async (req: Request, res: Response): Promise<void> => {
    try {
      const { url_origem } = req.body;
      const { id_usuario } = (req as any).user

      const novaUrl = await urlService.criar({ url_origem, id_usuario: id_usuario || null });

      res.status(201).json(novaUrl);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error, message: "Erro ao criar URL." });
    }
  };

  export const listarPorQuery = async (req: Request, res: Response): Promise<void> => {
    try {
      const { url_origem } = req.query;

      const urls = await urlService.listar(url_origem as string);

      res.status(200).json(urls);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error, message: "Erro ao listar URLs." });
    }
  };

  export const listarPorId = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = +req.params.id;

      const url = await urlService.listar('', id);

      res.status(200).json(url);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error, message: "Erro ao listar URL." });
    }
  };

  export const deletar = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      const usuario = (req as any).user

      if (usuario?.auth == false) {
        return res.status(401).json({ message: "Usuário nao autenticado" });
      }

      await urlService.deletar(Number(id));

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error, message: "Erro ao deletar URL." });
    }
  };
}
