//Create a route that expects certain parameters in the request. Implement validation checks and throw a validation error if the checks fail. 
//Handle validation errors gracefully and send a JSON response with error details.


const express = require("express");
const { param, validationResult } = require("express-validator");

const app = express();
app.get(
  "/users/:id",
  [param("id").isInt().withMessage("Invalid user ID")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const userId = req.params.id;
    res.json({ message: `User ID ${userId} is valid` });
  }
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
