import {
  Model,
  DataTypes,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
} from "sequelize";
import sequelize from "../../DB";

class Usuarios extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;

  //*-------Metodos Carrito:

  // metodos que nos da sequelize para la relacion muchos a muchos:
  public getCarritos!: BelongsToManyGetAssociationsMixin<CarritoUser>;
  public addCarrito!: BelongsToManyAddAssociationMixin<CarritoUser, number>;
  public removeCarrito!: BelongsToManyRemoveAssociationMixin<
    CarritoUser,
    string
  >;
  public setCarritos!: BelongsToManySetAssociationsMixin<CarritoUser, number>;
  public hasCarrito!: BelongsToManyHasAssociationMixin<CarritoUser, number>;

  //*-----------Metodos Compra:

  // metodos que nos da sequelize para la relacion muchos a muchos:
  public getCompras!: BelongsToManyGetAssociationsMixin<Compras>; //-- En tu caso, el modelo se llama Compras, que termina en "s", por lo que Sequelize genera automáticamente getCompras para la relación. Esto es una convención de pluralización que Sequelize utiliza para hacer que las relaciones se vean más semánticas en el código.
  public addCompra!: BelongsToManyAddAssociationMixin<Compras, number>;
  public removeCompra!: BelongsToManyRemoveAssociationMixin<Compras, string>;
  public setCompra!: BelongsToManySetAssociationsMixin<Compras, number>;
  public hasCompra!: BelongsToManyHasAssociationMixin<Compras, number>;
}

Usuarios.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    timestamps: false,
  }
);

//*----------------------------------------------------CARRITO----------------------------------------------------*//

class CarritoUser extends Model {
  public id!: string;
  public Name!: string;
  public Imagen!: string;
  public Imagenes!: string[];
  public Precio!: number;
  public Contador!: number;
  public Stock!: number;
  public Descripcion!: string;
  public Tipo!: string;
  public PrecioUnitario!: number;
}

CarritoUser.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //---------nombre Del Articulo:
    Name: {
      type: DataTypes.STRING,
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
    modelName: "Carrito",
    timestamps: false,
  }
);

//*----------------------------------------------------COMPRAS----------------------------------------------------*//

class Compras extends Model {}

Compras.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "Compras", timestamps: false }
);

//*--------------------------------------------RELACION M:M COMPRAS/USUARIOS-----------------------------------*//

// En el mismo archivo donde defines los modelos
Usuarios.belongsToMany(Compras, {
  through: "UsuariosCompras", // Nombre de la tabla intermedia
  foreignKey: "usuarioId", // Nombre de la columna en la tabla intermedia que hace referencia al Usuario
});

Compras.belongsToMany(Usuarios, {
  through: "UsuariosCompras", // Nombre de la tabla intermedia
  foreignKey: "compraId", // Nombre de la columna en la tabla intermedia que hace referencia al Carrito
});

//*--------------------------------------------RELACION M:M CARRITOS/USUARIOS-----------------------------------*//

// En el mismo archivo donde defines los modelos
Usuarios.belongsToMany(CarritoUser, {
  through: "UsuariosCarritos", // Nombre de la tabla intermedia
  foreignKey: "usuarioId", // Nombre de la columna en la tabla intermedia que hace referencia al Usuario
});

CarritoUser.belongsToMany(Usuarios, {
  through: "UsuariosCarritos", // Nombre de la tabla intermedia
  foreignKey: "carritoId", // Nombre de la columna en la tabla intermedia que hace referencia al Carrito
});

export { CarritoUser, Usuarios, Compras };
