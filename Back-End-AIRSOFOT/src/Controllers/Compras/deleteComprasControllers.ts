//- Modelos :
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";
//- Controllers:
import getComprasController from "../../Controllers/Compras/getComprasController";

const deleteComprasControllers = async (idCompra: string, idUser: string) => {
  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      await Usuario.removeCompra(idCompra);
      return await getComprasController(idUser);
    } else {
      throw new Error("Usuario inexistente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteComprasControllers;
