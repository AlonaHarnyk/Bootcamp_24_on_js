// 'use strict';

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" і undefined з "use strict"

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// console.log(user)

// const newUser = {
//   username: "Mango",
//   showContext() {
//     console.log("this in showThis: ", this);
//   }
// };

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// newUser.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// function a() {
//   console.log("this in a: ", this);
// }
// a()

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// // showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// const hotel = {
//   username: "Resort hotel",

//   showThis() {
//     function b() {
//       console.log(this);
//       const foo = () => {
//         // Стрілки запам'ятовують контекст під час оголошення
//         // з батьківської області видимості
//         console.log("this in foo: ", this);
//       };
//       foo();
//     }

//     b.call(hotel);
//     // const foo = () => {
//     //   // Стрілки запам'ятовують контекст під час оголошення
//     //   // з батьківської області видимості
//     //   console.log("this in foo: ", this);

//     // };
//     // foo();

//     // console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}


function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго")); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."
