//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: 2,
//         c: 3
//     }
//   };

//   console.log(book)

// const authorName = 'author';

// const a = book.title
// //  console.log(book.genres)
// //  console.log(book['genres']);
// console.log(book.name) // undefined
// console.log(book[b])

// book.isPublic = true;

// // // console.log(book)
// book.genres.push('tale')
// console.log(book)

// book.price = '10$'

// console.log(book)

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//         console.log(this.name)
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// console.log(Object.values(student))

// student.getName()
// student.getEmail()
// student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // // Ключ
//     // console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }

// const animal = {
//     legs: 4,
//     color: 'brown'
//   };
// //   animal.eyes = 'green'
//   const dog = Object.create(animal);

// //   console.log(dog)
// //   animal.eyes = 'green';
//   dog.name = "Манго";
//   dog.age = 7;
//   dog.eyes = 'grey';
//     console.log(dog)
// //   dog.color = 'black';
// // //   console.log(dog); // {name: 'Манго'}
// // //   console.log(dog.name); // 'Манго'
// //   console.log(dog.legs); // 4
// //   console.log(dog.eyes) //

// for(const key in dog) {
// if (!dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }

// const keys = Object.keys(dog)
// console.log(keys)

// const values = Object.values(dog)
// console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)

const users = [{
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];


// function a(users) {
//   const newUsers = []
//   for(let {id, name, email, ...a} of users) {
//     name += '!'
//     newUsers.push( {id, name, email})
//   }
//   console.log(users)
//   return newUsers
// }

// console.log(a(users))
//   const dataObject = {};
// //   console.log(users[0])
//   const keys = Object.keys(users[0])
// //   console.log(keys)

//   for(const key of keys) {
//     console.log(key)
//     dataObject[key] = [];
//   }

//   console.log(dataObject)

// // for (const objKey in dataObject) {
// //   for(const user of users) {
// //     dataObject[objKey].push(user[objKey])
// //   }
// // }

// const u =  {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   }

// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 0, c: 3, d: 4}
// const obj3 = {...obj2, ...obj1, p: 78}
// console.log(obj3)

// function isIncluded() {
//   const array = Array.from(arguments)
//   const num = array.shift()
//   console.log(array.includes(num))
// }
// isIncluded(5, 2, 3, 5, 6, 8, 5)

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// const b = [[1, 2, 3], 5]
// const a = [...b]
// console.log(a)

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };


// function createMessage({
//   dimensions: {
//     weight = "No info",
//     height = "No info",
//     length = "No info"
//   },
//   a: color = 'No info',
//   maxSpeed = "No info",
//   isNew = "No info",

// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car1);

// function createRange(num1, num2) {
//   const [min, max] = num1 < num2 ? [num1, num2] : [num2, num1]
//   const array = [];
//   for(let i = min; i <= max; i +=1) {
//     array.push(i)
//   }
//   console.log(array)
// }

// createRange(5, 10)
// createRange(12, 8)