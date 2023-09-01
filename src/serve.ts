import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

//- Routes:
import Armas_De_Guerra from "./Routes/Armas_De_Guerra/Armas_De_Guerra";
import Articulos_De_Venta from "./Routes/Articulos_De_Venta/Articulos_De_Venta";
import Aviacion_De_Guerra from "./Routes/Aviacion_De_Guerra/Aviacion_De_Guerra";
import Barcos_Submarinos_De_Guerra from "./Routes/Barcos_Submarinos_De_Guerra/Barcos_Submarinos_De_Guerra";
import Cañones_De_Guerra from "./Routes/Cañones_De_Guerra/Cañones_De_Guerra";
import Historias_De_Guerra from "./Routes/Historias_De_Guerra/Historias_De_Guerra";
import Veiculos_De_Guerra from "./Routes/Veiculos_De_Guerra/Veiculos_De_Guerra";
import Usuarios from "./Routes/Usuarios/Usuarios";
import Carrito from "./Routes/Carrito/Carrito";
import Detail from "./Routes/Detail/Detail";
import Mercado_Pago from "./Routes/Mercado_Pago/Mercado_Pago";
import Contador from "./Routes/Carrito/Contador/Contador";
import Compras from "./Routes/Compras/Compras";

//- Instance:
const app = express();

//- Mildwares:
app.use(cors());
app.use(morgan("dev"));
app.use(json());

//- Rutas:
app.use("/Historias-De-Guerra", Historias_De_Guerra);
app.use("/Veiculos_De_Guerra", Veiculos_De_Guerra);
app.use("/Aviones_De_Combate", Aviacion_De_Guerra);
app.use("/Barcos_Submarinos_De_Guerra", Barcos_Submarinos_De_Guerra);
app.use("/Canones_De_Guerra", Cañones_De_Guerra);
app.use("/Armas_De_Guerra", Armas_De_Guerra);
app.use("/Articulos_De_Venta", Articulos_De_Venta);
app.use("/Usuarios", Usuarios);
app.use("/Carrito", Carrito);
app.use("/Detail", Detail);
app.use("/Mercado_Pago", Mercado_Pago);
app.use("/Contador", Contador);
app.use("/Compras", Compras);

export default app;
