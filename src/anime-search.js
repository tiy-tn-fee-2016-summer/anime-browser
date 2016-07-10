import GridComponent from 'grid-component';

const parseJSON = (res) => res.json();

export default class AnimeSearch {
  constructor(appElement) {
    this.element = appElement;

    this.elements = {
      grid: appElement.querySelector('.anime-results-grid'),
      searchInput: appElement.querySelector('.search-bar__input'),
      searchBtn: appElement.querySelector('.search-bar__btn'),
    };

    this.gridComponent = new GridComponent(this.elements.grid);
  }

  showResults(data) {
    this.gridComponent.show(data);
  }

  loadData() {
    const currentSearchTerm = this.elements.searchInput.value;
    const url =
      `https://cors-anywhere.herokuapp.com/hummingbird.me/api/v1/search/anime?query=${currentSearchTerm}`;

    // Load our data from the API
    fetch(url)
      .then(parseJSON)
      .then((data) => {
        this.showResults(data);
      });
  }

  start() {
    // Fill in grid with Loading message
    this.elements.grid.innerHTML =
      '<h2 class="anime-results-grid__loading">Please search above...</h2>';

    // Fire load data at start for testing
    this.elements.searchInput.value = 'Pokemon';
    this.loadData();

    // Setup our btn to listen for a click event
    this.elements.searchBtn.addEventListener('click', () => {
      // Fire search
      this.loadData();
    });
  }
}
