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
// console.log(!Number.isNaN(toNumber)); 

// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const isNumber = !Number.isNaN(dataToNumber);
// console.log(isNumber);

// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// // console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, не включаючи max)
// const min1 = 5;
// const max1 = 10;
// const randomNumber1 = Math.random() * (max1 - min1) + min1;
// console.log(randomNumber1);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, не включаючи max)
// const min2 = Math.ceil(5);
// const max2 = Math.floor(10);
// const randomNumber2 = Math.floor(Math.random() * (max2 - min2) + min2);
// console.log(randomNumber2);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, включаючи max)
// const min3 = Math.ceil(5);
// const max3 = Math.floor(10);
// const randomNumber3 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
// console.log(randomNumber3);

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

// console.log('    a    '.trim().length)

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

// to be continued.. :) 