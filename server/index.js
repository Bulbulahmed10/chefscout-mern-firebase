const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 4000;

const countryFoodName = require("./data/countryFoodName.json");
const connectDb = require("./db/connectDb");
const routes = require("./routes/routes");
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/countryFoodName", (req, res) => {
  res.send(countryFoodName);
});

app.use("/api", routes);

// connect mongoDB
connectDb();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const recipesCollection = client.db("ChefscoutDB").collection("recipes");
    const chefsCollection = client.db("ChefscoutDB").collection("chefs");

    app.get("/recipes", async (req, res) => {
      const cursor = recipesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/recipe", async (req, res) => {
      const recipe = req.body;
      const result = await recipesCollection.insertOne(recipe);
      res.send(result);
    });

    app.get("/chefs", async (req, res) => {
      const cursor = chefsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.put("/chef", async (req, res) => {
      const sellerAndRecipeId = req.body;
      const filter = { chef_id: sellerAndRecipeId.chef_id };
      const options = { upsert: true };
      const updatedChef = {
        $push: { recipes_id: sellerAndRecipeId.recipe_id },
      };

      const result = await chefsCollection.updateOne(
        filter,
        updatedChef,
        options
      );
      res.send(result);
    });

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
