import { Router } from "express";
//- Controllers:
import GetControllerCañones_De_Guerra from "../../Controllers/Cañones/GetControllerCañones_De_Guerra";
import postControllerCañones_De_Guerra from "../../Controllers/Cañones/postControllerCañones_De_Guerra";

const Cañones_De_Guerra = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Cañones:
Cañones_De_Guerra.get("/", async (req, res) => {
  try {
    const response = await GetControllerCañones_De_Guerra();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Crear Cañones:
Cañones_De_Guerra.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerCañones_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Cañones_De_Guerra;
