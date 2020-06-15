const readlineSync = require('readline-sync');
const fs = require('fs');

// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const object = {
  num : 2,
  str :  "string",
  arr : [1,2,3],
  coolFunc : function () {
    console.log(this.num);
  }
};

// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question! 

function Car(brand, colour) {
  this.brand = brand;
  this.colour = colour;
}

let car1 = new Car("BMW", "Black");
// console.log(car1);

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// Yes, you can access variables defined outside of functions within the scope of functions in JS.

let brand = "Honda"

const coolCar = () => {
  return `The brand of my car is ${brand}.`
}

// console.log(coolCar());

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// console.log(object.num);

// console.log(object["num"]);

// 5.

// What is JSON? Be clear but concise.

// javascript Object Notation (JSON) is a lightweight data-interchange format, that uses human-readable text to store and transmit data objects consisting of key-value pair.

// 6.

// What is a callback function?

// A callback function is a function passed into another function as an argument and invoked it inside he new function.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

// const function2 = (num1, num2, cb) => {
//   const result = num1 + num2
//   cb(result)
// };

// const callback = (result) => {
//   console.log(result)
// };

// function2(2,3, callback);

// 8.

// Why do we use promises?

// A promise allow developer to use asynchronous code in a javascript environment.

// 9.

// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters. 

// The two functions are resolve() and reject()

// 10.

// What's the different between the rest and spread syntax?

// The difference between the rest and spread syntax is that while spread copies everything, rest is used when we want to retrieve all remaining elements (or all existing elements) after a destructuring operation.

// 11. 

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest. 

const restFunc = (num1, num2, ...rest) => {
  return rest
};

// console.log(restFunc(1,2,3,4,5));

// 12.

// What is a javascript package manager? Name the 2 main package managers

// A JS package manager is program that allow developer to make use of dependencies/packages in their project. The two main package manager are npm and yarn.

// 13.

// What is a package.json? What is it similar to when comparing it to ruby?

//package.json in a package manager is the dependencies for the application is defined, this is equivalent to the Gemfile in Ruby where all the gem dependencies is defined.

// 14.

// a. 
// run the following command
// npm init -y

// b. 
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line 

// let userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

const addNum = (num1, num2) => {
  return num1 + num2;
};

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numsPlusFunct = (num1, num2, cb) => {
  return {key1 : cb(num1, num1), key2 : 'string'};
};


// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// console.log(numsPlusFunct(2,3,addNum));

// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it

// fs.readFile('hello.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// 17.

// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code. 

// synchronous code will execute the code line by line from top to bottom. Asynchronous code take the line of code outside the normal flow and allow to the program to move on to the next line of code without waiting for the code to finish executed.

// One way JS handles asynchronous code is through the use of AJAX.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

//Fetch is a web api designed to make XHR requests. This API was developed to make AJAX requests easier and replace the older, more complicated XHR requests.

// I would use fetch to access information from a web api and use the data in my application.

// Grab data from the spaceX api
// const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
// if (!response.ok) {
//     throw new Error(chalk.bold.redBright('Sorry something went wrong'));
//   }
// const data = await response.json();
// return data;

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

// const southernField = {
//   location : 'upper',
//   crop : 'sorghum',
//   watered: false
// }

// let { watered : status } = southernField;

// console.log(status);

// 20.

// a.
// Uncomment the code below.

// let newNum = 1

// const myFunc = (num, callback) => {
//   newNum *= num
//   callback(newNum)
// }

// myFunc(10, (sum) => {
//   console.log(sum)
// })

// b.
// Explain in your own words how this code works. For example you could start with something like:

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

// Firstly letNum is defined as a viable with the value of 1, the myFunc function is invoked on with an anonymous function passed in as a callback. The newNum is invoked in the myFunc function which take the num argument passed, it then multiply the num by the newNum and save it. The newNum is then passed in the callback function which console log the result on line 214.

// 21.

// You might remember the .times method in ruby

