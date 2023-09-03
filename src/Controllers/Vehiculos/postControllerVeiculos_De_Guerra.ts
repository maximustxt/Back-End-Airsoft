//-Model:
import Vehiculos from "../../Models/Veiculos_Model/Veiculos_Model";
//- Interfaces:
import Vehiculo from "../../Interface/Vehiculos/Vehiculos";

const postControllerVeiculos_De_Guerra = async (InfoVehiculo: Vehiculo) => {
  try {
    const response = await Vehiculos.findOne({
      where: { nombreDelvehiculo: InfoVehiculo.nombreDelvehiculo },
    });

    if (response) {
      throw new Error("Vehiculo ya creado");
    } else {
      const {
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelvehiculo,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
      } = InfoVehiculo;

      await Vehiculos.create({
        Imagen,
        paisesQueLaUsaron,
        paisDeCreacion,
        nombreDelvehiculo,
        Historia,
        Descripcion,
        añosDeDesUso,
        ConflictosENDondeParticipo,
        Imagenes,
      });
      return "Vehiculo Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerVeiculos_De_Guerra;
