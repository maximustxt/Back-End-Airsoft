//- Model:
import Aviacion from "../../Models/Aviacion_Model/Aviacion_Model";

const getControllerAviacion_De_Guerra = async () => {
  try {
    const response = await Aviacion.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getControllerAviacion_De_Guerra;
