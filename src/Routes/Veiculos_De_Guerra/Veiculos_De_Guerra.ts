import { Router } from "express";
//- Controllers:
import GetControllerVeiculos_De_Guerra from "../../Controllers/Vehiculos/GetControllerVeiculos_De_Guerra";
import postControllerVeiculos_De_Guerra from "../../Controllers/Vehiculos/postControllerVeiculos_De_Guerra";

//- Instance:
const Veiculos_De_Guerra = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Vehiculos:
Veiculos_De_Guerra.get("/", async (req, res) => {
  try {
    const response = await GetControllerVeiculos_De_Guerra();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Crear Vehiculos:
Veiculos_De_Guerra.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerVeiculos_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Veiculos_De_Guerra;
