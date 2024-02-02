// Task 1

// Write a JavaScript code to reverse the array colors without using the reverse method
const colors = ['red', 'blue', 'green', 'yellow', 'orange']; 
let reversed = []; 
for (let i = colors.length - 1; i >= 0; i--) { 
  reversed.push(colors[i]); 
}
console.log(reversed); 


// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique
const numbers = [12, 98, 5, 41, 23, 78, 46]; // Define the input array
let even = []; 
for (let num of numbers) { 
  if (num % 2 === 0) { 
    even.push(num); 
  }
}
console.log(even); 

// Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']; 
var result = "";  the result
for (var num of numbers) { 
  result += num;
}
console.log(result); 


