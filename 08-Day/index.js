// LEVEL 1
const dog = {
  name: 'Latte',
  legs: 4,
color: 'brown',
age: 4,
bark: 'woof woof'}
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

dog.breed = false
dog.getDogInfo = function(){
  return `his name is ${this.name} he is ${this.age}. his color is ${this.color}`
}
console.log(dog.getDogInfo()) // his name is Latte he is 4. his color is brown


// LEVEL 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Who logged in
let loggedInUsers = []
for(const loggedIn in users){
  const onlineUsers = users[loggedIn].isLoggedIn
  if(onlineUsers == true){   
    loggedInUsers.push(loggedIn)
  }
}
console.log(loggedInUsers) //  ['Brook', 'John']


// who has max skills
let maxSkills = 0
let personWithMaxSkills = ''
for(const user in users){
  const skillCount = users[user].skills.length

  if(skillCount > maxSkills){
    maxSkills = skillCount
    personWithMaxSkills = user
  }
}
console.log(personWithMaxSkills) // Asab


// who is mernStack
let mernStack = []
let isMernStack = false
for(const mern in users){
  const theDeveloper =users[mern].skills
  if(theDeveloper.includes('MongoDB','Express','React','Node')){
    isMernStack = true
    mernStack.push(mern)
  }
}
console.log(mernStack) // ['Asab', 'Paul']


// users having point greater than 50
let people = []
for(const user in users){
  const points = users[user].points
  if(points >= 50){
    people.push(user)
  }
}
console.log(people) // ['Asab','Brook','John']

users.Arda = {
  email: 'arda@arda.com',
  skills: ['HTML','CSS','Tailwind','JavaScript'],
  age: 21,
  isLoggedIn: true,
  points: 50
}
console.log(users)

const entries = Object.entries(users)
console.log(entries)

// Countries data
const theCountry = countries.find(function(object){
  return object.name === 'Switzerland'
})
console.log(theCountry)
console.log(theCountry.capital)
console.log(theCountry.flag)
console.log(theCountry.currency)
console.log(theCountry.population)

// LEVEL 3
const personAccount ={
  firstName: 'John',
  lastName: 'Doe',
  incomes: 200000,
  expenses: 150000,
  properties: ['Villa','Penthouse'],
  totalIncome: 400000,
  totalExpence: 200000,
  accountInfo: false,
  addIncome: 50000,
  addExpence: 20000,
  accountBalance: 1000000
}

const personAccountCopy = Object.assign({},personAccount)
const keys = Object.keys(personAccountCopy)
const values = Object.values(personAccountCopy)
console.log(values)
personAccount.money = values[2] + values[5] +values[8]
console.log(personAccount.money)





const customers = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

// function signUp(){
//   let input = prompt('what is your name?')
//   for(let user in customers){
//     const defined  =customers[user].username
//     if(defined.includes(input)){
//       return 'user already exists'
//     }else{
//       return 'create an account'
//     }
//   }
// }
// console.log(signUp())
// function signIn(){
//   let newUser = {}
//   let input = prompt('what is your name?')
//   let password = prompt('password')
//   for(let user in customers){
//     let newUserName = input
//     let newPassword = password
//     newUser.username = newUserName
//     newUser.password = newPassword
//   }
//   return newUser
// }
// customers.push(signIn())
// console.log(customers)


// function rateProduct(){
//   let input = Number(prompt('rate the product'))
//   for(let rate in products){
//     const rated = products[rate].ratings
//     if(rated === []){
//       rated.push(input)
//     }else{
//       rated.splice(0)
//       rated.push(input)
//     }
//     return products
//   }
// }
// console.log(rateProduct())

function averageRatings(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const ratings = product.ratings;
    for (let j = 0; j < ratings.length; j++) {
      const rating = ratings[j];
      console.log(rating.rate);
    }
  }
}
averageRatings(products);


function toggleLike(product) {
  const likedIndex = product.likes.indexOf('fg12cy');

  if (likedIndex === -1) {
    product.likes.push('fg12cy');
    console.log('Product liked:', product.name);
  } else {
    product.likes.splice(likedIndex, 1);
    console.log('Product unliked:', product.name);
  }
}

toggleLike(products[0]);
toggleLike(products[0]);
