import AnimeSearch from 'anime-search';

export default function(appElement) {
  // Start up the application
  const app = new AnimeSearch(appElement);
  // Start the application listeners
  app.start();
}
