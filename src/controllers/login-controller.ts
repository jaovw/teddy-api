import { Request, Response } from "express";
import { loginService } from "../services/login-service";

export namespace loginController {
  export const auth = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: "Email and password are required" });
      }

      const resultado = await loginService(email, password)
      res.status(200).json({ token: resultado });
    } catch (err) {
      res.status(500).json({ error: "Internal server error", details: (err as any).message });
    }
  };
}
