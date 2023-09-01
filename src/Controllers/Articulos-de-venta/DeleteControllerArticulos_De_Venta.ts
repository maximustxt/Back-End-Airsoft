//- Model:
import Articulos_Ventas from "../../Models/Articulos_Venta_Model/Articulos_Venta_Model";

const DeleteControllerArticulos_De_Venta = async (id: string) => {
  try {
    await Articulos_Ventas.destroy({
      where: {}, // Sin condición, eliminará todo.
      truncate: true, // Esta opción reiniciará el contador automático de ID.
    });
    return "Todos los artículos de venta han sido eliminados.";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default DeleteControllerArticulos_De_Venta;
