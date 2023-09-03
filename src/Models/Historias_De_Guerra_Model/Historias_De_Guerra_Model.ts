import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Historias_De_Guerra extends Model {}

Historias_De_Guerra.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //---------Titulo:
    titulo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Imagen:
    Imagen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Pais De Creacion:
    paisDondeSucedio: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de strings,
      allowNull: false,
    },
    //---------Historia:
    Historia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Descripcion:
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Imagenes:
    Imagenes: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de strings,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "Historias_De_Guerra",
    tableName: "Historias_De_Guerra",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Historias_De_Guerra;
