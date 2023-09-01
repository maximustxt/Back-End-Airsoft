//- Modelo:
import Armas from "../../Models/Armas_Model/Armas_Model";
//- Interfaces:
import Arma from "../../Interface/Armas/Armas";

const postControllerArmas_De_Guerra = async (info: any) => {
  try {
    const ArmaEncontrada = await Armas.findOne({
      where: { nombreDelArma: info.nombreDelArma },
    });

    if (!ArmaEncontrada) {
      await Armas.create(info);
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
