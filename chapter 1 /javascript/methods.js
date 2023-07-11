// arrow functions are defined by using a function keywords that vary on how they react 
// assing mehtods to anobject by defining properties that are functions 
const Bilal = {
    name: 'Bilal',
    age:21,
    education: 'WSU',
  
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
  Bilal.greet() 
// "hello, my name is Bilal" gets printed

// methods can be given to objects aftet the creation of it 

Bilal.growOlder = function() {
    this.age += 1
  }

  console.log(Bilal.age)   // 21 is printed
  Bilal.growOlder()
  console.log(Bilal.age)   // 22 is printed