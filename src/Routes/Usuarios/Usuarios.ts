import { Router } from "express";
//- Controllers:
import GetControllerUsuarios from "../../Controllers/Usuarios/GetControllerUsuarios";
import postControllerUsuarios from "../../Controllers/Usuarios/postControllerUsuarios";
import deleteControllerUsuarios from "../../Controllers/Usuarios/deleteControllerUsuarios";
//- Instance:
const Usuarios = Router();

//*--------------------------------------------RUTAS--------------------------------------------*//

//- Otener Datos Usuario:
Usuarios.get("/", async (req, res) => {
  try {
    const response = await GetControllerUsuarios();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//- Crear Usuario:
Usuarios.post("/", async (req, res) => {
  try {
    const { name, possword, email } = req.body;
    if (!name && !possword && !email) {
      res.status(404).json("No se logro obtener totos los datos");
    } else {
      const Info = req.body;
      const response = await postControllerUsuarios(Info);
      res.status(200).json(response);
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//- Eliminar Usuario:
Usuarios.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const response = await deleteControllerUsuarios(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default Usuarios;
