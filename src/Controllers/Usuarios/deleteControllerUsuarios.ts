//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const deleteControllerUsuarios = async (email: string) => {
  try {
    const UsurarioEliminar = await Usuarios.findAll({ where: { email } });

    if (UsurarioEliminar) {
      for (let i = 0; i < UsurarioEliminar.length; i++) {
        await UsurarioEliminar[i].destroy(); // utilizamos el destroy() para eliminar el usuario.
      }
      return "Eliminado con exito!.";
    } else {
      console.log("Usuario inexistente");
      throw new Error("Usuario inexistente!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteControllerUsuarios;
