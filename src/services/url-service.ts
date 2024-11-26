import { Op } from "sequelize";
import { Url } from "../models/url";
import { createHash } from "crypto";

export namespace urlService {
  export const criar = async (data: Partial<Url>): Promise<Url> => {
    try {
        // Extrai o domínio da URL
        const url = new URL(data.url_origem ?? '');
        const url_valida = url.protocol === "http:" || url.protocol === "https:";
        
        if (url_valida == false) throw new Error('Insira uma url válida');

        const dominio = `http://${process.env.NODE_APP_HOST!}:${+process.env.NODE_LOCAL_PORT!}`;

        // Cria um hash a partir do caminho
        const caminho = url.pathname + url.search;
        const hash = createHash('md5').update(caminho).digest('base64url').slice(0, 6);
        
        data.url_reduzida = `${dominio}/${hash}`;
        return await Url.create(data);
    } catch (error) {
        throw new Error(error as string)
    }
  };

  export const listar = async (url_origem?: string, id = 0): Promise<Url> => {
    const where: any = {
      deleted_at: {
        [Op.is]: null,
      },
    };

    if (url_origem && url_origem.length > 0) {
      where.url_origem = url_origem;
    }

    if (id > 0) {
      where.id = id;
    }

    return (await Url.findOne({ where }) ?? {} as Url);
  };

  export const deletar = async (id: number): Promise<void> => {
    const url = await Url.findOne({ where: { id } });

    if (!url || url.deletedAt !== null) {
      throw new Error("Registro não encontrado ou já deletado.");
    }

    await Url.update(
      { deletedAt: new Date() },
      { where: { id } }
    );
  };
}
