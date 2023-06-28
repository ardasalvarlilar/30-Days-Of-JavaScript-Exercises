// LEVEL 1
let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//explanation

//forEach
//loops through the array and runs the code for every single element

//map
//map takes parameter and modifies all the elements in the array with the parameter and returns new array

//filter
//seachs with the parameters value through the array and returns new array

//reduce
/* takes three parameter first parameter shows the zero index value, second parameter shows how many element in the object if we say firstParameter + secondParameter that will return the summition of the all numbers. the third parameter is optional the third parameter should be a number it adds the number to the summition */

// const callBack = function (parameter) {  
//   // code
//   }

  countries.forEach(country =>{
    console.log(country) //Finland Sweden Denmark Norway IceLand
    
  })

  names.forEach( name =>{
    console.log(name) // Asabeneh Mathias Elias Brook
  })

  numbers.forEach(num =>{
    console.log(num) // 1 2 3 4 5 6 7 8 9 10
  })

  let countriesToUpperCase = countries.map(country =>{
  console.log(country.toUpperCase()) // FINLAND SWEDEN DENMARK NORWAY ICELAND
  
})

let countriesLength = countries.map(len =>{
  console.log(countries.length) // 5
})

let numbersSquare = numbers.map(num =>{
  console.log(num * num) // 1 4 9 16 25 36 49 64 81 100
})

let namesToUpperCase = names.map(name =>{
  console.log(name.toUpperCase()) // ASABENEH MATHIAS ELIAS BROOK
})

// let pricesToCorresponding = products.map(price =>{
//   console.log(price.price = 2) // all to 2 
// })
console.log(products)

let countriesContain = countries.filter(country =>{
  return country.includes('land')
})
console.log(countriesContain) // ['Finland','Iceland']

let countriesSixChars = countries.filter(len =>{
  return len.length === 6
})
console.log(countriesSixChars) // ['Sweden', 'Norway']

let countriesSixCharsMore = countries.filter(len =>{
  return len.length > 6 
})
console.log(countriesSixCharsMore ) // ['Finland', 'Denmark', 'Iceland']

let countryStartsWithE = countries.filter(start =>{
  return start.startsWith('E')
})
console.log(countryStartsWithE) // []

console.log(products)

let onlyPricesWithValues = products.filter(price =>{
  if(price.price != '' && price.price != ' '){
    return price.price
  }
})
console.log(onlyPricesWithValues)

let theArray = ['Switzerland','Germany',44,'Austria',16,61,'Sweden']
function getStingList(arr){
  const stringArray = arr.filter(item => typeof item === 'string')
  return stringArray
}
console.log(getStingList(theArray))

const sumOfTheArray = numbers.reduce((base,inc) => base + inc,0)
console.log(sumOfTheArray) // 55


const concatenatedSentence = countries.reduce((sentence, country, index) => {
  if (index === countries.length - 1) {
    return sentence + 'and ' + country
  } else {
    return sentence + country + ', '
  }
}, 'Estonia, ')

const finalSentence = concatenatedSentence + ' are north European countries.'
console.log(finalSentence)


// explanation the differance between some and every
/*
some and every retuns us a boolean value every method checks is every single element is true but some is checks only single value to true
*/


const namesGeaterThanSeven = names.some((len) => len > 7)
console.log(namesGeaterThanSeven) // false

const countriesContainLand = countries.every((include) => include.includes('land'))
console.log(countriesContainLand) // false

// explanation the differance between find and findIndex
/*
find retuns the first element which satisfies the condition findIndex returns the first elements index which satisfies the condition
*/
const sixLettersCountry = countries.find((country) => country.length == 6)
console.log(sixLettersCountry) // sweden


const findNorway = countries.findIndex((norway)=> norway == 'Norway')
console.log(findNorway) // 3

const russia = countries.findIndex(russia => russia == 'Russia')
console.log(russia) // -1

// LEVEL 2

const totalPrice = products.filter(item => typeof item.price === 'number').reduce((acc,item) => acc + item.price,0)
console.log(totalPrice) // 27

const calcSum = products.reduce((acc,item) => {
  if(typeof item.price === 'number'){
    return acc + item.price
  }else{
   return acc
  }
},0)
console.log(calcSum) // 27

// const organizedCountries = (array,property) =>{
//   return array.reduce((acc,country)=>{
//     let name = country[property]
//     if(!acc[name]){
//       acc[name] = []
//     }
//     acc[name].push(country)
//     return acc
//   },{})
// }
// console.log(organizedCountries)

// const getFirstTenCounties = ()=>{
//   for(let i = 0; i < 11; i++){
//     console.log(countriesData[i].name)
//   }
// }
// getFirstTenCounties()
lastIndex = countriesData.length - 10;
const getLastTenCountries = countriesData.slice(lastIndex)
console.log(getLastTenCountries)

// LEVEL 3

const mostSpokenLanguages = countriesData.filter(lan => lan.languages).map(arr =>{
  return {
    language: arr.languages
  }
})
console.log(mostSpokenLanguages)