import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Canones extends Model {}

Canones.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //---------Imagen:
    Imagen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Paises que lo utilizan:
    paisesQueLaUsaron: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    //---------Pais De Creacion:
    paisDeCreacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------nombre Del Cañon:
    nombreDelCañon: {
      type: DataTypes.TEXT,
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
    //---------Años De Uso:
    añosDeDesUso: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------En que conflictos se utilizo:
    ConflictosENDondeParticipo: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de TEXTs,
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
    modelName: "Canones",
    tableName: "Canones",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Canones;
