const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;

app.use(bodyParser());

app.get("/", (_req, res) => {
  res.json({
    message: "welcome",
  });
});

app.get("/classes", (_req, res) => {
  res.json([
    {
      id: "1",
      name: "Begin 1",
    },
    {
      id: "2",
      name: "Begin 2",
    },
    {
      id: "3",
      name: "Upper 1",
    },
    {
      id: "3",
      name: "Upper 2",
    },
  ]);
});

app.listen(port, () => {
  console.log(`App ruining in http://localhost:${port}`);
});
