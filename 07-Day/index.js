// LEVEL 1
const fullName = () => 'Arda Şalvarlılar'
console.log(fullName())

const myFullName = (firstName, lastName) => `${firstName} ${lastName} `
console.log(myFullName('Arda','Şalvarlılar'))


const addNumber = (numOne, numTwo) =>{
  let sum = numOne + numTwo
  return sum
}
console.log(addNumber(10,20)) // 30

const areaOfRectangle = (length, width) =>{
  let area = length * width
  return area
}
console.log(areaOfRectangle(10,30)) // 300

const perimeterOfRectangle = (length, width) =>{
  let perimeter = 2 * (length + width)
  return perimeter
}
console.log(perimeterOfRectangle(20,30)) // 100


const volumeOfRectPrism = (length, width, height) =>{
  let volume = length * width * height
  return volume
}
console.log(volumeOfRectPrism(3,4,5)) // 60

const areaOfCircle = radius => {
  let area = Math.PI * radius**2
  return area
} 
console.log(areaOfCircle(10)) // 314.159

const circumOfCircle = radius => {
  let circum = 2 * (Math.PI * radius)
  return circum
}
console.log(circumOfCircle(5)) // 31.415

const calcDensity = (mass, volume) => {
  let density = mass / volume
  return density
}
console.log(calcDensity(20,10)) // 2


const calcSpeed = (distance, time) =>{
  let speed = distance / time
  return speed
}
console.log(calcSpeed(1000,10))

const calcWeight = (mass, gravity = 9.81) => mass * gravity
console.log(calcWeight(75)) // 735.75

const fahren = (C) =>{
  let fahrenFormula = (((C * 9) / 5) + 32)
  return fahrenFormula
}
console.log(fahren(30)) // 86

const bmiCalc = (weight, height) =>{
  let bmi = weight / (height * height)
  if(bmi < 18.5){
    console.log(`underweight`)
  }else if(bmi > 18.5 && bmi < 24.9){
    console.log(`${bmi.toFixed(2)} normal weight`)
  }else if(bmi >= 25 && bmi < 29.9){
    console.log('overweight')
  }else{
    console.log('obese')
  }
}
bmiCalc(75,1.85)

const checkSeason = (month) =>{
  if(month == 'december' || month == 'january' || month == 'february'){
    console.log('winter')
  }else if(month == 'march' || month == 'april' || month == 'may'){
    console.log('spring')
  }else if(month == 'june' || month == 'july' || month == 'august'){
    console.log('summer')
  }else{
    console.log('autumn')
  }
}
checkSeason('january'.trim())

// const findMax = (numbers) =>{
//   let ordered = []
//   for(let i = 0; i < numbers.length; i++){
//     for(let j = 1; j < i - 1; j++){
//       if(j - i <= 0){
//         ordered.push(i)
//       }else{
//         ordered.unshift(i)
//       }
//     }
//     return numbers
//   }
// }
// console.log(findMax([1,7,3,9,11,16]))

// LEVEL 2

const swapValues = (x,y) =>{
  let arr = []
  arr.push(x)
  arr.unshift(y)
  return arr.join()
}
console.log(swapValues(3,4))
console.log(swapValues(4,5))

const reverseArray = array =>{
  let arr = []
  for(let i = 0; i < array.length; i++){
    let lastIndex = array.length - 1
    lastNum = array[lastIndex]
    arr.push(array[lastIndex])
    arr.unshift(array[0])  
  }
  return arr
}
console.log(reverseArray([9,8,7,6,5,4,3,2,1]))