const express = require("express");
const app = express();

class HealthRoute {
  constructor() {
    this.handleGet = this.handleGet.bind(this);
    this.middleware = this.middleware.bind(this);
  }

  middleware(req, res, next) {
    console.log("Middleware executed");
    next();
  }
  handleGet(req, res) {
    res.send("Server is healthy");
  }
}
const healthRoute = new HealthRoute();

app.use(healthRoute.middleware);

app.get("/health", healthRoute.handleGet);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
