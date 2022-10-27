const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const topics = require("./data/courses.json");
const course = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("Mr Tech Expert API Running");
});

app.get("/course-topics", (req, res) => {
  res.send(topics);
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((n) => n.topic_id === id);
  res.send(selectedCourse);
});
app.get("/enrollment/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((n) => n.topic_id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("Mr Tech Expert Server is running on port", port);
});
module.exports = app;
