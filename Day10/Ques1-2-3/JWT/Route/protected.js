const express = require("express");
const verify = require("../Middleware/security");
const { protected } = require("../controller/controller");

const router = express.Router();

router.get("/protect", verify, protected);

module.exports = router;
