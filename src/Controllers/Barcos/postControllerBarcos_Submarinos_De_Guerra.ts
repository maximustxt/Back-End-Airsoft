//- Model:
import Barcos from "../../Models/Barcos_Model/Barcos_Model";
//- Interfaces:
import Barco from "../../Interface/Barcos/Barcos";

const postControllerBarcos_Submarinos_De_Guerra = async (Info: Barco) => {
  try {
    const response = await Barcos.findOne({
      where: { nombreDelvehiculo: Info.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Barco ya creado");
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
      } = Info;

      await Barcos.create({
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelvehiculo,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
      });
      return "Barco Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerBarcos_Submarinos_De_Guerra;
