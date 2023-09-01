//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Interfaces:
import Usuario from "../../Interface/Usuario/Usuario";

const postControllerUsuarios = async (dataUsuario: any) => {
  try {
    const UsuarioEncontrado = await Usuarios.findOne({
      where: { email: dataUsuario.email },
    });

    if (UsuarioEncontrado) {
      throw new Error("Usuario Ya existente!.");
    } else {
      await Usuarios.create(dataUsuario);
      return "Usuario Posterado!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerUsuarios;
