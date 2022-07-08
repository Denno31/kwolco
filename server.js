const express = require("express");
const routes = require("./routes.js");
const app = express();

const PORT = 5000; //

app.get("/", (req, res) => {
  res.send("app is working");
});
app.use("/api/v1/", routes);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
