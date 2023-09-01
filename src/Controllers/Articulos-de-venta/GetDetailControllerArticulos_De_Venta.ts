//- Model:
import Articulos_Coleccionables from "../../Models/Articulos_Venta_Model/Articulos_Venta_Model";

const GetDetailControllerArticulos_De_Venta = async (id: string) => {
  try {
    const response = await Articulos_Coleccionables.findByPk(id);
    if (response) {
      return response;
    } else {
      throw new Error("No se encontro ningun articulo!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetDetailControllerArticulos_De_Venta;
