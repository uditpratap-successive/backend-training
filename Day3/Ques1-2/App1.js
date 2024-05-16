/*Setup Validation middleware
Install joi package using npm - npm install joi
Include joi in your express file -
const Joi = require('joi');
Apply joi in your code, sample code as below - 

// Example validation schema

  const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
Incorporate the validation middleware with the previously developed API.
*/

const express = require("express");
const validator1 = require("./validator1");

const app = express();
app.use(validator1);

app.post("/signup", (req, resp) => {  
  console.log("posted data on signup page");
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
