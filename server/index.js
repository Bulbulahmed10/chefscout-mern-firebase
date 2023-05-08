const express = require("express");
const cors = require("cors");
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 4000;


const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const countryFoodName = require("./data/countryFoodName.json");
const uri = process.env.MONGODB_URI

app.use(cors());
app.use(express.json())


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






// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const recipesCollection = client.db("ChefscoutDB").collection("recipes")

    app.get("/recipes2", async(req, res) => {
      const cursor = await recipesCollection.find("recipes")
    })













    await client.db("admin").command({ ping: 1 });
    console.log("Chefscout server successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);











app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
