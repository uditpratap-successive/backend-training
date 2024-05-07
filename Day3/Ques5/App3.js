const express = require("express");
const NumericMiddleware = require("./ Numeric_Middlware");
const app = express();
app.use(NumericMiddleware);

app.get("/", (req, res) => {
  res.send("You have now searched in proper manner");
});
app.listen("6000");
