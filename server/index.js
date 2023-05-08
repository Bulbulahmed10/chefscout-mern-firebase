const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 4000;

const countryFoodName = require("./data/countryFoodName.json");
const connectDb = require("./db/connectDb");
const routes = require("./routes/routes");
const uri = process.env.MONGODB_URI

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/countryFoodName", (req, res) => {
  res.send(countryFoodName);
});

app.use('/api', routes)


// connect mongoDB
connectDb()



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

    app.get("/chefs", async (req, res) => {
      const cursor = chefsCollection.find();
      const result = await cursor.toArray();
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
