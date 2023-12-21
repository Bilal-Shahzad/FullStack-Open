console.log("Starting MongoDB connection...");

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const uri = "mongodb+srv://bshahzad01:BILSHAZ@cluster0.2fdi6qj.mongodb.net/?retryWrites=true&w=majority";

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
    // Connect the client to the server	(optional starting in v4.7)
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB!");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Replace 'Note' and './path/to/your/note/model' with your actual Mongoose model and its path
const Note = require('./path/to/your/note/model');

console.log("Creating a new Note instance...");
const note = new Note({
  content: 'HTML is Easy',
  important: true,
});

console.log("Saving the Note instance...");
note.save().then(result => {
  console.log('Note saved!');
  console.log("Closing MongoDB connection...");
  mongoose.connection.close();
}).catch(error => {
  console.error("Error saving Note:", error);
});

// Run the MongoDB connection and operations
run().catch(error => {
  console.error("Error connecting to MongoDB:", error);
});
