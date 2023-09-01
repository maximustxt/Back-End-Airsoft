//- Modelos:
import {
  Usuarios,
  Compras,
} from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";
//- Controllers:
import getComprasController from "../../Controllers/Compras/getComprasController";

const postComprasController = async (idUser: string, InfoCompra: any) => {
  try {
    const user = await Usuarios.findByPk(idUser);

    if (!user) {
      throw new Error("Usuario no existente");
    } else {
      const arrayDeComprasUser = await getComprasController(idUser);

      const compraYaCreada = arrayDeComprasUser.find(
        (e: any) => e.Name === InfoCompra.Name
      );

      if (!compraYaCreada) {
        // Crear un nuevo Compra

        const { Name, Imagen } = InfoCompra;

        const compra = await Compras.create({ Name, Imagen });

        console.log(compra);

        // Agregar el Compra al usuario
        await user.addCompra(compra);
      } else {
        throw new Error("Compra Ya creada");
      }

      return "Compra agregada al usuario";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postComprasController;
