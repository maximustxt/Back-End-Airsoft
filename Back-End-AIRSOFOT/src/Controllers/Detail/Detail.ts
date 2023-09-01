//- Controllers
import GetControllerCañones_De_Guerra from "../Cañones/GetControllerCañones_De_Guerra";
import GetControllerBarcos_Submarinos_De_Guerra from "../Barcos/GetControllerBarcos_Submarinos_De_Guerra";
import getControllerAviacion_De_Guerra from "../Aviacion/getControllerAviacion_De_Guerra";
import GetControllerArmas_De_Guerra from "../Armas/GetControllerArmas_De_Guerra";
import GetControllerVeiculos_De_Guerra from "../Vehiculos/GetControllerVeiculos_De_Guerra";

const GetDetailControllerDetail = async (id: string) => {
  console.log(id);
  try {
    const Cañones = await GetControllerCañones_De_Guerra();
    const Barcos = await GetControllerBarcos_Submarinos_De_Guerra();
    const Aviacion = await getControllerAviacion_De_Guerra();
    const Armas = await GetControllerArmas_De_Guerra();
    const Vehiculos = await GetControllerVeiculos_De_Guerra();

    const array = [...Cañones, ...Armas, ...Aviacion, ...Vehiculos, ...Barcos];

    const response = array.find((e: any) => e.id === id);

    if (response) {
      return response;
    } else {
      throw new Error(
        "No se encontro ningun elemento con esta caracteristicas"
      );
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetDetailControllerDetail;
