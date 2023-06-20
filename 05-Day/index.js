let emptyArray = []
let myArray = [1,2,3,4,5,6,7]
console.log(myArray.length) // 7
let firstItem = myArray[0] // 1
let middleItem = myArray[3] // 4
let lastItem = myArray[6] // 7
console.log(firstItem,middleItem,lastItem)

let mixedDataTypes = ['Arda',21, false, ['sport','tech'], 9.81]
let itCompanies = ['facebook','google','microsoft','apple','IBM','oracle','amazon']
console.log(itCompanies) // ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon']
console.log(itCompanies.length) // 7
let stItem = itCompanies[0]
let ndItem = itCompanies[3]
let rdItem = itCompanies[6]
console.log(stItem) // facebook
console.log(ndItem) // apple
console.log(rdItem) // amazon
console.log(itCompanies)

// let facebook = itCompanies[0].toUpperCase()
// let google = itCompanies[1].toUpperCase()
// let microsoft = itCompanies[2].toUpperCase()
// let apple = itCompanies[3].toUpperCase()
// let ibm = itCompanies[4].toUpperCase()
// let oracle = itCompanies[5].toUpperCase()
// let amazon = itCompanies[6].toUpperCase()
// itCompanies[0] = facebook
// itCompanies[1] = google
// itCompanies[2] = microsoft
// itCompanies[3] = apple
// itCompanies[4] = ibm
// itCompanies[5] = oracle
// itCompanies[6] = amazon
console.log(itCompanies) // ['FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON']
console.log(itCompanies.join()) // FACEBOOK,GOOGLE,MICROSOFT,APPLE,IBM,ORACLE,AMAZON

if(itCompanies.includes('apple')){
  console.log(`includes apple`)
}else{
  console.log(`not includes apple`)
}
// includes apple

if(itCompanies[2].includes('oo')){
  console.log('yes')
}else{
  console.log('no')
}
console.log(itCompanies.sort()) // ['IBM', 'amazon', 'apple', 'facebook', 'google', 'microsoft', 'oracle']
console.log(itCompanies.reverse()) // ['oracle', 'microsoft', 'google', 'facebook', 'apple', 'amazon', 'IBM']
console.log(itCompanies.slice(0,3)) //  ['oracle', 'microsoft', 'google']
console.log(itCompanies.slice(4,7)) // ['apple', 'amazon', 'IBM']
console.log(itCompanies.slice(3,4)) // ['facebook']
// console.log(itCompanies.shift()) // oracle
console.log(itCompanies)
// console.log(itCompanies.pop()) // ibm
// console.log(itCompanies.splice()) // remove all
console.log(countries)
console.log(webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textToArray = text.split(' ')
console.log(textToArray)
console.log(textToArray.length) // 13

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
removeHoney = shoppingCart.splice(4,1)
shoppingCart[3] = 'greenTea'
console.log(shoppingCart)

if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA')
}else{
  countries.push('Ethiopia')
}
console.log(countries) // ['Germany', 'Sweden', 'Switzerland', 'Finland', 'Austria', 'Ethiopia']

if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
}else{
  webTechs.push('Sass')
}
console.log(webTechs) // ['HTML', 'CSS', 'JS', 'Jquery', 'React', 'Redux', 'Django', 'Sass']

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack) // ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let lastIndex = ages.length - 1;
console.log(ages.sort())
console.log(ages[0]) // 19
console.log(ages[lastIndex]) // 26

let calcMedian = (ages[4] + ages[5]) / 2
console.log(calcMedian) // 24

let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length
console.log(average)

let range = ages[lastIndex] - ages[0]
console.log(range) // 7

console.log(Math.abs(ages[0] - average)) // |-3.8|
console.log(Math.abs(ages[lastIndex] - average)) // |3.19|

let middeOfCountryArray = [countries[2],countries[3]]
console.log(middeOfCountryArray)

let firstArray = []
let secondArray = []



console.log(countries)

if(countries.length % 2 == 0){
  firstArray = countries.slice(0,3)
  secondArray = countries.slice(3,7)
}else{
  countries.push('United Kingdom')
  firstArray = countries.slice(0,4)
  secondArray = countries.slice(4,9)
}
console.log(firstArray)
console.log(secondArray)