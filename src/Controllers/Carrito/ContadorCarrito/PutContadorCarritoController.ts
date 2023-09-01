//- Models:
import { Usuarios } from "../../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";
//- Controllers:
import GetControllerCarrito from "../getControllerCarrito";

const GetContadorCarritoController = async (
  InfoContador: string,
  ValorContador: number,
  idCarrito: string,
  idUser: string
) => {
  // LO QUE PODRIA HACER ES QUE EN EL FRONT HACER UN CONTADOR Y QUE SE DECREMENTE O INCREMENTE Y EL VALOR ESE TRAERLO AL BACK PARA QUE ACA.

  try {
    const Usuario = await Usuarios.findByPk(idUser);

    if (Usuario) {
      const arrayCarritoUser = await GetControllerCarrito(idUser);

      if (arrayCarritoUser.length) {
        let carrito = arrayCarritoUser.find((e) => e.id === idCarrito);
        if (!carrito) {
          throw new Error("Carrito no encontrado.");
        }

        if (
          InfoContador === "Incremento" &&
          carrito.Contador !== carrito.Stock
        ) {
          carrito.Contador = carrito.Contador + ValorContador;
          carrito.Precio = carrito.PrecioUnitario * carrito.Contador;
        } else if (InfoContador === "Decremento" && carrito.Contador > 1) {
          carrito.Contador = carrito.Contador - ValorContador;
          carrito.Precio = carrito.PrecioUnitario * carrito.Contador;
        }

        await carrito.save();

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

export default GetContadorCarritoController;
