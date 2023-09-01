import { Router } from "express";
//- Controllers:
import GetControllerArticulos_De_Venta from "../../Controllers/Articulos-de-venta/GetControllerArticulos_De_Venta";
import postControllerArticulos_De_Venta from "../../Controllers/Articulos-de-venta/postControllerArticulos_De_Venta";
import GetDetailControllerArticulos_De_Venta from "../../Controllers/Articulos-de-venta/GetDetailControllerArticulos_De_Venta";
import DeleteControllerArticulos_De_Venta from "../../Controllers/Articulos-de-venta/DeleteControllerArticulos_De_Venta";
//- Instance:
const Articulos_De_Venta = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Articulos De Venta:
Articulos_De_Venta.get("/", async (req, res) => {
  try {
    const response = await GetControllerArticulos_De_Venta();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Crear Articulos De Venta:
Articulos_De_Venta.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerArticulos_De_Venta(Info);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Detail:
Articulos_De_Venta.get("/Detail/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerArticulos_De_Venta(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Eliminar:
Articulos_De_Venta.delete("/Delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await DeleteControllerArticulos_De_Venta(id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Articulos_De_Venta;
