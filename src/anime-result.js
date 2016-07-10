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
          <button class="anime-details__close">X</button>
          <ul class="anime-details__genre-list"></ul>
          <p class="anime-details__synopsis"></p>
        </div>
      </div>
    </div>`;

    this.elements = {
      frame: this.element.querySelector('.anime-result__frame'),
      pic: this.element.querySelector('.anime-result__pic'),
      title: this.element.querySelector('.anime-result__title'),
      popup: this.element.querySelector('.anime-result__popup'),
      closeBtn: this.element.querySelector('.anime-details__close'),
      genreList: this.element.querySelector('.anime-details__genre-list'),
      synopsis: this.element.querySelector('.anime-details__synopsis'),
    };

    this.data = showData;
    this.setupEvents();
  }

  hidePopup() {
    this.elements.popup.classList.remove('anime-result__popup--active');
  }

  showPopup() {
    this.elements.popup.classList.add('anime-result__popup--active');
  }

  setupEvents() {
    this.elements.frame.addEventListener('click', () => {
      this.showPopup();
    });

    this.elements.closeBtn.addEventListener('click', () => {
      this.hidePopup();
    });
  }

  show() {
    this.elements.pic.src = this.data.cover_image;
    this.elements.title.innerText = this.data.title;
    this.elements.synopsis.innerText = this.data.synopsis;

    for (let i = 0; i < this.data.genres.length; i++) {
      const genreName = this.data.genres[i].name;
      const genreEl = document.createElement('li');
      genreEl.innerText = genreName;

      this.elements.genreList.appendChild(genreEl);
    }

    window.setTimeout(() => {
      this.elements.frame.style.opacity = '1';
    }, 400);
  }
}
