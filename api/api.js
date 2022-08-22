const form = document.querySelector("form");
const list = document.querySelector(".list");
const button = document.querySelector(".load");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let keyword = "eagles";

function fetchEvents(page, keyword) {
  const params = new URLSearchParams({
    apikey: API,
    size: 100,
    page,
    keyword,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}

function getEvents(page, keyword) {
  fetchEvents(page, keyword).then((data) => {
    console.log(data);

    if (pageToFetch === data.page.totalPages) {
      button.classList.add("unvisible");
      alert("Finish!");
      return;
    }

    const events = data._embedded.events;
    renderEvents(events);
    pageToFetch += 1

    if (data.page.totalPages > 1) {
      button.classList.remove("unvisible");
    }
  });
}

// getEvents(pageToFetch, keyword);

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li>
        <img src='${images[0].url}' alt='${name}' width='400'>
        <h2>${name}</h2>
        </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

button.addEventListener("click", () => {
  getEvents(pageToFetch, keyword);
});

form.addEventListener('submit', (event) => {
  event.preventDefault()
  pageToFetch = 0;
  keyword = event.target.elements.query.value
  list.innerHTML = ''
  getEvents(pageToFetch, keyword)
})