//- Model:
import Cañones from "../../Models/Cañones_Model/Cañones_Model";

const postControllerCañones_De_Guerra = async (Info: any) => {
  try {
    const response = await Cañones.findOne({
      where: { nombreDelCañon: Info.nombreDelCañon },
    });

    if (response) {
      throw new Error("Cañon ya creado");
    } else {
      await Cañones.create(Info);
      return "Cañones Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerCañones_De_Guerra;
