console.log("Starting MongoDB connection...");

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');


if (process.argv.length < 3) {
  console.log("Please provide the password as an argument: node mongo.js <password>");
  process.exit(1);
}
const password = process.argv[2]

const uri = `mongodb+srv://bshahzad01:${password}@cluster0.2fdi6qj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB!");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const Note = require('..');
    
    // Fetch and print all notes
    Note.find({}).then(result => {
      console.log("All notes in the database:");
      result.forEach(note => {
        console.log(note);
      });
      mongoose.connection.close();
      console.log("Mongoose connection closed.");
    }).catch(error => {
      console.error("Error fetching notes:", error);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Run the MongoDB connection and operations
run().catch(error => {
  console.error("Error connecting to MongoDB:", error);
});