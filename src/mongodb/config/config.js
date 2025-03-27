const dotenv = require("dotenv").config({ path: __dirname + "../../../.env" });
const mongoose = require("mongoose");

// -----------mongoose odm tool -----------//
const url = process.env.MONGO_CLUSTER || 'mongodb+srv://developercaish:uOIvQQNobtMkKyI3@blipkart.h1j4bf8.mongodb.net/?retryWrites=true&w=majority&appName=Blipkart';
const dbName = process.env.MONGO_DB_NAME || 'blipkart';
module.exports.connectDB = async () => {
  try {
    await mongoose.connect(url, {
      dbName: dbName,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

// ------------------Basic code to connect---------------//

// const { MongoClient, ServerApiVersion } = require("mongodb");

// const client = new MongoClient(url, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// const dbName = process.env.MONGO_DB_NAME;

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const db = client.db(dbName);
//     const collection = db.collection("products");
//     await db.command({ ping: 1 });

//     const data = await collection.find({}).toArray();
//     console.log(data[0]._id.toString());
//   } catch (error) {
//     console.log("MongoDB Connection Error:", error);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run();
