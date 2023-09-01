import { Model, DataTypes } from "sequelize";
import sequelize from "../../DB";

class Articulos_Ventas extends Model {}

Articulos_Ventas.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //---------nombre Del Articulo:
    Name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Imagen:
    Imagen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //---------Imagenes:
    Imagenes: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // Definición del campo array de TEXTs,
      allowNull: false,
    },
    //---------precio:
    Precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //---------precio Unitario:
    PrecioUnitario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //---------Contador:
    Contador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //---------Stock:
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //---------Descripcion:
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //----------Tipo De Articulo:
    Tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "Articulos_Ventas",
    tableName: "Articulos_Ventas",
    timestamps: false, // Excluir las columnas de fecha
  }
);

export default Articulos_Ventas;
