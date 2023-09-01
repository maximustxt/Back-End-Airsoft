//- Model:
import { Usuarios } from "../../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Controllers:
import GetControllerCarrito from "../getControllerCarrito";

const GetPrecioTotalCarrito = async (idUser: string) => {
  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      const arrayCarritoUser = await GetControllerCarrito(idUser);

      const PrecioTotal = arrayCarritoUser.reduce(
        (acu, e) => (acu = acu + e.Precio),
        0
      );

      return PrecioTotal;
    } else {
      throw new Error("Usuario no existente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetPrecioTotalCarrito;
