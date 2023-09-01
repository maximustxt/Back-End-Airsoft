//- Model:
import Articulos_Coleccionables from "../../Models/Articulos_Venta_Model/Articulos_Venta_Model";

const GetControllerArticulos_De_Venta = async () => {
  try {
    const response = await Articulos_Coleccionables.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerArticulos_De_Venta;
