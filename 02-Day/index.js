let challange = '30 Days Of JavaScript'
console.log(challange)
console.log(challange.length) // 21
console.log(challange.toUpperCase()) // 30 DAYS OF JAVASCRIPT
console.log(challange.toLowerCase()) // 30 days of javascript
console.log(challange.substring(0,2)) // 30
console.log(challange.substring(3)) // Days of JavaScript
console.log(challange.includes('Script')) // true
console.log(challange.split()) // ['30 Days Of JavaScript']
console.log(challange.split(' ')) // ['30', 'Days', 'Of', 'JavaScript'] seperated by space
let companies = 'Facebook, Google Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', ')) // ['Facebook', 'Google Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(challange.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(challange.charAt(15)) // S from the Script
console.log(challange.charCodeAt('J')) // 51
console.log(challange.indexOf('a')) // 4 from Days
console.log(challange.lastIndexOf('a')) // a from Java
let excuse = 'You cannot end a sentence with because because because is a conjunction'
console.log(excuse.indexOf('because')) // 31
console.log(excuse.lastIndexOf('because')) // 47
console.log(excuse.search('because')) // 31
console.log(challange.trim())
console.log(challange.startsWith('3')) // true
console.log(challange.startsWith(3)) // true
console.log(challange.endsWith('t')) // true
console.log(challange.match('a')) // ['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]
let day = '30 Days of '
let language = 'JavaScript'
console.log(day.concat(language)) // 30 Days of JavaScript
console.log(challange.repeat(2)) // 30 days Of JavaScript30 Days Of JavaScript

let theQuote = ('There is no exercise better for the heart than reaching down and lifting people up.')
console.log(theQuote)

let byMotherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(byMotherTeresa)

console.log(typeof '10') // string
console.log(typeof parseFloat('9.8')) // number
console.log('python'.includes('on')) // true
console.log('jargon'.includes('on')) // true
console.log('I hope this course is not full of jargon'.includes('jargon')) // true
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 255))
let  script = 'JavaScript'
let randomChar = (Math.floor(Math.random() * script.length))
console.log(script.charAt(randomChar))
console.log('1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let yourExcuse = 'You cannot end a sentence with because because because is a conjunction'
console.log(yourExcuse.substr(31,23))

console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.length) // 102
console.log(yourExcuse.match(/because/g))
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[@#$%&;!?]/g,'')) // declared those chars which we want to replace and specified search it globally and replace those chars with nothing('') so so basicly gonna remove them
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let monthly = text.substr(9,4)
monthly = Number(monthly)

let bonus = text.substr(42,5)
bonus = Number(bonus)

let online = text.substr(67,5)
online = Number(online)

const calculateIncome = monthly + bonus + online
console.log(calculateIncome)