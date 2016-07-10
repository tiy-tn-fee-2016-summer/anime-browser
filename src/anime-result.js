export default class AnimeResult {
  constructor(showData) {
    // Setup an empty element
    this.element = document.createElement('div');
    this.element.classList.add('anime-results-grid__item');
    this.element.innerHTML = `
    <div class="anime-result">
      <div class="anime-result__frame">
        <img src="" alt="" class="anime-result__pic">
        <h2 class="anime-result__title"></h2>
      </div>

      <div class="anime-result__popup">
        <div class="anime-details">
          <ul class="anime-details__genre-list"></ul>
          <p class="anime-details__synopsis"></p>
        </div>
      </div>
    </div>`;

    this.elements = {
      pic: this.element.querySelector('.anime-result__pic'),
      title: this.element.querySelector('.anime-result__title'),
      genreList: this.element.querySelector('.anime-details__genre-list'),
      synopsis: this.element.querySelector('.anime-details__synopsis'),
    };

    this.data = showData;
  }

  show() {
    this.elements.pic.src = this.data.cover_image;
    this.elements.title.innerText = this.data.title;
    this.elements.synopsis.innerText = this.data.synopsis;

    // this.elements.genreList
  }
}
