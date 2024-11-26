import { redisClient } from "../config/redis";
import { Usuario } from "../models/usuario";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginService = async (email: string, password: string) => {
  try {
    const usuario = (await Usuario.findOne({ where: { email } })) as Usuario;
    const senhaValida = await bcrypt.compare(password, usuario?.password);

    if (!usuario || senhaValida == false) {
      return new Error("Invalid credentials");
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: +process.env.JWT_TTL!,
      }
    );

    // Salvar o token no Redis com o TTL configurado
    await redisClient.set(
      token,
      JSON.stringify({ id: usuario.id, email: usuario.email }),
      {
        EX: parseInt(process.env.JWT_TTL!),
      }
    );

    return token;
  } catch (error) {
    return new Error(error as string);
  }
};
