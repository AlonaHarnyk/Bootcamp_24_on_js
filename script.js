// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
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
//   },
// ];

// function a(onSuccess, onUnsuccess) {
//   // console.log(callback)
//   const mark = Number(prompt('What is your mark?'))
//   if (mark >= 10) {
//    onSuccess()
//   } else {
//     onUnsuccess()
//   }
// }

// function b() {
//   alert('It is great!')
// }

// function c() {
//   alert('It is excellent mark!')
// }

// function d() {
//   alert('It is bad mark!')
// }

// a(c, d)

// a(function b() {
//   alert('It is great!')
// })

// const newUsers = []

// users.forEach(function(user, index, array) {
//   const {id, age, ...restProps} = user;
//   console.log(`${index + 1} - ${age}`)
//   newUsers.push(restProps)
// })

// console.log(newUsers)

// const add = (a, b, c) => {
//   // const sum = a + b + c
//   // return sum'
//    return a + b + c
// }

// const add = (a, b, c) => `${a} + ${b} + ${c} + 4` + '!!!'

// console.log(add(1, 2, 3))

// const mathOperations = (num1, num2, callback1, callback2) => {
//   if (num1 > num2) {
//     const result = callback1(num1, num2);
//     return result;
//   } else if (num2 > num1) {
//     return callback2(num1, num2);
//   } else {
//     return "Enter another numbers";
//   }
// };

// const add = (num1, num2) => num1 + num2;
// const substract = (num1, num2) => num2 - num1;

// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num2 / num1;

// // console.log(mathOperations(10, 20, add, substract));
// // console.log(mathOperations(100, 20, add, substract));
// // console.log(mathOperations(10, 20, multiply, divide));
// // console.log(mathOperations(100, 20, multiply, divide));

// console.log(mathOperations(10, 20, (num1, num2) => num1 + num2, (num1, num2) => num2 - num1));

// const newUsers = [];

// users.forEach(({ id, age, ...restProps }) =>
//   newUsers.push(restProps)
// );

// console.log(newUsers);

// const a = users.forEach(({ age }) => { return age })
// console.log(a)

// const test = () => {
//   const logger = () => console.log(123)
//   logger()
// }
// test()

const users = [
  {
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

// const ages = users.map(({ age }) => age)

// console.log(ages)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ]; 

// const a = students.map(({ courses }) => courses)
// console.log(a.flat(2))

// const courses = students.flatMap(student => student.courses);
// console.log(courses) // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

// const uniqueCourses = courses.filter(
//   (course, index, array) => {
//     console.log('idx', index)
//     console.log('idxOf', array.indexOf(course))
//     return array.indexOf(course) === index
//   }
// );

// console.log(uniqueCourses)

// // ['математика', 'фізика' , 'інформатика', 'біологія']

// const richUsers = users.filter(({ balance }) => balance > 3000)
// console.log(richUsers)

// const user = users.filter(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(user)

// // const user = users.find(({balance }) => balance > 3000)
// // console.log(user)

// const userFind = users.find(({ name, balance }) => balance > 3000 && name[0] === "S")
// // console.log(userFind)
// // console.log(users.indexOf(userFind))

// const index = users.findIndex(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(index)

// const result1 = users.every(({ balance }) => balance > 2000)
// const result2 = users.every(({age}) => age >= 20 && age <=30)

// // console.log(result2)

// const result3 = users.some(({ eyeColor }) => eyeColor === 'green')
// const result4 = users.some(({friends}) => friends.length > 5)
// // console.log(result4)

// const number = 10

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// });

// console.log(total)

const countSum = (array) => {
  // const positiveNums = array.filter(elem => elem >= 0)
  // return positiveNums.reduce((acc, elem) => acc + elem)
  return array.filter(elem => elem >= 0).reduce((acc, elem) => acc + elem)
}

// const countSum = (array) => {
//   return array.reduce((acc, elem) => elem > 0 ? acc + elem : acc, 0)
// }
console.log(countSum([-34, 1, 5, 4, -5, 7, 3, 0]))
console.log(countSum([-34, 1, -4, -5, -40, 3, 0]))

// const amount = users.reduce((acc, { friends }) => acc + friends.length, 0)
// console.log(amount)


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags)

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag, index) => {
//   console.log(index + 1)
//   console.log(acc)
//   console.log(tag)
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const getSums = (array) => array.reduce((acc, num, idx) => idx === 0 ? [num] : [...acc, num + acc[idx-1]], [])

// const getSums = (array) => array.reduce((acc, num, idx) => {
//   console.log(idx+1)
//   console.log('acc', acc)
//   if (idx === 0) {
//     return [num]
//   } else {
//     console.log('last elem', acc[idx - 1])
//     return [...acc, num + acc[idx - 1]]
//   }

// }, [])

// console.log(getSums([1, 2, 3, 4, 5]))// [1, 3, 6, 10, 15]