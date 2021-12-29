const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express(); 
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
    this.serverStatus();
  }

  // middlewares de la aplicación.
  middlewares() {
    this.app.use(express.static("public")); // definir la carpeta pública accesible para cualquier usuario.
    this.app.use(cors()); // permite realizar validaciones en el webserver. 
    this.app.use(express.json()); // cualquier información recibida la intentará convertir a json.
  }

  // rutas de la aplicación.
  routes() {
    this.app.use("/api/users", require("../routes/api/user"));
  }

  // estado del servidor en funcionamiento.
  serverStatus() {
    this.app.listen(this.port, () => {
      console.log(`Server running in: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
