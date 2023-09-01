import { Router } from "express";
//- Controllers:
import GetControllerHistorias_De_Guerra from "../../Controllers/Historias De Guerra/GetControllerHistorias_De_Guerra";
import postControllerHistorias_De_Guerra from "../../Controllers/Historias De Guerra/postControllerHistorias_De_Guerra";
import GetDetailControllerHistorias_De_Guerra from "../../Controllers/Historias De Guerra/GetDetailControllerHistorias_De_Guerra";
import DeleteControllerHistorias_De_Guerra from "../../Controllers/Historias De Guerra/DeleteControllerHistorias_De_Guerra";
//- Instance:
const Historias_De_Guerra = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Obtener Historias:
Historias_De_Guerra.get("/", async (req, res) => {
  try {
    const response = await GetControllerHistorias_De_Guerra();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Crear Historias:
Historias_De_Guerra.post("/", async (req, res) => {
  try {
    const Info = req.body;
    const response = await postControllerHistorias_De_Guerra(Info);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Detail:
Historias_De_Guerra.get("/Detail/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerHistorias_De_Guerra(id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Eliminar:
Historias_De_Guerra.delete("/Delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await DeleteControllerHistorias_De_Guerra(id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Historias_De_Guerra;
