"use strict";

// // Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // може ініціалізувати без присвоєння значення;
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;

// // Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// confirm("Is your name Ivan?"); // користувач може відповісти так  або відхилити питання
// prompt("What is your name?"); // користувач  може ввест якісь дані або відхилити питання

// const name1 = prompt("What is your name?");
// console.log(name1)

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// //Загальні правила порівняння
// // Результатом порівняння буде бульове значення.
// // При порівнянні різних типів за допомогою операторів == та =! операнди приводяться до числа
// // null не дорівнює нічому крім себе та undefined.
// // undefined не дорівнює нічому крім себе та null.
// // NaN не дорівнює нічому, навіть самому собі
// // Рядки між собою порівнюються за unicode (посимвольно).

// //   Правила приведення різних типів до числа:
// //   true --> 1
// //   false --> 0
// //   '', а також рядок з пробілами --> 0
// //   null --> 0
// //   undefined --> NaN
// //   не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// Оператор ==
// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false

// // Оператор ===
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); //false

// // Оператор !=
// console.log("4" != 4); //false

// // Оператор !==
// console.log("4" !== 4);

// console.log(null > 0) //false
// console.log(null >= 0) //true

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const toNumber = Number(b);
// console.log(toNumber); //NaN
// console.log(Number.isNaN(toNumber)); //true
// console.log(toNumber == NaN) // false

// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// // console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName + '!'}. I am ${age - 10} years old`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// const word2 = "hTMl";
// console.log(word2.toLowerCase()); //html
// console.log(word2.toUpperCase()); //HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// console.log(word4.indexOf("a")); // 1
// console.log(word4.lastIndexOf("a")); // 5
// console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); //4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const word5 = "javascript";
// const word6 = word5.slice();
// console.log(word6);
// const word7 = word5.slice(0, 4);
// console.log(word7);
// console.log(word5.slice(0, word5.length));
// console.log(word5.slice(4));
// console.log(word5.slice(-6));

// console.log('    a    '.trim().length) // 1

// // Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); '  -9  5'
// console.log(!null + 1);

// //  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// // (falsy) значення, що приводяться до false у логічному перетворенні:
// // 0
// // NaN
// // null
// // undefined
// // порожній рядок
// // false.
// // Абсолютно все інше приводиться до true.

// // && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// // || - запинається на true
// // Повертає перше правидиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// // ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

// const number1 = Number(prompt("Enter a number, please"));
// console.log(number1);
// const number2 = Number(prompt("Enter a number, please"));
// console.log(number2);

// if(number1 > number2) {
//     console.log('I am here')
// }

// if(number1 > number2) {
//     console.log('+')
// } else {
//     console.log('-')
// }

// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// } else {
//   console.log("<");
// }

// if (number1 > number2) {
//   console.log(">");
// } else {
//   if (number1 === number2) {
//     console.log("=");
//   } else {
//     console.log("<");
//   }
// }

// if(number1 > 50 && number2 > 50) {
//     console.log('super')
// }

// const number1 = 10
// number1 > 20 ? console.log('true') : console.log('false')
// const number2 = 30
// number2 > 20 ? console.log(true) : console.log(false)

// const number3 = 20;
// number3 > 20
//   ? console.log(">")
//   : number3 === 20
//   ? console.log("=")
//   : console.log("<");

// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// const summ = prompt("Input check summ, please");
// const percentage = prompt("Input tip percentage, please");
// console.log(summ, percentage);

// if (
//   summ === null ||
//   percentage === null ||
//   summ.trim() === "" ||
//   percentage.trim() === ""
// ) {
//   alert("Cancelled");
// } else {
//   const parsedSumm = Number.parseFloat(summ);
//   const parsedPercentage = Number.parseFloat(percentage);
//   if (
//     Number.isNaN(parsedSumm) ||
//     Number.isNaN(parsedPercentage) ||
//     parsedSumm <= 0 ||
//     parsedPercentage < 0 ||
//     parsedPercentage > 100
//   ) {
//     alert("Invalid input data");
//   } else {
//     const tipAmount = (parsedSumm * parsedPercentage) / 100;
//     const totalSumm = parsedSumm + tipAmount;
//     const message = `Check summ: ${parsedSumm}\nTip: ${parsedPercentage}%\nTip amount: ${tipAmount.toFixed(
//       2
//     )}\nTotal sum to pay: ${totalSumm.toFixed(2)}`;
//     alert(message);
//   }
// }

