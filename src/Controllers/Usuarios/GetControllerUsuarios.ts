//- Model:
import { Usuarios } from "../../Models/Carrito-Usuario-Compras/Usuarios-Carrito-Compras";

const GetControllerUsuarios = async () => {
  try {
    const response: any = await Usuarios.findAll();
    if (response) {
      return response;
    } else {
      throw new Error("Usuario No encontrado!!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerUsuarios;
