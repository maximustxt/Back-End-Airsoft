//- Model:
import Barcos from "../../Models/Barcos_Model/Barcos_Model";

const GetControllerBarcos_Submarinos_De_Guerra = async () => {
  try {
    const response = await Barcos.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetControllerBarcos_Submarinos_De_Guerra;
