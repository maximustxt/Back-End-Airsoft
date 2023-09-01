//- Model:
import Articulos_Ventas from "../../Models/Articulos_Venta_Model/Articulos_Venta_Model";

const postControllerArticulos_De_Venta = async (Info: any) => {
  console.log(Info);
  try {
    const response = await Articulos_Ventas.findOne({
      where: { Imagen: Info.Imagen },
    });

    if (response) {
      throw new Error("Articulo ya creado");
    } else {
      await Articulos_Ventas.create(Info);
      return "Articulo Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerArticulos_De_Venta;
