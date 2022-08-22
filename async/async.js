// import { EventsApi } from "./eventsApi.js";

// const refs = {
//   list: document.querySelector(".list"),
//   more: document.querySelector(".load"),
// };

// const eventsApi = new EventsApi("beatles");

// eventsApi.fetchEvent().then(handleSuccess).catch(handleError);

// function handleSuccess(data) {
//   const events = data._embedded.events;

//   renderEvents(events);
// }

// function renderEvents(events) {
//   const markup = events
//     .map(({ name, images }) => {
//       return `<li>
//         <img src='${images[0].url}' alt='${name}' width='400'>
//         <h2>${name}</h2>
//         </li>`;
//     })
//     .join("");
//   refs.list.insertAdjacentHTML("beforeend", markup);
// }

// function handleError(error) {
//   console.error(error);
// }

// refs.more.addEventListener("click", () => {
//   eventsApi.page += 1;
//   eventsApi.fetchEvent().then(handleSuccess).catch(handleError);
// });

import { EventsApi } from "./eventsApi.js";

const refs = {
  list: document.querySelector(".list"),
  more: document.querySelector(".load"),
};

const eventsApi = new EventsApi("");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      fetch();
    });
  },
  {
    threshold: 0.5,
  }
);

function fetch() {
  eventsApi
    .fetchEvent()
    .then((events) => {
      handleSuccess(events);
      eventsApi.page += 1;
      observer.observe(document.querySelector("li:last-child"));
    })
    .catch(handleError);
}

fetch()

function handleSuccess(data) {
  const events = data._embedded.events;

  renderEvents(events);
}

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li>
        <img src='${images[0].url}' alt='${name}' width='400'>
        <h2>${name}</h2>
        </li>`;
    })
    .join("");
  refs.list.insertAdjacentHTML("beforeend", markup);
}

function handleError(error) {
  console.error(error);
}
