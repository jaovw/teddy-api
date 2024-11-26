import bcrypt from "bcryptjs";
import { Usuario } from "../models/usuario";

export namespace usuarioService {
  export const criar = async (data: Partial<Usuario>): Promise<Usuario> => {
    const { email, password } = data;
  
    const hashedPassword = await bcrypt.hash(password ?? '', 10);
  
    return await Usuario.create({ email, password: hashedPassword });
  };
}

