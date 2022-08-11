const books = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(books));
}



const rootDiv = document.querySelector("#root");
const firstDiv = document.createElement("div");
const secondDiv = document.createElement("div");

firstDiv.classList.add("first");
secondDiv.classList.add("second");

rootDiv.append(firstDiv, secondDiv);

const title = document.createElement("h1");
const list = document.createElement("ul");
const addButton = document.createElement("button");

title.textContent = "Library";
addButton.textContent = "ADD";

firstDiv.append(title, list, addButton);

function renderList() {
  const books = JSON.parse(localStorage.getItem("books"));
  const markup = books
    .map(
      ({ title, id }) =>
        `<li id=${id}><p class='title'>${title}</p><button class='delete'>Delete</button><button>Edit</button></li>`
    )
    .join("");
  list.innerHTML = "";
  list.insertAdjacentHTML("afterbegin", markup);
  const titles = document.querySelectorAll(".title");
  titles.forEach((title) => title.addEventListener("click", renderPreview));
  const btnDel = document.querySelectorAll(".delete");
  btnDel.forEach((btn) => btn.addEventListener("click", deleteBook));
}

renderList();

function renderPreview(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const bookId = event.target.parentNode.id;
  const book = books.find(({ id }) => id === bookId);
  const markup = createPreviewMarkup(book);
  secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
}

function createPreviewMarkup({ title, author, img, plot, id }) {
  return `<div id=${id} class='bookwrapper'>
    <h2>${title}</h2>
    <p>${author}</p>
    <img src='${img}' alt='${title}'>
    <p>${plot}</p>
    </div>`;
}

function deleteBook(event) {
  let books = JSON.parse(localStorage.getItem("books"));
  const bookId = event.target.parentNode.id;
  books = books.filter(({ id }) => bookId !== id);
  localStorage.setItem("books", JSON.stringify(books));
  renderList();
  const wrapper = document.querySelector(".bookwrapper");
  if (wrapper && wrapper.id === bookId) {
    secondDiv.innerHTML = "";
  }
}

addButton.addEventListener("click", addBook);

function addBook() {
  const markup = createFormMarkup();
  secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
  const newBook = {
    id: `${Date.now()}`,
  };
  fillObject(newBook);
  const saveBtn = document.querySelector(".save");
  saveBtn.addEventListener("click", saveBook);
  function saveBook(evt) {
    evt.preventDefault();
    if (newBook.title && newBook.author && newBook.img && newBook.plot) {
      const books = JSON.parse(localStorage.getItem("books"));
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));
      renderList();
      const markup = createPreviewMarkup(newBook);
      secondDiv.innerHTML = "";
      secondDiv.insertAdjacentHTML("afterbegin", markup);
    } else {
      alert("Fill all fields, please");
    }
  }
}

function createFormMarkup() {
  return `<form><label>Title:<input name='title'></label>
  <label>Author:<input name='author'></label><label>Img:<input name='img'></label><label>Plot:<input name='plot'></label><button class='save'>Save</button></form>`;
}

function fillObject(book) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) =>
    input.addEventListener("change", (event) => {
      book[event.target.name] = event.target.value;
    })
  );
}
