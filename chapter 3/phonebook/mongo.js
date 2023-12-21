console.log("Starting MongoDB connection...");

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const password = process.argv[2];

if (process.argv.length < 3) {
  console.log("Please provide the password as an argument: node mongo.js <password>");
  process.exit(1);
}

const uri = `mongodb+srv://bshahzad01:BILSHAZ@cluster0.2fdi6qj.mongodb.net/?retryWrites=true&w=majority`;

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
    // Connect the client to the server (optional starting in v4.7)
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB!");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Replace 'Note' and './path/to/your/note/model' with your actual Mongoose model and its path
    const Note = require('./path/to/your/note/model');
    console.log("Creating a new Note instance...");

    const note = new Note({
      title: process.argv[3],
      content: process.argv[4],
    });

    console.log("Saving the Note instance...");
    await note.save();
    console.log('Note saved!');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("MongoDB connection closed.");
    mongoose.connection.close();
    console.log("Mongoose connection closed.");
  }
}

// Run the MongoDB connection and operations
run().catch(error => {
  console.error("Error connecting to MongoDB:", error);
});
