const express = require("express");
const bodyParser = require("body-parser");
const {
  generateMockUserData,
  generateMockProductData,
} = require("./yourSeederModule");

const app = express();

app.use(bodyParser.json());

app.post("/seeded-data", (req, res) => {
  const { type, count } = req.body;

  let seededData;
  if (type === "user") {
    seededData = generateMockUserData(count);
  } else if (type === "product") {
    seededData = generateMockProductData(count);
  } else {
    return res.status(400).json({ error: "Invalid data type specified" });
  }

  res.json(seededData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
