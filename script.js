const API_KEY = 'api_key=c240615e3f07215587640c5cb306a0a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

let peliculas = []

getMovies(API_URL);

function getMovies(url){

    fetch(url)
    .then( (res) => res.json())
    .then(data => {
    peliculas = data.results
    console.log("leido dentro del fetch", peliculas)
    })
}

console.log("Leido fuera del fetch", peliculas)