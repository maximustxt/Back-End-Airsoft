//- Modelo:
import Armas from "../../Models/Armas_Model/Armas_Model";
//- Interfaces:
import Arma from "../../Interface/Armas/Armas";

const postControllerArmas_De_Guerra = async (info: Arma) => {
  try {
    const ArmaEncontrada = await Armas.findOne({
      where: { nombreDelArma: info.nombreDelArma },
    });

    if (!ArmaEncontrada) {
      const {
        Imagen,
        Imagenes,
        nombreDelArma,
        paisDeCreacion,
        paisesQueLaUsaron,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
      } = info;

      await Armas.create({
        Imagen,
        Imagenes,
        nombreDelArma,
        paisDeCreacion,
        paisesQueLaUsaron,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
      });
      return "Arma Posteada Con exito!.";
    } else {
      throw new Error("Arma Ya Encontrada.");
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export default postControllerArmas_De_Guerra;
