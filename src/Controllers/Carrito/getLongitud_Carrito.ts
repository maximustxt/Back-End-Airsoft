//- Controllers:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";
import getControllerCarrito from "./getControllerCarrito";

const getLongitud_Carrito = async (idUser: string) => {
  try {
    const user = await Usuarios.findByPk(idUser);

    if (!user) {
      throw new Error("No existe el usuario");
    } else {
      const array = await getControllerCarrito(idUser);
      return array.length;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getLongitud_Carrito;
