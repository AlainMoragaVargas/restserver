const { Router } = require("express");
const { getUsers, createUser, updateUser } = require("../../controllers/api/user");

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

module.exports = router;
