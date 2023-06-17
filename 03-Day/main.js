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

let length = Number(prompt('length of rectangle'))
let width = Number(prompt('width of rectangle'))
rectangleArea = 2 * (length + width)
console.log(`the area of the rectangle is ${rectangleArea}`) // the area of the rectangle is 40

let radius = Number(prompt('what is the radius'))
let circleArea = 2 * Math.PI * (radius **2)
console.log(`the area of the circle is ${circleArea}`)