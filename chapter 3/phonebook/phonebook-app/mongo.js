const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); 

if (!process.env.MONGO_PASSWORD) {
  console.error('MongoDB password not found in environment variables.');
  process.exit(1);
}

const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://BILSHAZ:${password}@cluster0.vvqe6kj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length===3){
  
  Person.find({}).then(result => {
    console.log('phonebook: ')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })

}else{
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  }) 
  
  person.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}