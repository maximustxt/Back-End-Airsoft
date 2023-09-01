// Model:
import {
  Usuarios,
  CarritoUser,
} from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Controller:
import getControllerCarrito from "../../Controllers/Carrito/getControllerCarrito";

const postControllerCarrito = async (infoCarrito: any, idUser: string) => {
  try {
    // Verificar si el usuario existe
    const usuario = await Usuarios.findByPk(idUser);

    if (!usuario) {
      throw new Error("Usuario inexistente");
    }

    const arrayCarritoUser = await getControllerCarrito(idUser);

    const carritoYaCreado = arrayCarritoUser.find(
      (e) => e.Name === infoCarrito.Name
    );

    if (!carritoYaCreado) {
      // Crear un nuevo carrito
      const carrito = await CarritoUser.create(infoCarrito);

      // Agregar el carrito al usuario
      await usuario.addCarrito(carrito);
    } else {
      throw new Error("Carrito Ya creado");
    }

    return "Carrito agregado al usuario";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerCarrito;
