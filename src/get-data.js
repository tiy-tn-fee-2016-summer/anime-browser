export default function (searchTerm) {
  return fetch(`https://cors-anywhere.herokuapp.com/hummingbird.me/api/v1/search/anime?query=${searchTerm}`)
    .then((res) => res.json());
}