// You could do something like this

// 5.times do 
  // code
// end

// Define a function times() that takes a number and a callback as an argument, the number represents how many times a loop should run, and the callback is the code that is executed each time the loop runs

// Double check the loop is actually running 5 times if you pass in 5 with a console.log in the callback

// You should see 5 outputs

// const times = (num, callback) => {
//   for (let i = 0; i < num; i++){
//     callback();
//   }
// };

// times(5, () => {console.log('hello')});

// 22. 

// Define a Person class, the constructor should take name as an argument and set the name to the this, the class should have a prototype method sayHi() that simply outputs console.log("hello")

class Person{
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hello");
  }
};



// Implement another prototype method addAgeAndHeight() for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

Person.prototype.addAgeAndHeight = function(age, height) {
  this.age = age;
  this.height = height;
};

// Create a new person and pass in name as an argument, console.log the person object

const person = new Person('name')

console.log(person);

// Call the sayHi() method on the person

person.sayHi()

// Call the addAgeAndHeight() method passing in the relevant arguments

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different methods we can chain to our promise to avoid getting a pending promise. What are these 2 methods?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

// 24. 

// a. 
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

// c.
// Using the following API endpoint console.log the yoda text generated from this english phrase "Master Obiwan has lost a planet" 
// Hint: you don't need to pay for a subscription 
// => https://funtranslations.com/api/yoda

// 🎉🎉🎉🎉🎉🎉

// Extra challenges

// Only attempt this if you've completely done everything else

// You'll need to globally install mocha

// npm install --global mocha

// You'll also need to uncomment this code

// const assert = require('assert');

// To run the tests use => mocha <filename> from the command line

// 25.

/*
Once
Creates a version of the function that can only be called one time.
Repeated calls to the modified function will have no effect, returning the value
from the original call. Useful for initialization functions, instead of having
to set a boolean flag and then check it later.

Example:
let total = 0
const count = () => ++total;
let countOnce = once(count);
countOnce()
=> 1
countOnce()
=> 1
*/

// describe('Once', () => {
//   it('returns a function', () => {
//     const exampleOnce = once(() => {})
//     assert.equal(typeof exampleOnce, 'function');
//   });
//   it('only runs once', () => {
//     let total = 0;
//     const count = () => {
//       return ++total;
//     }

//     const countOnce = once(count);
//     assert.equal(countOnce(), 1);
//     assert.equal(countOnce(), 1);
//   });
// });

// 26.

/*
Count By
Sorts a list into groups and returns a count for the number of objects in each
group. Similar to groupBy, but instead of returning a list of values, returns a
count for the number of values in that group.

Example:
_.countBy([1, 2, 3, 4, 5], (num) => {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/

// describe('Count By', () => {
//   it('can group true/false', () => {
//     let grouped = countBy([1, 2, 3, 4, 5], (num) => num % 2 === 0);
//     assert.equal(grouped.true, 2);
//     assert.equal(grouped.false, 3);
//   })
//   it('can group lists', () => {
//     const list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//     const grouped = countBy(list, (numWord) => numWord.length);
//     assert.equal(grouped['3'], 4);
//     assert.equal(grouped['4'], 3);
//     assert.equal(grouped['5'], 3);
//   })
// });

// 27.

/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
*/

// let result;
// describe('Find Last Index', () => {
//   it('finds the last index', () => {
//     const objects = [
//       {a: 0, b: 0},
//       {a: 1, b: 1},
//       {a: 2, b: 2},
//       {a: 0, b: 0}
//     ];
//     result = findLastIndex(objects, {a: 0});
//     assert.equal(result, 3);
//   })
//   it('also finds last index', () => {
//     const dogs = [
//       {name: 'tilly', age: 5},
//       {name: 'sally', age: 10},
//       {name: 'rex', age: 10},
//       {name: 'macy', age: 4}
//     ];
//     result = findLastIndex(dogs, {age: 10});
//     assert.equal(result, 2)
//   })
// });