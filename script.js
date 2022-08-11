// // const list = document.querySelector('ul')
// const list = document.querySelector('.list')
// // const list = document.querySelector('#list1')
// // const list = document.getElementById('list1')
// console.log(list)
// console.log(list.parentNode)
// console.log(list.childNodes)
// console.log(list.children)
// console.log(list.firstElementChild)
// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)


// const li = 'li'
// const a = document.querySelector(li)
// const elems = document.querySelectorAll('.item2')
// // console.log(elems)

// // const b = list.querySelectorAll('li')
// const p = list.querySelectorAll('p')
// console.log(p)

// console.log(list.firstElementChild.children)
// console.log(list.firstElementChild.querySelectorAll('p'))
// console.log(list.querySelector('li').querySelectorAll('p'))
// console.log(list.querySelectorAll(''))

// const p = document.querySelector('.sib')

// p.classList.add('active')

// console.log(p.classList.contains('inActive'))

// p.classList.remove('active')

// console.log(document.querySelector('.sib').textContent = '123')

// list.style.color = 'blue'

// document.body.style.backgroundColor = 'tomato'

// const btn = document.querySelector('button')

// btn.setAttribute('type', 'button')

// btn.type = 'submit'

// const saveBtn = document.querySelector('[data-action="save"]');
// console.log(saveBtn)

// const form = document.querySelector("form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event.target.elements);

//   const {
//     elements: { name, age },
//   } = event.target;
//   console.log(name.value);
//   console.log(age.value);
// }

// const p = document.querySelectorAll('p')
// p.forEach(elem => elem.addEventListener('click', (event) => {
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.target.textContent)
// }))

// const list = document.querySelector('.parent')
// list.addEventListener('click', (event) => {
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.target.textContent)
// })

// document.body.addEventListener('click', (event) => {
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.target.textContent)
// })

// console.log(_)

// const input = document.querySelector(".lodash");

// // input.addEventListener('input', (event) => console.log(event.target.value))

// const inputHandler = (event) => console.log(event.target.value);

// // input.addEventListener('input', _.throttle(inputHandler, 1000))

// // input.addEventListener(
// //   "input",
// //   _.debounce(inputHandler, 1500, {
// //     leading: true,
// //     trailing: true,
// //   })
// // );

// document.addEventListener('scroll', _.throttle(() => { console.log(1) }, 300))

// localStorage.setItem("theme", "light");
// console.log(localStorage.getItem('theme'))


// localStorage.setItem("name", "Ivan");

// // localStorage.removeItem('name')

// // localStorage.clear()

// const data = [1, 2, 3]
// const obj = {a: 5}

// localStorage.setItem('data', JSON.stringify(data))
// localStorage.setItem('obj', JSON.stringify(obj))


// console.log(JSON.parse(localStorage.getItem('obj')))


// console.log(localStorage.getItem('key'))