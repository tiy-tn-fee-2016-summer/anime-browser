import AnimeResult from 'anime-result';

export default class GridComponent {
  constructor(gridElement) {
    this.element = gridElement;
  }

  show(data) {
    // Clear out our grid
    this.element.innerHTML = '';

    // Loop through results
    for (let i = 0; i < data.length; i++) {
      const show = data[i];
      // Create a anime result component
      const resultComponent = new AnimeResult(show);
      resultComponent.show();

      this.element.appendChild(resultComponent.element);
    }
  }
}
