console.log("Starting MongoDB connection...");

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const password = process.argv[2];

if (process.argv.length < 3) {
  console.log("Please provide the password as an argument: node mongo.js <password>");
  process.exit(1);
}

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

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const Note = require('../phonebook/phonebook/src/App');

    Note.find({}).then(result => {
      console.log("All notes in the database:");
      result.forEach(note => {
        console.log(note);
      });
      mongoose.connection.close();
      console.log("Mongoose connection closed.");
    }).catch(error => {
      console.error("Error fetching notes:", error);
      mongoose.connection.close();
      console.log("Mongoose connection closed.");
    });
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

run().catch(error => {
  console.error("Error connecting to MongoDB:", error);
});
