import { Router } from "express";
import mercadopago from "mercadopago";

//- Controller:
import getControllerCarrito from "../../Controllers/Carrito/getControllerCarrito";

//- Configuracion Mercado Pago:
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN!,
});

const Mercado_Pago = Router();

// Definir una interfaz para el producto
interface Producto {
  id: string;
  Name: string;
  Precio: number;
  Contador: number;
  Imagen: string;
  Descripcion: string;
  PrecioUnitario: number;
}

// Ruta Mercado Pago:
Mercado_Pago.post("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;

    // Configurar la URL de retorno apropiadamente
    const URL = "http://localhost:3000";

    const productos = await getControllerCarrito(idUser);

    const arrayProductos = productos.map((e) => ({
      id: e.id,
      title: e.Name,
      picture_url: e.Imagen,
      unit_price: e.PrecioUnitario,
      currency_id: "USD", // La moneda en la que se cotiza el producto
      description: e.Descripcion,
      quantity: e.Contador, // Agregar la cantidad deseada aquí
    }));

    console.log(arrayProductos);

    //- Configurar la preferencia de MercadoPago
    const preference: any = {
      items: arrayProductos,
      back_urls: {
        success: `${URL}/success`,
        failure: ``,
        pending: ``,
      },
      auto_return: "approved",
      binary_mode: true,
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).send({ response });
  } catch (error: any) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).send(error.message);
  }
});

export default Mercado_Pago;
