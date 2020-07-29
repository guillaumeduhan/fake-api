const express = require("express");
const app = express();

app.use(require("./routes"));

async function start() {
  app.listen(3000, function () {
    console.log("Launched on port 3000!");
  });
}

start();
