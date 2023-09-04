import { Router } from "express";

//- Controllers:
import getControllerCarrito from "../../Controllers/Carrito/getControllerCarrito";
import postControllerCarrito from "../../Controllers/Carrito/postControllerCarrito";
import deleteControllerCarrito from "../../Controllers/Carrito/deleteControllerCarrito";
import GetPrecioTotalCarrito from "../../Controllers/Carrito/PrecioTotalCarrito/GetPrecioTotalCarrito";
import deleteAllCarrito from "../../Controllers/Carrito/deleteAllCarrito";
import getLongitud_Carrito from "../../Controllers/Carrito/getLongitud_Carrito";

//- Instance:
const Carritos = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Carrito:
Carritos.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params; // ID del usuario proporcionado en los parámetros de la solicitud

    const Response = await getControllerCarrito(idUser);
    // Retorna los carritos como respuesta
    return res.status(200).json(Response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

//- Crear Carrito:

Carritos.post("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const {
      id,
      Name,
      Contador,
      Descripcion,
      Tipo,
      Precio,
      PrecioUnitario,
      Imagenes,
      Imagen,
      Stock,
    } = req.body;
    if (
      !id &&
      !Name &&
      !Contador &&
      !Descripcion &&
      !PrecioUnitario &&
      !Tipo &&
      !Precio &&
      !Imagenes &&
      !Imagen &&
      Stock
    ) {
      res.status(404).json("Faltan Datos Del Carrito");
    } else {
      const {
        id,
        Name,
        Contador,
        Descripcion,
        PrecioUnitario,
        Tipo,
        Precio,
        Imagenes,
        Imagen,
        Stock,
      } = req.body;

      const response = await postControllerCarrito(
        {
          id,
          Name,
          Contador,
          Descripcion,
          Tipo,
          Precio,
          PrecioUnitario,
          Imagenes,
          Imagen,
          Stock,
        },
        idUser
      );
      res.status(200).json(response);
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Eliminar Todo el carrito Carrito:

Carritos.delete("/Eliminar_Todo_El_Carrito", async (req, res) => {
  try {
    const response = await deleteAllCarrito();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Eliminar Carrito:

Carritos.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idUser = req.query.idUser as string;
    const response = await deleteControllerCarrito(id, idUser);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Precio Total del Carrito:

Carritos.get("/TotalPrecio/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const response = await GetPrecioTotalCarrito(idUser);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Precio Total del Carrito:

Carritos.get("/Longitud_Carrito/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;

    const response = await getLongitud_Carrito(idUser);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Carritos;
