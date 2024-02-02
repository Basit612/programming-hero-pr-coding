// Access the golden rod color value in output.


const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};



console.log(colors["golden rod"]); 



// task-2
// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};
car.passengerCapacity = 5;

car["passengerCapacity"] = 5;


  //Count the number of properties.
  
let student = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true
};

let numberOfProperties = Object.keys(student).length;
console.log(numberOfProperties); 


// Task-5
// Loop through an object and print the key-value pairs with their