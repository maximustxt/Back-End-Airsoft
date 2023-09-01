//- Model:
import Barcos from "../../Models/Barcos_Model/Barcos_Model";

const postControllerBarcos_Submarinos_De_Guerra = async (Info: any) => {
  try {
    const response = await Barcos.findOne({
      where: { nombreDelvehiculo: Info.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Barco ya creado");
    } else {
      await Barcos.create(Info);
      return "Barco Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerBarcos_Submarinos_De_Guerra;
