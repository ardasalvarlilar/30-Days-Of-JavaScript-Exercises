// Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const thisCountries = ['Finland', 'Sweden', 'Norway']
let emptySet = new Set()

for(let i = 0; i <= 10; i++){
  emptySet.add(i)
}
console.log(emptySet)
emptySet.delete(7)
console.log(emptySet)
emptySet.clear()
console.log(emptySet)
let strings = ['javaScript', 'React', 'Next.js', 'Node.js']
let arrayToSet = new Set(strings)
console.log(arrayToSet)

const countryChar = new Map()
thisCountries.forEach(country =>{
  countryChar.set(country, country.length)
})
console.log(countryChar)
/*
Map(3) {'Finland' => 7, 'Sweden' => 6, 'Norway' => 6}
*/

// LEVEL 2
let A = new Set(a)
let B = new Set(b)
let union = [...a, ...b]
let unionSet = new Set(union)
console.log(unionSet) //  {4, 5, 8, 9, 3, …}


let x = new Set(a)
let z = new Set(b)
let y = a.filter(num => z.has(num))
let Y = new Set(y)
console.log(Y) // Set(2) {4, 5}


const setA = new Set(a);
const result = [];

for (const element of b) {
  if (setA.has(element)) {
    result.push(element);
  }
}

console.log(result); // Output: [4, 5]

// LEVEL 3

// const languages = new Set(countries)
const languageCounts = new Map()

for (const country of countries) {
  for (const language of country.languages) {
    if (languageCounts.has(language)) {
      languageCounts.set(language, languageCounts.get(language) + 1);
    } else {
      languageCounts.set(language, 1);
    }
  }
}

const sortedLanguages = Array.from(languageCounts.entries()).sort((a, b) => b[1] - a[1]);

const top10Languages = sortedLanguages.slice(0, 10).map(([language]) => language);

console.log(top10Languages);