import { Router } from "express";

//- Controllers:
import postControllerArmas_De_Guerra from "../../Controllers/Armas/postControllerArmas_De_Guerra";
import GetControllerArmas_De_Guerra from "../../Controllers/Armas/GetControllerArmas_De_Guerra";

//- Instance:
const Armas_De_Guerras = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Articulos De Venta:
Armas_De_Guerras.get("/", async (req, res) => {
  try {
    const response = await GetControllerArmas_De_Guerra();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Crear Articulos De Venta:
Armas_De_Guerras.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerArmas_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default Armas_De_Guerras;
