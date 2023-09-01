import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const { BDD, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize({
  host: DB_HOST,
  dialect: "postgres",
  database: BDD,
  username: DB_USER,
  password: DB_PASSWORD,
  port: 5432, // Puerto por defecto de PostgreSQL
  dialectOptions: {
    ssl: {
      require: true, // Habilitar SSL/TLS
      rejectUnauthorized: false, // Para evitar errores de certificado (seguro solo para desarrollo)
    },
  },
  models: [__dirname + "/models/*.ts"], // Ruta a los archivos de los modelos (ME FALTABA ESTO , PARA QUE SE BUSQUEN LOS MODELOS Y PÓDER INTERACTUAR CON LOS MISMOS.)
});

export default sequelize;
