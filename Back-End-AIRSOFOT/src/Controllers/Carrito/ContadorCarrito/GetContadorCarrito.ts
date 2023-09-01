//- Model:
import { Usuarios } from "../../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Controllers:
import GetControllerCarrito from "../getControllerCarrito";

const GetContadorCarrito = async (idCarrito: string, idUser: string) => {
  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      const arrayCarritoUser = await GetControllerCarrito(idUser);

      if (arrayCarritoUser.length) {
        let carrito = arrayCarritoUser.find((e) => e.id === idCarrito);
        if (!carrito) {
          throw new Error("Carrito no encontrado.");
        }

        return carrito.Contador;
      } else {
        throw new Error("El carrito esta Vacio");
      }
    } else {
      throw new Error("Usuario no existente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetContadorCarrito;
