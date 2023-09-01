import { CarritoUser } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const deleteAllCarrito = async () => {
  try {
    // Elimina todos los elementos del carrito :
    await CarritoUser.destroy({
      where: {},
    });

    return "Carrito Vaciado con exito!!.";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteAllCarrito;
