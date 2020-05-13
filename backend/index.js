const express = require("express");
const path = require("path");

const app = express();

const HOST = "0.0.0.0";
const PORT = "8088";

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is ready");
});
