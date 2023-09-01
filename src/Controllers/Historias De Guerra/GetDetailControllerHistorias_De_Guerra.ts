//- Model:
import Historias_De_Guerra from "../../Models/Historias_De_Guerra_Model/Historias_De_Guerra_Model";

const GetDetailControllerHistorias_De_Guerra = async (id: string) => {
  try {
    const response = await Historias_De_Guerra.findByPk(id);
    if (response) {
      return response;
    } else {
      throw new Error("No se encontro ningun cañon!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetDetailControllerHistorias_De_Guerra;
