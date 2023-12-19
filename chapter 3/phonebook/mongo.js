// Import Mongoose library
const mongoose = require("mongoose")

// Check if password is provided as a command-line argument
if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  )
  process.exit(1)
}

// Extract password from command-line arguments
const password = process.argv[2]

// Construct MongoDB connection URL
const url = `mongodb+srv://fullstack:${password}@cluster0.mvhetgt.mongodb.net/personApp?retryWrites=true&w=majority`

// Connect to the MongoDB database
mongoose.connect(url)

// Define Mongoose schema for a Person
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

// Create Mongoose model based on the schema
const Person = mongoose.model("Person", personSchema)

// If only the password is provided retrieve and print all persons
if (process.argv.length === 3) {
      // Find all documents in the Person collection
  Person.find({}).then(result => {
        // Print information for each person
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
} else {
      // If additional arguments are provided add a new person to the phonebook
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

    // Save the new person to the database
  person.save().then(result => {
    // make a  success message
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    )
    mongoose.connection.close()
  })
}