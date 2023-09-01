import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Vehiculos_Terrestres extends Model {
  // public id?: number;
  // public Imagen: string;
  // public paisesQueLaUsaron: string[];
  // public paisDeCreacion: string;
  // public nombreDelvehiculo: string;
  // public Historia: string;
  // public Descripcion: string;
  // public añosDeDesUso: string;
  // public ConflictosENDondeParticipo: string[];
  // public Imagenes: string[];
}

Vehiculos_Terrestres.init(
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
    modelName: "Vehiculos_Terrestres",
    tableName: "Vehiculos_Terrestres",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Vehiculos_Terrestres;
