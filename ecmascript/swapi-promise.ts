const fetch = require('node-fetch')

fetch('https://swapi.co/api/people/1')
    .then((response: any) => response.json())
    .then((character: any) => character.films)
    .then((films: any) => fetch(films[0]))
    .then((film: any) => film.json())
    .then((film: any) => console.log(film.title)) // The Empire Strikes Back

export {}