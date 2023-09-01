//-Model:
import Vehiculos from "../../Models/Veiculos_Model/Veiculos_Model";

const GetControllerVeiculos_De_Guerra = async () => {
  try {
    const response = await Vehiculos.findAll();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetControllerVeiculos_De_Guerra;
