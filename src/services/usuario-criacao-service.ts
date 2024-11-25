import bcrypt from "bcryptjs";
import { Usuario } from "../models/usuario";

export const usuarioCriarService = async (
  data: Partial<Usuario>
): Promise<Usuario> => {
  const { email, password } = data;

  // Gerar o hash da senha
  const hashedPassword = await bcrypt.hash(password ?? '', 10);

  // Criação do registro no banco de dados
  const usuario = await Usuario.create({ email, password: hashedPassword });

  return usuario;
};
