// const a = [1, 2, 3, 4, 5]
// // for(let i = 0; i < a.length; i+=1) {
// //     console.log(a[i] + 10)
// // }

// for(const elem of a) {
//     console.log(elem + 10)
// }

// const array1 = [1, 2, 3];
// const array2 = array1;

// // console.log(array1)
// // console.log(array2)

// array1[0] = 10;

// // console.log(array1)
// // console.log(array2);

// array2[2] = 5;

// // console.log(array1)

// const array3 = array2

// // console.log(array3)

// array3[1] = 100;

// // console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)
// console.log(array3.length)

// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// // console.log(array2)

// array1 = [9, 90, 900]

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'

// console.log(string.split('!'))

// const string2 = '123456789'

// const array = string2.split('')

// console.log(array)

// const newArray = []
// for(const el of array) {
//     const number = Number(el);
//     newArray.push(number)
// }
// console.log(newArray)

// const array2 = [1, '2', 3, '4', 5, '6']

// const newArray2 = [];

// for(const el of array2){
//     if(typeof el === 'number') {
//         newArray2.push(String(el))
//     } else {
//         newArray2.push(Number(el))
//     }
// }

// console.log(newArray2)

// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('***')
// console.log(string3)

// const array4 = [1, 2, 3, 4, 2, 5, 6, 7, 2]

// const indexArray = [];

// for(let i = 0; i < array4.length; i+=1){
//     if(array4[i] === 2) {
//         indexArray.push(i)
//     }
// }

// console.log(indexArray)
// const array5 = [1,4,6,7,4,7,89]
// const res1 = array5.includes(100 && 4)
// const res2 = array5.includes(100) && array5.includes(4)
// console.log(res2)

// const numbers = [];

// const x = numbers.push(5)
// const y = numbers.push(50, 100)
// // console.log(numbers)
// // console.log(y)
// const z = numbers.pop()
// console.log(numbers)
// console.log(z)

// const a = [1, 2, 3];
// const b = [5, [6,7]]
// const c = 4
// const d = [b[0]].concat(b[1])
// // console.log(d)
// // [1, 2, 3, 4, 5, 6, 7]

// const result = a.concat(c, d)

// console.log(a)

// console.log(result)

// const array6 = [1, 2, 3, 4, 5, 6, 7]
// const array7 = array6.slice(0, 5)
// const array8 = array6.slice(-2)
// array6.push(1000)
// console.log(array8)

// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const numbers3 = numbers2.slice()
// const q = numbers3.splice(5, 2)
// console.log(numbers2)
// console.log(numbers3)
// const numbers4 = numbers2.slice()
// const e = numbers4.splice(1, 0, 1, 1)
// console.log(e)
// const numbers5 = numbers2.slice()
// const u = numbers5.splice(7, 4, 5, 5, 5, 5)
// console.log(u)

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// const letters2 = letters.slice()
// // letters2.splice(3, 3, 'a', 'b', 'c')
// // letters2.copyWithin(3, 0, 3)
// // console.log(letters2)
// letters2.fill('x', 3, 6)
// console.log(letters2)

// const numbers6 = [1, [2, 3], 4, 5, 6, [7, 8, [9, 10, [11, 12, [13, [14, 15]]]]]]
// const newAr = numbers6.flat(Infinity)
// console.log(newAr)

// console.log(newAr.reverse())
// const test = Array.from('1234567')
// console.log(test)

// const isArray = Array.isArray([1, 2, 3])
// console.log(isArray)

// function isIncluded(array, number) {
//     const result = array.includes(number)
//     console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false
// isIncluded([1, 2, 5, 8, 3], 5) // true
// isIncluded(5, [1, 3, 5]) // error

// function isIncluded(array, number) {
//     const result = array.includes(number)
//     // console.log(result)
//     return result
//     // console.log(result)
// }

// console.log(isIncluded([1, 2, 5, 8, 3], 4)) // false
// console.log(isIncluded([1, 2, 5, 8, 3], 5)) // true

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)
// const b = isIncluded([1, 2, 5, 8, 3], 5)
// console.log(b)

// function add(a, b) {
//   // const sum = a + b
//   // return sum

//   return a + b;
// }

// const number1 = add(1, 3);
// const number2 = add(5, 7);

// const sum = number1 + number2

// const sum = add(1, 3) + add(5, 7)
// console.log(sum)

// function add(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//         // return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// function add(a = 0, b = 0, c = 0) {
//     console.log(a + b + c)
// }

// const num1 = 3;
// const num2 = 4

// add(num1, num2)
// add(3)
// add()

// function add() {
//     // console.log(arguments[1])
//     // console.log(arguments.length)
//     let sum = 0;
//     for(const arg of arguments) {
//         // console.log(arg)
//         sum +=arg
//     }
//     console.log(sum)
//     return sum
// }

// add(5, 7, 4, 9, 10)

// function isIncluded() {
//     const array = Array.from(arguments);
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// function isIncluded(...array) {
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// isIncluded(2, 5, 6, 8, 4, 9, 3, 7)

// const add = function(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//         // return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// const a = 1;
// console.log(a);
// function logger() {
//   const a = 2;
//   // console.log(a)
//   if (a === 2) {
//     // const a = 3;
//     // console.log(a)
//     for (let i = 0; i <= 10; i += 1) {
//       //   const a = 4;
//       console.log(a);
//       // console.log(a + i)
//     }
//   }
// }

// logger();

// console.log(789)

// function bar() {
//     console.log("bar");
//     console.log(789)
//   }
  
//   function baz() {
//     console.log("baz");
//     console.log(789)
//   }
  
//   function foo() {
//     console.log("foo");
//     bar();
//     console.log(789)
//     baz();
//     console.log(123)
//   }
  
//   foo();

//   console.log(789)


