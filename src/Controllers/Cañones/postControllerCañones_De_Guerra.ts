//- Model:
import Cañones from "../../Models/Cañones_Model/Cañones_Model";
//- Interfaces:
import Cañon from "../../Interface/Cañones/Cañones";

const postControllerCañones_De_Guerra = async (Info: Cañon) => {
  try {
    const response = await Cañones.findOne({
      where: { nombreDelCañon: Info.nombreDelCañon },
    });

    if (response) {
      throw new Error("Cañon ya creado");
    } else {
      const {
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelCañon,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
      } = Info;

      await Cañones.create({
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelCañon,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
      });
      return "Cañones Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerCañones_De_Guerra;
