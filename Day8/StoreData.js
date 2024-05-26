//Implement seed scripts to store a list of playing countries and save records in the database.
const express = require("express");
require("./config");
const collection = require("./SchemaModal");

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const data = await collection.create(req.body);
    console.log("data stored successfully");
    res.send(req.body);
  } catch {
    console.log("error has been caught");
    res.status(500).json("There is some issue");
  }
});
app.get("/checkdata", async (req, res) => {
  try {
    const data = await collection.find();
    console.log(data);
    res.send(data);
  } catch {
    console.log("error has been caught");
    res.status(500).json("There is some issue");
  }
  
});
app.listen(4000, () => {
  console.log("server is runnning on port 4000");
});
