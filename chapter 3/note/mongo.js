const mongoose = require('mongoose')
require('dotenv').config({ path: 'chapter 3/phonebook/.env' }); 
if (!process.env.MONGO_PASSWORD) {
  console.error('MongoDB password not found in environment variables.');
  process.exit(1);
}

const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://BILSHAZ:${password}@cluster0.vvqe6kj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Mongoose makes things easy',
  date: new Date(),
  important: true,
})

/*
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})