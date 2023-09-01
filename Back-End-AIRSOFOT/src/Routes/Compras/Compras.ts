import { Router } from "express";
//- Controllers:
import getComprasController from "../../Controllers/Compras/getComprasController";
import postComprasController from "../../Controllers/Compras/postComprasController";
import deleteComprasControllers from "../../Controllers/Compras/deleteComprasControllers";

const Compras = Router();

//*-------------------------------------Rutas-------------------------------*//

//- Obtener Compra :

Compras.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params; // ID del usuario proporcionado en los parámetros de la solicitud

    const Response = await getComprasController(idUser);
    // Retorna los Compras como respuesta
    return res.status(200).json(Response);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

//- Postear Compra :

Compras.post("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params; // ID del usuario proporcionado en los parámetros de la solicitud
    const InfoCompra = req.body;

    if (!idUser || !InfoCompra) {
      throw new Error("Faltan Datos");
    } else {
      const Response = await postComprasController(idUser, InfoCompra);
      // Retorna los Compras como respuesta
      return res.status(200).json(Response);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//- Eliminar Compra :

Compras.delete("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const idCompra = req.query.idCompra as string;

    const Response = await deleteComprasControllers(idCompra, idUser);
    // Retorna los Compras como respuesta
    return res.status(200).json(Response);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

export default Compras;
