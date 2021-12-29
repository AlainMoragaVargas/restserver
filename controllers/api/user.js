const { response } = require("express");

const getUsers = (req, res = response) => {
  const { accessToken = 999 } = req.query;

  res.json({
    message:
      "Hola (Método GET) en la ruta api/users separado en el controlador.",
    accessToken,
  });
};

const createUser = (req, res = response) => {
  const { username, id } = req.body; // obtener información del request.

  res.json({
    message:
      "Hola (Método POST) en la ruta api/users separado en el controlador.",
    username,
    id,
  });
};

const updateUser = (req, res = response) => {
  const id = req.params.id;

  res.json({
    message:
      "Hola (Método PUT) en la ruta api/users separado en el controlador.",
    id,
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
};
