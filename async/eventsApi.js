class EventsApi {
  static #BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
  static #API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

  #keyword;
  #page = 0;

  constructor(keyword = "") {
    this.#keyword = keyword;
  }

  async fetchEvent() {
    const params = new URLSearchParams({
      apikey: EventsApi.#API,
      size: 20,
      page: this.#page,
      keyword: this.#keyword,
    });

    const result = await fetch(`${EventsApi.#BASE_URL}?${params}`);
    return result.ok ? result.json() : Promise.reject(result.statusText);
  }

  resetPage() {
    this.#page = 0;
  }

  get page() {
    return this.#page;
  }

  set page(value) {
    this.#page = value;
  }

  get keyword() {
    return this.#keyword;
  }

  set keyword(value) {
    this.#keyword = value;
  }
}

export { EventsApi };
