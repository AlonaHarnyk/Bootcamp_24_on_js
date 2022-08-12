// const DELAY = 3000

// console.log('before')

// const logger = (a, b) => {
//     console.log(a)
//     console.log(b)
// }

// // logger(5, 10)

// // const timerId = setTimeout(logger, DELAY, 5, 10)

// const timerId2 = setInterval(logger, 1000, 20, 50)

// console.log('after')

// // clearTimeout(timerId);

// setTimeout(() => clearInterval(timerId2), 10000)

// // logger(5, 10)

// console.log('a')
// setTimeout(() => console.log('b'), 500)
// setTimeout(() => console.log('h'), 0)
// setTimeout(() => console.log('c'), 100)
// console.log('j')
// setTimeout(() => console.log('d'), 1000)
// setTimeout(() => console.log('e'), 500)
// console.log('f')

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = targetDate;
//     this.daysSpan = document.querySelector(`${selector} [data-value="days"]`);
//     this.hoursSpan = document.querySelector(`${selector}  [data-value="hours"]`);
//     this.minsSpan = document.querySelector(`${selector} [data-value="mins"]`);
//     this.secsSpan = document.querySelector(`${selector} [data-value="secs"]`);
//     this.updateTimer()
//   }

//   updateTimer() {
//     setInterval(() => {
//       const currentTime = Date.now();
//       const delta = this.targetDate - currentTime;
//       const days = Math.floor(delta / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60
//       ));
//       const minutes = Math.floor(
//         (delta % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       const seconds = Math.floor(
//         (delta % (1000 * 60) / 1000)
//       );
//       this.daysSpan.textContent = days;
//       this.hoursSpan.textContent = hours;
//       this.minsSpan.textContent = minutes;
//       this.secsSpan.textContent = seconds;
//     }, 1000);
//   }
// }

// const timer1 = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Sep 1, 2022"),
// });

// const timer2 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("Oct 1, 2022"),
// });

// const timer3 = new CountdownTimer({
//   selector: "#timer-3",
//   targetDate: new Date("Dec 31, 2022"),
// });


// Write a function which returns a day number that was some amount of days ago from the passed date.

// const getPastDay = (date, days) => {
//     const MS_PER_DAY = 1000 * 60 * 60 * 24
//     const msPerDays = MS_PER_DAY * days
//     // const ms = date.getTime()
//     const delta = date - msPerDays
//     return new Date(delta).getDate()
// }

// const date = new Date(2020, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2020)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2019)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2019)




// Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// const formatDate = date => {
//     const formatNumber = number => {
//         if (number < 10) {
//             return `0${number}`
//         } 
//         return number
//     }

//     const year = date.getFullYear();
//     const month = formatNumber(date.getMonth() + 1)
//     const day = formatNumber(date.getDate());
//     const hours = formatNumber(date.getHours());
//     const minutes = formatNumber(date.getMinutes());
//     return `${year}/${month}/${day} ${hours}:${minutes}`

// }

// console.log(formatDate(new Date('6/15/2019 09:15:00')) )// "2019/06/15 09:15"
// console.log(formatDate(new Date())) // gets current local time