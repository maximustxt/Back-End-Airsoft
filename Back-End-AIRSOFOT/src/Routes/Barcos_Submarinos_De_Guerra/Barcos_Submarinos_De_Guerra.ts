import { Router } from "express";

//- Controllers:
import GetControllerBarcos_Submarinos_De_Guerra from "../../Controllers/Barcos/GetControllerBarcos_Submarinos_De_Guerra";
import postControllerBarcos_Submarinos_De_Guerra from "../../Controllers/Barcos/postControllerBarcos_Submarinos_De_Guerra";

const Barcos_Submarinos_De_Guerra = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Maritimos:
Barcos_Submarinos_De_Guerra.get("/", async (req, res) => {
  try {
    const response = await GetControllerBarcos_Submarinos_De_Guerra();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Crear Maritimos:
Barcos_Submarinos_De_Guerra.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerBarcos_Submarinos_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default Barcos_Submarinos_De_Guerra;
