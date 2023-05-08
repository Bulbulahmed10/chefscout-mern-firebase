const express = require("express");
const app = express();
const PORT = 4000;
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const countryFoodName = require("./data/countryFoodName.json");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/countryFoodName", (req, res) => {
  res.send(countryFoodName);
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
