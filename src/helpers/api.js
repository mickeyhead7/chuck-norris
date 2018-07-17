const apiUrl = 'http://api.icndb.com/jokes/random';

export const fetchJoke = () => fetch(apiUrl)
  .then(result => result.json())
  .then(data => data.value);