// const summ = prompt("Input check summ, please");
// const percentage = prompt("Input tip percentage, please");
// console.log(summ, percentage);

// if (summ === null || percentage === null) {
//   alert("Cancelled");
// } else {
//   const parsedSumm = Number.parseFloat(summ);
//   const parsedPercentage = Number.parseFloat(percentage);
//   if (
//     Number.isNaN(parsedSumm) ||
//     Number.isNaN(parsedPercentage) ||
//     parsedSumm <= 0 ||
//     parsedPercentage < 0 ||
//     parsedPercentage > 100
//   ) {
//     alert("Invalid input data");
//   } else {
//     const tipAmount = Number(((parsedSumm * parsedPercentage) / 100).toFixed(2));
//     const totalSumm = (parsedSumm + tipAmount).toFixed(2);
//     const message = `Check summ: ${parsedSumm}\nTip: ${parsedPercentage}%\nTip amount: ${tipAmount}\nTotal sum to pay: ${totalSumm}`;
//     alert(message);
//   }
// }

// const number = Number(prompt("Enter a number berween 0 and 3"));

// switch (number) {
//   case 0:
//     console.log("Your entered 0");
//     break;
//   case 1:
//     console.log("Your entered 1");
//     break;
//   case 2:
//     console.log("Your entered 2");
//     break;
//   case 3:
//     console.log("Your entered 3");
//     break;
//   default:
//     console.log("Your entered another number");
// }

// if (number === 0) {
//   console.log("Your entered 0");
// } else if (number === 1) {
//   console.log("Your entered 1");
// } else if (number === 2) {
//   console.log("Your entered 2");
// } else if (number === 3) {
//   console.log("Your entered 3");
// } else {
//   console.log("Your entered another number");
// }

// // Global scope
// const a = 1;
// // console.log(a)
// // const c = 4;

// if (2 > 1) {
//     // Block scope 1
//     console.log(c)
//     const a = 2;
//     const b = 3;
//     // console.log(a)
//     if (4 > 3) {
//         // Block scope 2
//         // const a = 5
//         const c = 4;
//         console.log(a)
//     }
// }


// // Global scope
// let a = 1;
// // console.log(a)
// // const c = 4;

// if (2 > 1) {
//     // Block scope 1
//     // console.log(c)
//     a = 2;
//     const b = 3;
//     // console.log(a)
//     if (4 < 3) {
//         // Block scope 2
//         a = 5
//         const c = 4;
//         // console.log(a)
//     }
// }

// console.log(a)

// let counter = 1;

// while (counter <= 5) {
//   console.log("counter: ", counter);
// //   counter = counter + 1
//   counter += 1;
// }

// console.log('next')

// let number

// do{
//     console.log('here')
//     number = prompt('Input number, that bigger then 100')
// } while (number <=100) 

// console.log(number)

// let word;
// for (let i = 0; i < 5; i +=1) {
//     console.log('previous string', word)
//     console.log(i)
//     word = word + i
//     console.log('next string',word)
// }

// const word = 'javascript'
// let word2 = ''

// for(let i = 0; i < word.length; i+= 1) {
//     console.log(word[i])
//     word2 += `${word[i]} + *`
// }

// console.log(word2)

// const num1 = 5
// const num2 = 10

// for(let i = num2; i >= num1; i-=1) {
//     console.log(i)
// }

// const num = 12345;
// const string = String(num)
// console.log(string) //'12345'
// let newString = ''
// for(let i = string.length - 1; i >= 0; i-=1) {
// newString += string[i]
// }
// console.log(Number(newString))

// for(let a = 100; a > 50; a -= 10) {
//     console.log(a)
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Знайшли число 3, перериваємо виконання циклу");
//       break;
//     }
//   }
  
//   console.log("Лог після циклу");


//   for (let i = 0; i < 15; i += 1) {
//     console.log( 'before', i); 
//     if (i / 3 === 4 || i / 2 === 5) {
//       continue;
//     }
//     console.log('after', i); 
//   }


// a:
// for (let i = 0; i < 3; i+=1) {  
// console.log('i', i)    
//    b:
//    for (let j = 0; j < 3; j+=1) {   
//     console.log('  j', j)
//       if (i === 1 && j === 1) {
//          break a;
//       }
//    }
// }