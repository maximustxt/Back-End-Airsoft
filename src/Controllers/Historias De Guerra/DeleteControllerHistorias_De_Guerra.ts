//- Model:
import Historias_De_Guerra from "../../Models/Historias_De_Guerra_Model/Historias_De_Guerra_Model";

const DeleteControllerHistorias_De_Guerra = async (id: string) => {
  try {
    const Historia = await Historias_De_Guerra.findByPk(id);
    if (Historia) {
      await Historia.destroy();
      return "Historia Eliminada.";
    } else {
      throw new Error("No existe esta historia!.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default DeleteControllerHistorias_De_Guerra;
