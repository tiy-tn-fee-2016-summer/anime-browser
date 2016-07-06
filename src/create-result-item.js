export default function (data) {
  // console.log(data);
  const element = document.createElement('div');
  element.classList.add('results-list__item');

  element.innerHTML = `
    <div class="result-row">
      <div class="result-row__item">
        <div class="result-frame">
          <img src="${data.cover_image}" alt="" class="result-frame__pic">
        </div>
      </div>
      <div class="result-row__item result-row__item--expand">
        <div class="result-info">
          <h2 class="result-info__title">${data.title}</h2>
          <p class="result-info__summary">${data.synopsis}</p>
        </div>
      </div>
      <div class="result-row__item result-row__item--no-shrink">
        <div class="result-stats">
          <h3 class="result-stats__item result-stats__item--type">${data.show_type}</h3>
          <h3 class="result-stats__item result-stats__item--episodes">${data.episode_count}</h3>
          <h3 class="result-stats__item result-stats__item--rating">${data.age_rating}</h3>
        </div>
      </div>
    </div>`;

  return element;
}
