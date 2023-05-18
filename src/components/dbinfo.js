const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bananaox:"  + process.env.MONGO_PASSWORD + "@cluster0.ronxl1c.mongodb.net/?retryWrites=true&w=majority";

const Client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});