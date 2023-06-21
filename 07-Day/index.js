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

const capitalizeArray = (arr) =>{
  let capitalizedArray = []
  for(let i = 0; i<arr.length; i++){
    capitalizedArray.push(arr[i].toUpperCase())
  }
  return capitalizedArray
}
console.log(capitalizeArray(['arda','lewis','charles','max']))


const addItem = (arr) =>{
  let myArray = []
  for(let i = 0; i < arr.length; i++){
    myArray.push(arr[i])
  }
  return myArray
}
console.log(addItem([1,2,3,'arda','john',true]))


const removeItem = (index) =>{
  let array = [1,2,3,'arda','asabeneh',true,'lewis','monaco']
  let remove = index
  array.splice(remove, 1)
  return array
}
console.log(removeItem(3)) // 'arda' removed


const sumOfNumbers = (num) =>{
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum +=i
  }
  return sum
}
console.log(sumOfNumbers(10)) // 55


function sumOfOdds(number) {
  let sum = 0;
  
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  
  return sum;
}

console.log(sumOfOdds(10));  //25


const sumOfEvens = (num) =>{
  let sum = 0
  for(let i = 0; i<=num; i++){
    if(i % 2 == 0){
      sum += i
    }
  }
  return sum
}
console.log(sumOfEvens(10)) // 30


const evensAndOdds = (num) =>{
  let evens = []
  let odds = []

  for(let i = 0; i<= num; i++){
    if(i % 2 == 0){
      evens.push(i)
    }else{
      odds.push(i)
    }
  }
  console.log(evens.length) // 51
  console.log(odds.length) // 50
}
evensAndOdds(100)




function sum(){
  let sum = 0
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}
console.log(sum(1,2,3,4)) // 10



function generatePass(length){
  chars = 'abcçdefgğhıijklmnoöprsştuivyzqwxABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX1234567890!*?-_+'
  let password = ''
  for(let i = 0; i <= length; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
  }
  return password
}
console.log(generatePass(10))


function randomMac(){
  chars = 'ABCDEFGIJKLMNOPRSTUVYZQWX1234567890'
  nums = '1234567890'
  let mac = ''
  for(let i = 0; i <=12; i++){
    let randomChar1 = Math.floor(Math.random() * chars.length)
    let randomChar2 = Math.floor(Math.random() * chars.length)
    let randomChar3 = Math.floor(Math.random() * chars.length)
    let randomChar4 = Math.floor(Math.random() * chars.length)
    let randomNum1 = Math.floor(Math.random() * nums.length)
    let randomNum2 = Math.floor(Math.random() * nums.length)
    let randomNum3 = Math.floor(Math.random() * nums.length)
    let randomNum4 = Math.floor(Math.random() * nums.length)
    mac = `${nums[randomNum1]}:${chars[randomChar1]}:${nums[randomNum2]}:${chars[randomChar2]}:${nums[randomNum3]}:${chars[randomChar3]}:${nums[randomNum4]}:${chars[randomChar4]}`
  }
  return mac
}
console.log(randomMac())


let arr = [0, 1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
function randomHex(param){
  for(let i = 0; i <= param.length + 1;i++){
    let randomArray1 =Math.floor(Math.random() * 15 + 1 )
    let randomArray2 =Math.floor(Math.random() * 15 + 1 )
    let randomArray3 =Math.floor(Math.random() * 15 + 1 )
    let randomArray4 =Math.floor(Math.random() * 15 + 1 )
    let randomArray5 =Math.floor(Math.random() * 15 + 1 )
    let randomArray6 =Math.floor(Math.random() * 15 + 1 )
    let random1 = param[randomArray1]
    let random2 = param[randomArray2]
    let random3 = param[randomArray3]
    let random4 = param[randomArray4]
    let random5 = param[randomArray5]
    let random6 = param[randomArray6]
    let hexCode = `#${random1}${random2}${random3}${random4}${random5}${random6}`
    return hexCode
  }
}
console.log(randomHex(arr))


const userIdGenerator = (len) =>{
  let userId = ''
  let chars = 'abcçdefgğhıijklmnoöprsştuivyzqwxABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX1234567890'
  for(let i = 0; i<=len; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    userId += chars[randomIndex]
  }
  return userId
}

console.log(userIdGenerator(10))

// LEVEL 3 

// function userIdGeneratedByUser(input, repeatCount) {
//   let userId = ''
//   let chars = 'abcçdefgğhıijklmnoöprsştuivyzqwxABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX1234567890'
//   for(let i = 0; i<= input; i++){
//     randomIndex = Math.floor(Math.random() * chars.length)
//     userId += chars[randomIndex]
//   }
//   for (let i = 0; i < repeatCount; i++) {
//     console.log(userId)
//   }
// }

// // Örnek kullanım
// let userInput = Number(prompt("Bir girdi girin:"));
// let repeatNumber = parseInt(prompt("Tekrar sayısını girin:"));

// userIdGeneratedByUser(userInput, repeatNumber);




const rgbColorGenerator = () =>{
  let random1 = Math.floor(Math.random() * 255)
  let random2 = Math.floor(Math.random() * 255)
  let random3 = Math.floor(Math.random() * 255)

  return `rgb(${random1},${random2},${random3})`
}
console.log(rgbColorGenerator())


function hexToRgb(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return {
    r: r,
    g: g,
    b: b
  };
}


let hexColor = "#FF0000";
let rgbColor = hexToRgb(hexColor);

console.log(rgbColor);  // { r: 255, g: 0, b: 0 }


const shuffleArray = arr =>{
  let separate = arr / 2 
  let spliced = arr.splice(0 , separate)
  let spliced2 = arr.splice(separate)
  return spliced2.concat(spliced)
}
console.log(shuffleArray([1,7,3,5,9,2,6,22,16]))

const factorial = num =>{
  if(num == 0){
    return 1
  }
  return num * factorial(num - 1)
}
console.log(factorial(4))


const isEmpty = () =>{
  let array = []
  return array.includes(Boolean,String,Number,Object,Array)
}
console.log(isEmpty())

const sums = num =>{
  let myNum = ''
  for(let i= 0; i <num.length;i++){
  }
}
sums([1,2,3,4,5,6,7,8,9])

const isValidVariable = (variable) =>{
  if(variable.charAt(0) == '$'){
    return 'invalid'
  } else if(variable.charAt(0) =='1' || variable.charAt(0) == '2' || variable.charAt(0) == '3' || variable.charAt(0) == '4' || variable.charAt(0) == '5'|| variable.charAt(0) == '6'|| variable.charAt(0) == '7'|| variable.charAt(0) == '8'|| variable.charAt(0) == '9'|| variable.charAt(0) == '0' ){
    return 'invalid'
  }else if(variable.charAt(0) == '_'){
    return 'invalid'
  }else{
    return 'valid'
  }
}
console.log(isValidVariable('3myVariable'))


const sevenRandomNumbers = () =>{
  myArray = []
  for(let i = 0; i <= 7; i++){
    let random = Math.floor(Math.random() * 9)
    if(myArray.includes(random)){
      continue
    }else{
      myArray.push(random)
    }
  }
  return myArray
}
console.log(sevenRandomNumbers())