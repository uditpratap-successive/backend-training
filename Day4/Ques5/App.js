// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser'); 
const { generateMockUserData, generateMockProductData } = require('./yourSeederModule'); 


const app = express();

app.use(bodyParser.json());

app.post('/seeded-data', (req, res) => {

  const { type, count } = req.body;

  let seededData;
  if (type === 'user') {
    seededData = generateMockUserData(count);
  } else if (type === 'product') {
    seededData = generateMockProductData(count);
  } else {
    // If an invalid type is provided, return an error response
    return res.status(400).json({ error: 'Invalid data type specified' });
  }

  // Send the seeded data as a response
  res.json(seededData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
