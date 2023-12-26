require("dotenv").config();

// Import mongoose 
const mongoose = require("mongoose");

// Retrieve the MongoDB URI from the environment variables
const mongoDb = process.env.MONGODB_URI;

// Connect to MongoDB using the retrieved URI
mongoose
	.connect(mongoDb)
	.then((result) => {
		// Log a message when successfully connected to MongoDB
		console.log("connected to MongoDB");
	})
	.catch((error) => {
		// Log an error message if there is a connection error
		console.log("error connecting to MongoDB:", error.message);
	});

// Define a MongoDB schema for entry
const entrySchema = new mongoose.Schema({
	name: String,
	number: String,
});

// Export entry model based on the defined schema
module.exports = mongoose.model("Entry", entrySchema);
