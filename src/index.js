import fillResultsList from './fill-results-list';
import getData from './get-data';

export default function (appElement) {
  // Get the elements
  const resultsList = appElement.querySelector('.results-list');
  const input = appElement.querySelector('.search-form__input');
  const searchBtn = appElement.querySelector('.search-form__btn');

  // Fill in results after getting data
  function afterData(shows) {
    fillResultsList(resultsList, shows);
  }

  // Get Data after click
  function afterClick() {
    getData(input.value)
      .then(afterData);
  }

  // Listen for the search button to be clicked
  searchBtn.addEventListener('click', afterClick);
}
