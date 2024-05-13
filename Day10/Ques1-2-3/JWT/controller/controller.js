const loginservice = require("../service/loginservice");
const signupservice = require("../service/signupservice");

const signup = async (req, res) => {
  try {
    await signupservice(req, res);
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    console.log("you reached to signup");
    await loginservice(req, res);
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).send("Internal server error");
  }
};
const protected = (req, res) => {
  res.send(
    "Your cookie token matched ,So you are allowed to enter to this page"
  );
};
module.exports = { signup, login, protected };
