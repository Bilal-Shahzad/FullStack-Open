const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGO_PASSWORD) {
  console.error('MongoDB password not found in environment variables.');
  process.exit(1);
}

const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://BILSHAZ:${password}@cluster0.vvqe6kj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const phonebook = mongoose.model('phoneBook', phonebookSchema);

const PhoneBook = new phonebook({
  name: 'Arto Vihavainen',
  number: '045-1232456',
});

PhoneBook.save().then(result => {
  console.log('phonebook saved!');
  mongoose.connection.close();
});
