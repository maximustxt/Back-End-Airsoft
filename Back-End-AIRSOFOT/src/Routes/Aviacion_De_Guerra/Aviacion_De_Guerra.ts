import { Router } from "express";
//- Controllers:
import getControllerAviacion_De_Guerra from "../../Controllers/Aviacion/getControllerAviacion_De_Guerra";
import postControllerAviacion_De_Guerra from "../../Controllers/Aviacion/postControllerAviacion_De_Guerra";

const Aviacion_De_Guerra = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Aviacion:
Aviacion_De_Guerra.get("/", async (req, res) => {
  try {
    const response = await getControllerAviacion_De_Guerra();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Crear Aviacion:
Aviacion_De_Guerra.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerAviacion_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Aviacion_De_Guerra;
