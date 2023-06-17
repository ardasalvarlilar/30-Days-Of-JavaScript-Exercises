const firstName = 'Arda'
const lastName = 'Şalvarlılar'
const country = 'Türkiye'
let age = 21
let isMarried = false

console.log(typeof firstName,typeof lastName, typeof country, typeof age, typeof isMarried)

console.log('10' == 10) // true
console.log(parseInt('9.8') == 10) //false

let firstTruthy = 1 // truthy
let secondTruthy = '' // truthy
let thirdTruthy = true // truthy

let firstFalsy = 0 // falsy
let secondFalsy = null // falsy
let thirdFalsy = undefined // falsy

console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true 
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true 
console.log(4 === '4') // false 

console.log('----------------------------------------')

console.log('python'.length) // 6
console.log('jargon'.length) // 6
console.log('python'.length === '6') // false
console.log('jargon'.length !== 6) // false

console.log('----------------------------------------')

console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4'))  // true

console.log('----------------------------------------')

let year = new Date()
console.log(year.getFullYear()) // 2023
console.log(year.getMonth()) // 5
console.log(year.getDate()) // 17
console.log(year.getDay()) // 6
console.log(year.getHours()) // 11
console.log(year.getMinutes()) // 14
console.log(year.getTime()) // 1686989726010

console.log('----------------------------------------')

// let base = Number(prompt('What is the base'))
// let height = Number(prompt('What is the height'))
// let result = 0.5 * base * height
// console.log(`the are of the triange is ${result}`) // the are of the triange is 100

console.log('----------------------------------------')

// let sidea = Number(prompt('length'))
// let sideb = Number(prompt('length'))
// let sidec = Number(prompt('length'))
// let perimeter = sidea + sideb + sidec
// console.log(`the perimeter of the triangle is ${perimeter}`) // the perimeter of the triangle is 12

console.log('----------------------------------------')

// let length = Number(prompt('length of rectangle'))
// let width = Number(prompt('width of rectangle'))
// rectangleArea = 2 * (length + width)
// console.log(`the area of the rectangle is ${rectangleArea}`) // the area of the rectangle is 40

// let radius = Number(prompt('what is the radius'))
// let circleArea = 2 * Math.PI * (radius **2)
// console.log(`the area of the circle is ${circleArea}`)

console.log('----------------------------------------')

// let hours = Number(prompt('enter hours'))
// let ratePerHour = Number(prompt('enter rate per hour'))
// let earning = hours * ratePerHour
// console.log(`your weekly earning is ${earning}`) // your weekly earnig is 1120

const myName = 'Arda'
myName.length > 7
? console.log('Your name is long')
: console.log('Your name is short')

const myLastName = 'Şalvarlılar'
myName.length > myLastName
? console.log(`your first name ${myName}, is longer than your family name, ${myLastName}`)
: console.log(`your first name ${myName}, is shorter than your family name, ${myLastName}`)

console.log('----------------------------------------')

let myAge = 21
let yourAge = 250
console.log(`you are ${yourAge - myAge} years older than me`)

// let userBirthYear = Number(prompt('your birth year'))
// let thisYear = new Date()
// let inYear = thisYear.getFullYear()
// let userAge = inYear - userBirthYear 
// userAge >= 18
//   ? console.log(`you are ${userAge}. You are old enaugh to drive`)
//   : console.log(`you are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)

console.log('----------------------------------------')

let newDate = new Date()
let seconds = newDate.getTime()
const maxYear = 100
const maxSecondsCanLive = maxYear * seconds

// let userAge = Number(prompt('your age'))
// console.log(`you lived ${userAge * seconds} seconds. Your remaining seconds are ${(maxYear - userAge) * seconds} seconds.`)

console.log('----------------------------------------')

let thisNewYear = new Date()
let thisYear = thisNewYear.getFullYear()
let thisMonth = thisNewYear.getMonth()
let thisDay = thisNewYear.getDay()
let thisHour = thisNewYear.getHours()
let thisMinutes = thisNewYear.getMinutes()

console.log(thisYear+'-'+thisMonth+'-'+thisDay+'-'+thisHour+':'+thisMinutes)

let d
d = new Date('2023-06-17 07:05')
// d = new Date('17-06-2023 13:33')
// d = new Date('17/06/2023 13:33')
console.log(d)
