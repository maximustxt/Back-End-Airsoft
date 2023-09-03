//- Model:
import Aviacion from "../../Models/Aviacion_Model/Aviacion_Model";
//- Interfaces:
import Aviaciones from "../../Interface/Aviacion/Aviacion";

const postControllerAviacion_De_Guerra = async (Info: Aviaciones) => {
  try {
    const response = await Aviacion.findOne({
      where: { nombreDelvehiculo: Info.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Vehiculo ya creado");
    } else {
      const {
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelvehiculo,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
        coloresDeCamuflaje,
      } = Info;

      await Aviacion.create({
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelvehiculo,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
        coloresDeCamuflaje,
      });
      return "Avion Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerAviacion_De_Guerra;
