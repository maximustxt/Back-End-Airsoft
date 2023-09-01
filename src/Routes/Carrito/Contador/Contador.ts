import { Router } from "express";
//- Controllers:
import PutContadorCarritoController from "../../../Controllers/Carrito/ContadorCarrito/PutContadorCarritoController";
import GetContadorCarrito from "../../../Controllers/Carrito/ContadorCarrito/GetContadorCarrito";
//- Instance:
const Contador = Router();

//*-------------------------------------------RUTAS---------------------------------------------------*//

//- Obtener Contador del Carrito:

Contador.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const idCarrito = req.query.idCarrito as string;

    const response = await GetContadorCarrito(idCarrito, idUser);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Modificar Contador del Carrito:

Contador.put("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const idCarrito = req.query.idCarrito as string;
    const InfoContador = req.query.InfoContador as string;
    const ValorContador = req.body.ValorContador;

    const response = await PutContadorCarritoController(
      InfoContador,
      ValorContador,
      idCarrito,
      idUser
    );
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Contador;
