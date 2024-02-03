const mongoose = require('mongoose');

require('dotenv').config({ path: '/Users/bilalshahzad/Desktop/Software Engineer /FullStack-Open/chapter 3/phonebook/.env' }); 

// mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

async function run() {
  await mongoose.connect(url);
  mongoose.model('Note', noteSchema)

}
run()
// mongoose.connect(url)
//   .then(result => {
//     console.log('connected to MongoDB');
//   })
//   .catch((error) => {
//     console.log('error connecting to MongoDB:', error.message);
//   });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Note', noteSchema);