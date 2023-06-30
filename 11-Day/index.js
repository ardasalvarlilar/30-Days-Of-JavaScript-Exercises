const constants = [2.72, 3.14, 9.81, 37, 100]
const thisCountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// LEVEL 1

let [e,pi, gravity, humanBodyTemp, waterBilingTemp] = constants
console.log(e,pi,gravity,humanBodyTemp, waterBilingTemp)// 2.72 3.14 9.81 37 100

let [fin, est, sw, den, nor] = thisCountries
console.log(fin,est,sw,den,nor) // Finland Estonia Sweden Denmark Norway

let {width: w, height:h, area: a, perimeter:p} = rectangle
console.log(w,h,a,p) // 20 10 200 60

// LEVEL 2

for(const {name, scores, skills,age} of users){
  console.log(name, scores, skills, age)
}
/*
  Brook 75 (3) ['HTM', 'CSS', 'JS'] 16
  Alex 80 (3) ['HTM', 'CSS', 'JS'] 18
  David 75 (2) ['HTM', 'CSS'] 22
  John 85 ['HTML'] 25
  Sara 95 (3) ['HTM', 'CSS', 'JS'] 26
  Martha 80 (3) ['HTM', 'CSS', 'JS'] 18
  Thomas 90 (3) ['HTM', 'CSS', 'JS'] 20
*/

for(const {name, skills} of users){
  console.log(name, skills.length < 2) // John
}

// LEVEL 3

for(const {name, capital, population, languages} of countries){
  console.log(name, capital, population, languages)
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// console.log(name, skills = student[1], jsScore = student[2][2], reactScore = student[2][3]) // ['HTM', 'CSS', 'JS', 'React'] 90 95

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = (students) => {
  return students.map(([name, skills, scores]) => {
    return { name, skills, scores };
  });
};
console.log(convertArrayToObject(students))
/*
[
    {
        "name": "David",
        "skills": [
            "HTM",
            "CSS",
            "JS",
            "React"
        ],
        "scores": [
            98,
            85,
            90,
            95
        ]
    },
    {
        "name": "John",
        "skills": [
            "HTM",
            "CSS",
            "JS",
            "React"
        ],
        "scores": [
            85,
            80,
            85,
            80
        ]
    }
]
*/
let newStudents = [...students]
const [name, skills, scores] = newStudents;

const newStudent = {
  name,
  skills: [...skills, 'Bootstrap'],
  scores,
};

newStudent.skills.push('Express');
newStudent.skills.push('SQL');
newStudent.skills.push('SQL');

newStudent.skills[newStudent.skills.indexOf('Bootstrap')] += ' (Level 8)';
newStudent.skills[newStudent.skills.indexOf('Express')] += ' (Level 9)';
newStudent.skills[newStudent.skills.indexOf('SQL')] += ' (Level 8)';

console.log(newStudent);

