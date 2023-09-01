//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const GetControllerUsuarios = async (email: string) => {
  try {
    const response: any = await Usuarios.findOne({ where: { email } });
    if (response) {
      const { id, email, name } = response;
      return { id, email, name };
    } else {
      throw new Error("Usuario No encontrado!!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerUsuarios;
