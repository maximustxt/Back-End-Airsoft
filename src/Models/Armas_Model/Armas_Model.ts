import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Armas extends Model {}

Armas.init(
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
    //---------Pais De Creacion:
    paisDeCreacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //----------Paises que la usaron:
    paisesQueLaUsaron: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de TEXTs,
      allowNull: false,
    },
    //---------nombre Del Arma:
    nombreDelArma: {
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
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de TEXTs,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "Arma",
    tableName: "Armas",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Armas;
