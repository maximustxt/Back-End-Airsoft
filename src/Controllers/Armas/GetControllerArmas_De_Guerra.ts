//- Models:
import Armas from "../../Models/Armas_Model/Armas_Model";

const GetControllerArmas_De_Guerra = async () => {
  try {
    const response = Armas.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerArmas_De_Guerra;
