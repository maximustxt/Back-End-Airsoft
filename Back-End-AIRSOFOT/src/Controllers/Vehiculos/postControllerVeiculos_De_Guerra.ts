//-Model:
import Vehiculos from "../../Models/Veiculos_Model/Veiculos_Model";

const postControllerVeiculos_De_Guerra = async (Info: any) => {
  try {
    const response = await Vehiculos.findOne({
      where: { nombreDelvehiculo: Info.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Vehiculo ya creado");
    } else {
      await Vehiculos.create(Info);
      return "Vehiculo Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerVeiculos_De_Guerra;
