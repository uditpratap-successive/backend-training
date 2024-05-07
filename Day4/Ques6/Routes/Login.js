const express = require("express");
const jwt = require("jsonwebtoken");
const route=express.Router();
const data = require("../user");
const app = express();
route.post("/login", (req, resp) => {
  const usedata = { name: data.name, email: data.email };
  jwt.sign({ usedata }, "secret-key", { expiresIn: "1h" }, (err, token) => {
    if (err) {
      resp.status(500).send("invalid credentials");
    } else {
      resp.send(token);
    }
  });   
});
module.exports=route;
  