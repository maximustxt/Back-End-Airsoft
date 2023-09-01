//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const getControllerCarrito = async (idUser: string) => {
  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      const response = await Usuario.getCarritos({
        joinTableAttributes: [],
      });
      return response;
    } else {
      throw new Error("Usuario no existente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getControllerCarrito;
