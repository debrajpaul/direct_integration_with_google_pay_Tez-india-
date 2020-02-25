const express = require("express");
const path = require("path");

// express instance

const app = express();

// Static file
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pay.html"));
});

// listening port
app.listen(4001, err => {
  err
    ? console.log("app:server", `Failed to start server instance %O`, err)
    : console.log("app:server", `Listening on port ${4001}`);
});
