const fetchBtn = document.querySelector(".fetch");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");

addBtn.style.display = "none";

const BASE_URL = "http://localhost:8080";

fetchBtn.addEventListener("click", getUsers);

function getUsers() {
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
      const markup = users
        .map(
          ({ name, email, id }) => `<li id=${id}>
            <p>User name: <span class='name'>${name}</span></p>
            <p>User email: <span class='email'>${email}</span></p>
            <button class='delete'>Delete</button>
            <button class='edit'>Edit</button>
        </li>`
        )
        .join("");
      list.innerHTML = "";
      list.insertAdjacentHTML("afterbegin", markup);
      fetchBtn.style.display = "none";
      addBtn.style.display = "inline";
      const delBtns = document.querySelectorAll(".delete");
      delBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
      const editBtns = document.querySelectorAll(".edit");
      editBtns.forEach((btn) => btn.addEventListener("click", editUser));
    })
    .catch((error) => console.error(error));
}

addBtn.addEventListener("click", addUser);

function addUser() {
  formWrapper.insertAdjacentHTML("afterbegin", createFormMarkup());
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    fetch(`${BASE_URL}/users`, options)
      .then(() => {
        getUsers();
        formWrapper.innerHTML = "";
      })
      .catch((error) => console.error(error));
  });
}

function deleteUser(event) {
  const id = event.target.parentNode.id;
  const options = {
    method: "DELETE",
    headers: {
      authorization: "admin",
    },
  };
  fetch(`${BASE_URL}/users/${id}`, options)
    .then(() => getUsers())
    .catch((error) => console.error(error));
}

function editUser(event) {
  const id = event.target.parentNode.id;
  const name = event.target.parentNode.querySelector(".name").textContent;
  const email = event.target.parentNode.querySelector(".email").textContent;
  formWrapper.insertAdjacentHTML("afterbegin", createFormMarkup(name, email));
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    fetch(`${BASE_URL}/users/${id}`, options)
      .then(() => {
        getUsers();
        formWrapper.innerHTML = "";
      })
      .catch((error) => console.error(error));
  });
}


function createFormMarkup(name = "", email = "") {
  return `<form>
<label>
Name: 
<input type='text' name='name' value=${name}>
</label>
<label> 
Email:
<input type='email' name='email' value=${email}>
</label>    
<button>Save</button>
</form>`;
}