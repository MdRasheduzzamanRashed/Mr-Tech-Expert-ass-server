const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./Data/data.json");

app.get("/", (req, res) => {
  res.send("Mr Tech Expert API Running");
});

app.get("/courses-topics", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const category_course = course.filter((n) => n.category_id === id);
  res.send(category_course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((n) => n._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("Mr Tech Expert Server is running on port", port);
});
