import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Aviacion extends Model {
  // public id?: number;
  // public Imagen: string;
  // public paisDeCreacion: string;
  // public nombreDelvehiculo: string;
  // public Historia: string;
  // public Descripcion: string;
  // public añosDeDesUso: string;
  // public ConflictosENDondeParticipo: string[];
  // public Imagenes: string[];
  // public coloresDeCamuflaje: string[];
}

Aviacion.init(
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
    //-----------Paises que lo usan:
    paisesQueLaUsaron: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    //---------Pais De Creacion:
    paisDeCreacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------nombre Del vehiculo:
    nombreDelvehiculo: {
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
    modelName: "Aviacion",
    tableName: "Aviacion",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Aviacion;
