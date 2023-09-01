//- Model:
import Historias_De_Guerra from "../../Models/Historias_De_Guerra_Model/Historias_De_Guerra_Model";

const GetControllerHistorias_De_Guerra = async () => {
  try {
    const response = await Historias_De_Guerra.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerHistorias_De_Guerra;
