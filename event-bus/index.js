const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  console.log("success 1");
  axios.post("http://localhost:4001/events", event);
  console.log("success 2");
  axios.post("http://localhost:4002/events", event);
  console.log("success 3");

  res.send({ status: "Event sent" });
});

app.listen(4005, () => {
  console.log("Server started on 4005");
});
