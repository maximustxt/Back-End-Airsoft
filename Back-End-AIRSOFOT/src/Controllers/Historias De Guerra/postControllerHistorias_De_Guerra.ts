//- Model:
import Historias_De_Guerra from "../../Models/Historias_De_Guerra_Model/Historias_De_Guerra_Model";

const postControllerHistorias_De_Guerra = async (Info: any) => {
  try {
    const response = await Historias_De_Guerra.findOne({
      where: { titulo: Info.titulo },
    });

    if (response) {
      throw new Error("Historia ya creada");
    } else {
      await Historias_De_Guerra.create(Info);
      return "Historia Creado con exito!.";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default postControllerHistorias_De_Guerra;
