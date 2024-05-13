const collection = require("../schema");
const bcrypt = require("bcryptjs");

const signupservice = async (req, res) => {
  const name = req.body.name;
  let password = req.body.password;
  try {
    const matcheduser = await collection.findOne({ name: name });
    if (!matcheduser) {
      const hashedpassword = await bcrypt.hash(password, 10);

      console.log(hashedpassword);
      const newUser = await collection.create({
        name: name,
        password: hashedpassword,
      });
      res.send(hashedpassword);
    } else {
      res.send("Username is already present ");
    }
  } catch (err) {
    res.status(201).send(`Error in signup is:${err}`);
  }
};
module.exports = signupservice;
