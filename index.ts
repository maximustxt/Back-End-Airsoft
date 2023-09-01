import "reflect-metadata";
import sequelize from "./src/DB";
import app from "./src/serve";

sequelize
  .sync({ force: false, logging: false }) // logging : imprime o no imprime mensajes de registro.
  .then(() => {
    console.log("base de datos conectada! :D");
    app.listen(3004, function () {
      console.log("serve is listening on port 3001!");
    });
  })
  .catch((err) => console.error(err));
