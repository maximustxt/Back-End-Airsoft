//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Controller:
import GetControllerCarrito from "./getControllerCarrito";

const deleteControllerCarrito = async (idCarrito: string, idUser: string) => {
  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      await Usuario.removeCarrito(idCarrito);
      return await GetControllerCarrito(idUser);
    } else {
      throw new Error("Usuario inexistente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteControllerCarrito;
