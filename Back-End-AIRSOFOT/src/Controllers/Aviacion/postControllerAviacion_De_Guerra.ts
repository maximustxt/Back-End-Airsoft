//-Model:
import Aviacion from "../../Models/Aviacion_Model/Aviacion_Model";

const postControllerAviacion_De_Guerra = async (Info: any) => {
  try {
    const response = await Aviacion.findOne({
      where: { nombreDelvehiculo: Info.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Vehiculo ya creado");
    } else {
      await Aviacion.create(Info);
      return "Avion Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerAviacion_De_Guerra;
