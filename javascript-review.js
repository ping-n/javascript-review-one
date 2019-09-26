// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const myObj = {
  number: 1,
  string: "harrison",
  array: [1, 2, 3],
  func: function() {
    console.log(this.number)
  }
}
// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

function Car(make) {
  this.make = make
  this.color = 'red'
}

const holden = new Car('holden')

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

const numbers = [1, 2, 3]

// const myFunc = () => console.log(numbers)
// myFunc()

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

const anotherObj = {
  num1: 1,
  num2: 2
}

// dot notation
const num1 = anotherObj.num1
// console.log(num1)

// square bracket notation
const num2 = anotherObj["num2"]
// console.log(num2)

// 5.

// What is JSON? Be clear but concise.

// JSON is a data structure
// It's commonly used on the web as you can easily send or read JSON
// JSON is more flexible than something like CSV as you can use arrays or objects whereas in CSV you're stuck with more basic data types

// 6.

// What is a callback?

// A callback is a function that's passed as an argument to another function
// This function can then be invoked inside of the other function, and it can receive arguments like any other normal function

// 7.

// Define a function that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const myNumFunc = (num1, num2, callback) => {
  callback(num1 + num2)
}

// myNumFunc(2, 2, (sum) => console.log(sum))

// 8.

// Why do we use promises?

// We use promises to handle asynchronous operations in javascript 
// A promise represents the eventual completion or failure of an asynchronous piece of code
// An example of this is accessing a value inside of a setTimeout 

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// resolve, reject
// .then, .catch
// in async await we have try and catch

// 10.

// What is the DOM?

// The DOM is the document object model
// It's a tree like structure that contains everything in our browser window
// This includes elements in the HTML document, stylesheets etc 

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

const myThirdObj = {
  count: 3,
  array: [1, 2, 3],
  myFunc: function() {
    this.array.forEach((num) => console.log(num)) 
  }
}

// myThirdObj.myFunc()

// 12.

// What is NPM? In your brief explanation refer to package.json.

// NPM is node package manager

// It's a repository of javascript code (libraries) that we can import and use in our projects 

// The package.json is where the libraries we've imported are listed

// 13.

// What are Event Listeners? Gives some examples in your response.

// Event listeners are pieces of code in our client side javascript that track what a user is doing in terms of interactions with the site itself
// When an event listener is tracking a certain interaction (like a click or a scroll) a callback function is fired when this interaction occurs

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const numMult = (num1, num2, callback) => {
  callback(num1 * num2)
}

// numMult(2, 5, (sum) => console.log(sum))

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

const addNum = (num1, num2) => {
  return num1 + num2
}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numsPlusFunct = (num1, num2, callback) => {
  const result = callback(num1, num2)
  return {
    result,
    string: "harrison"
  }
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

const result = numsPlusFunct(2, 2, addNum)
// console.log(result)

// 16.

// What is Express? What does it help us to do?

// Express allows us to make a web server that can receive network http requests

// It can deal with these requests in some kind of manner before sending a response back to the client, this is often as JSON 

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// Synchronous code runs line after line, it won't execute the next line until the the code on the current line finishes executing

// Asynchronous code doesn't run line for line, in the browser asynchronous code is enabled through web apis before being put into the callback queue

// If the call stack is empty, the event loop passes the async code to the call stack where it's finally executed    

// Asynchronous code is non-blocking which means multiple parts of your program can be executed at the one time 

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

// Fetch is the way in which we can make ajax requests (http) from within our javascript programs

// The fetch api is nice as it's built into all modern browsers

// An example of how i'd use fetch is to access the data from the star wars API

const fetch = require('node-fetch');
const starWars = fetch("https://swapi.co/api/people/")

// Fetch will always return a pending promise

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = { location: "upper", crop: "sorghum", watered: false }
const { watered } = southernField
// console.log(watered)

// 20.

// a.
// Uncomment the code below.

// let newNum = 1

// const myFunc = (num, callback) => {
//   newNum *= num
//   callback(newNum)
// }

// myFunc(10, (sum) => {
//   myFunc(10, (sum) => {
//     myFunc(10, (sum) => {
//       console.log(sum)
//     })
//   })
// })

// b.

// Explain in your own words how this code works. For example you could start with something like:

// Firstly, the letNum variable is initialized and receives the value of the number 1

// Secondly, the myFunc function is invoked. It received the arguments of 10 and a callback function

// Thirdly, myFunc runs and it multiplies 10 by newNum which is one, newNum is also mutated and becomes a new value (10), newNum is then passed as an argument to the callback function which is invoked

// The callback function then runs, the callback function simply invokes myFunc all over again, taking 10 and a callback as an argument

// myFunc runs again, this time round newNum is 10, so the sum is 10 * 10, newNum is mutated and becomes 100

// The newNum variable is passed to the callback as an argument

// The same process runs again, myFunc is called with the same arguments in the callback, the sum this time is 100 * 10 = 1000, the sum is passed to the callback as an argument

// Lastly, the sum is console.logged in the callback, that's why you see 1000 printed

// 21.

// a. Uncomment the code from below

// // this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

// function Person(name) {
//   function sayHi() {
//     console.log('hello')
//   }
//   return {
//     name,
//     sayHi
//   }
// }

// const harrison = Person("harrison")

// b. 
// What does this function return?

// An object

// c.
// How do you call the sayHi() function?

// harrison.sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

class Person {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log('hello')
  }

  addAgeAndHeight(age, height) {
    this.age = age
    this.height = height
  }
}

const harrison = new Person("harrison")

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

harrison.addAgeAndHeight(26, 180)

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// console.log(harrison)

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

const waitBeforeSum = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = num1 + num2
      if (sum > 10) {
        reject('the sum was greater than 10')
      } else {
        resolve(sum)
      }
    }, 4000)
  })
}

// waitBeforeSum(2, 2)
//   .then((sum) => console.log(sum))

const accessSum = async () => {
  try {
    const result = await waitBeforeSum(10, 2);
    console.log(result)
  } catch(error) {
    console.log(error)
  }
}

// accessSum()

// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

// fetch('https://restcountries.eu/rest/v2/all')
//   .then((response) => response.json())
//   .then((data) => {
//     const australia = data.find((country) => {
//       return country.name == "Australia"
//     })
//     console.log(australia.flag)
//   })

// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

fetch('https://swapi.co/api/films/1/')
  .then((response) => response.json())
  .then((data) => {
    data.characters.forEach((character) => {
      fetch(character)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.name)
        })
    })
  })

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png