const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bananaox:"  + process.env.MONGO_PASSWORD + "@cluster0.ronxl1c.mongodb.net/?retryWrites=true&w=majority";


let db;

async function connectToDb() {
  const Client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  await Client.connect();
  db = Client.db("msuleague");
}

function getDb() {
  return db;
}


  


export { connectToDb, getDb };
