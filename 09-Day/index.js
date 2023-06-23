// HIGHER-ORDER FUNCTION
// high order functions are functions which take other function as a parameter or return a functionas a value  the function passed as a parameter is a called back

// Callback
// A callback is a function which can be passed as a parameter to other function 


//a callback function, the name of the function could be any name
const callback = (n) =>{
  return n**2
}
console.log(callback(2))

// function that takes oter function as a parameter
// the callback function was taking the square of the number we called it here and multiplied with 3 the 3 came with a parameter 
function cube(callback,n){
  return callback(n) * n
}
console.log(cube(callback,3))

// returning function
// higher order function returning an other value

const higherOrder = n =>{ // n is 2
  const doSomething = m =>{ // m is 3
    const doWhatEver = t =>{ // t is 10
      return 2 * n + 3 * m + t // (2 * 2) + (3 * 3) + 10 = 23 // wrapped with parantheses to emphesize the process priority
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

//Let us see were we use call back functions. For instance the forEach method uses call back.
let numbers = [1,2,3,4,5]
const sumArray = arr =>{
  let sum = 0
  const callback = function(element){
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers)) // 15

// same example simpifield
const number = [1,2,3,4,5]
const newSumArray = arr =>{
  let sum = 0
  arr.forEach(function(element){
    sum += element
  })
  return sum
}
console.log(newSumArray(number)) // 15

const newArray = [1,2,3,4,5]
const calcTheArray = arr =>{
  let sum = 0
  const callCalced = function (arrayElement) { 
    sum += arrayElement
  }
  arr.forEach(callCalced)
  return sum
}
console.log(calcTheArray(newArray))

// Setting time
/*
In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

setInterval
setTimeout
*/
// setting interval using a setInterval function
/*
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.
*/
// const sayHello = function(){
// console.log('hi')
// }
// setInterval(sayHello,1000) // it prints hi in every second

// Setting a time using a setTimeout
/*
In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.
*/
// const greet = function(){
//   // console.log('Hi')
// }
// // setTimeout(greet,2000) // it prints hi after it waits 2 seconds

// FUNCTIONAL PROGRAMMING
/*
Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.
*/
//forEach
/*
forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.
*/
/*
arr.forEach(function(element,index,arr){
  console.log(index,element,arr)
})
//the above code can be written using arrow function
arr.forEach((element,index,arr)=>{
  console.log(index,element,arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/
let sum = 0
let arrNumbers = [1,2,3,4,5]
arrNumbers.forEach(num => {
  console.log(num)
})
/*
1
2
3
4
5
*/
console.log('---------------------------------------------------------')
sum = 0
arrNumbers = [1,2,3,4,5]
arrNumbers.forEach(num => sum += num)
console.log(sum) // 15

let countries = ['Finland','Denmark','Sweden','Norway','Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
/*
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND
*/

//map
/*
map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
*/
numbers = [1,2,3,4,5]
const  numberSquare = numbers.map((num) => num **2) // replaces the whole array with new parameter
console.log(numberSquare) // [1,4,9,16,25]

let names = ['Asabeneh','Mathias','Elias','Brook']
const namesToUpperCase = names.map((names)=>names.toUpperCase())
console.log(namesToUpperCase) // 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUppercase = countries.map((country)=> country.toUpperCase())
console.log(countriesToUppercase)

 //['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

// With arrow function
const countriesToUppercaseArrow = countries.map(country => {
  return country.toUpperCase()
})
console.log(countriesToUppercaseArrow)

const countriesToUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesToUpperCase)

const countriesFirstThreeLetter = countries.map((country)=>{
  return country.toUpperCase().slice(0,3)

})
console.log(countriesFirstThreeLetter)

// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.
const coutriesContainingLand = countries.filter((country) =>{
  return country.includes('land')
})
console.log(coutriesContainingLand) // ['Finland','Ireland]

const countriesEndsWithIa = countries.filter(country => {
  return country.endsWith('ia')
})
console.log(countriesEndsWithIa) // ['Albania', 'Bolivia','Ethiopia']

const counntriesHaveFiveLetters = countries.filter(country => {
  return country.length === 5
})
console.log(counntriesHaveFiveLetters) // ['Japan', 'Kenya']

let scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const scoresGreaterThanEighty = scores.filter(score =>{
  return score.score > 80
})
console.log(scoresGreaterThanEighty) // [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

// reduce
numbers = [7,2,3,4,5]
const sums = numbers.reduce((acc,cur)=> acc + cur, 0) // acc is the starting value which is 7 right now, cur is how many elements are in there the array. if we say acc + cur is will summation all them. the zero after comma it says which value will added after the summation 
console.log(sums)

// every
// every: Check if all the elements are similar in one aspect. It returns boolean
names = ['Asabeneh','Mathias','Elias','Brook']
const areAllStr = names.every((name)=> typeof name === 'string')
console.log(areAllStr) // true

let bool = [true,true,true,true]
const areAllTrue = bool.every((b)=> b === true)
console.log(areAllTrue) // true

// find
// retuns the first element which satisfies the conditiom
let ages = [24,22,25,32,35,18]
let age = ages.find((age) => age < 20)
console.log(age)

names = ['Asabeneh','Mathias','Elias','Brook']
const result = names.find((name)=> name.length > 7)
console.log(result) // Asabeneh

scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const score = scores.find((user)=> user.score > 80)
console.log(score) // { name: "Asabeneh", score: 95}

// findIndex
// returns the position of the first element which satisfies the condition
names = ['Asabeneh','Mathias','Elias','Brook']
ages = [24,22,25,32,35,18]

const results = names.findIndex((name) => name.length > 7)
console.log(results) // 0

const thisAge = ages.findIndex((age)=> age < 20)
console.log(thisAge) // 5

// some
let bools = [true,true,true,true,false]
let allSomeTrue = bools.some((b) => b === true) // true
let isSomeTrue = bools.every((e)=> e === true) // false
// the differance between every and some; every checks all the values so in this condition all values should be equal to true even one of them is not equal to then will return false. But in some it checks only one of them is equal to true
console.log(allSomeTrue)
console.log(isSomeTrue)

// sort
/*  sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.
*/
let products = ['Milk','Coffee','Sugar','Honey','Apple','Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

numbers = [9.81,3.14,100,37]
// Using sort method to sort number items provide a wrong result see below
console.log(numbers.sort()) // [100, 3.14, 37, 9.81]
numbers.sort(function(a,b){
  return a - b
})
console.log(numbers) //  [3.14, 9.81, 37, 100]
numbers.sort(function(a,b){
  return b - a
})
console.log(numbers) // [100, 37, 9.81, 3.14]

// sorting Ojbect arrays

/*
syntax

ObjArr.sort(function(a,b){
  if(a.key < b.key) return -1
  if(a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function(a,b){
  if(a['key'] < b['key']) return -1
  if(a['key'] > b['key']) return 1
  return
})
*/

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]

users.sort((a,b) =>{
  if(a.age < b.age) return -1
  if(a.age > b.age) return 1
  return 0
})
console.log(users) //{"name": "Elias","age": 22}{"name": "Brook","age": 50}{"name": "Eyob","age": 100}{"name": "Asabeneh","age": 150}