import Vehiculos_Terrestres from "../../Models/Veiculos_Model/Veiculos_Model";

const DeleteControllerVehiculos = async () => {
  try {
    // Elimina todos los elementos del carrito :
    await Vehiculos_Terrestres.destroy({
      where: {},
    });

    return "Vehiculos Vaciado con exito!!.";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default DeleteControllerVehiculos;
