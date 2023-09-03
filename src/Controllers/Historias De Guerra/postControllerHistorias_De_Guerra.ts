//- Model:
import Historias_De_Guerra from "../../Models/Historias_De_Guerra_Model/Historias_De_Guerra_Model";
//- Interfaces:
import Historias_De_Guerras from "../../Interface/Historias_De_Guerra/Historias_De_Guerra";

const postControllerHistorias_De_Guerra = async (
  InfoHistoriasDeGuerra: Historias_De_Guerras
) => {
  try {
    const {
      titulo,
      Imagen,
      paisDondeSucedio,
      Historia,
      Descripcion,
      Imagenes,
    } = InfoHistoriasDeGuerra;

    const response = await Historias_De_Guerra.findOne({
      where: { titulo },
    });

    if (response) {
      throw new Error("Historia ya creada");
    } else {
      await Historias_De_Guerra.create({
        titulo,
        Imagen,
        paisDondeSucedio,
        Historia,
        Descripcion,
        Imagenes,
      });
      return "Historia Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerHistorias_De_Guerra;
