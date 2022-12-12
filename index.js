//URLS

//Movie Lists

const MoviesList = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', () => {

function fetchMovieTitles(){
    fetch (MoviesList)
    .then((response) => response.json())
    .then((data) =>{
        const firstMovie = movie.data[0]
         


    })
}
})