//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

//- Interfaces:
import Usuario from "../../Interface/Usuario/Usuario";

const postControllerUsuarios = async (dataUsuario: Usuario) => {
  try {
    const UsuarioEncontrado = await Usuarios.findOne({
      where: { email: dataUsuario.email },
    });

    if (UsuarioEncontrado) {
      throw new Error("Usuario Ya existente!.");
    } else {
      const { name, email, password, ImagenUser } = dataUsuario;
      await Usuarios.create({ name, email, password, ImagenUser });
      return "Usuario Posterado!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerUsuarios;
