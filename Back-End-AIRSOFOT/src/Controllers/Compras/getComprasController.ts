//- Modelos:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const getComprasController = async (idUser: string) => {
  try {
    const user = await Usuarios.findByPk(idUser);

    if (!user) {
      throw new Error("Usuario inexistente");
    } else {
      const response = await user.getCompras({
        joinTableAttributes: [],
      });

      return response;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getComprasController;
