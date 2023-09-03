//- Model:
import Articulos_Ventas from "../../Models/Articulos_Venta_Model/Articulos_Venta_Model";

//- Interfaces:
import Articulo from "../../Interface/Articulos/Articulos";

const postControllerArticulos_De_Venta = async (Info: Articulo) => {
  try {
    const response = await Articulos_Ventas.findOne({
      where: { Imagen: Info.Imagen },
    });

    if (response) {
      throw new Error("Articulo ya creado");
    } else {
      const {
        Name,
        Imagen,
        Imagenes,
        Precio,
        PrecioUnitario,
        Contador,
        Stock,
        Descripcion,
        Tipo,
      } = Info;

      await Articulos_Ventas.create({
        Name,
        Imagen,
        Imagenes,
        Precio,
        PrecioUnitario,
        Contador,
        Stock,
        Descripcion,
        Tipo,
      });
      return "Articulo Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerArticulos_De_Venta;
