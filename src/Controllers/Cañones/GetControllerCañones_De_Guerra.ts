//- Model:
import Cañones from "../../Models/Cañones_Model/Cañones_Model";

const GetControllerCañones_De_Guerra = async () => {
  try {
    const response = await Cañones.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerCañones_De_Guerra;
