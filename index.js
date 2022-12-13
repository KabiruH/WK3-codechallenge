// //URLS
// const allMovies = "http://localhost:3000/films"
// //Movie Lists



// document.addEventListener('DOMContentLoaded', () => {
//     function moviesList () {
//         fetch (allMovies)
//         .then((response) => response.json())
//         .then((data) => {

//                 let movies = document.getElementsByTagName ("ol") [0]
//                 let movieId = document.getElementById("id") 
//                 let movieTitle = document.getElementById ("title")
//                 let movieRuntime = document.getElementById ("runtime")
//                 let movieShowtime = document.getElementById ("showtime")
//                 let movieCapacity = document.getElementById ("capacity")
//                 let movieTickets = document.getElementsById ("tickets-sold")
//                 let movieDescription = document.getElementsByTagName ("p")
//                 let moviePoster = document.getElementsByTagName ("img")
            
//         })

        
        

//     }    
//  })

fetch("http://localhost:3000/films")
.then (resp => resp.json())
.then (data => {
   // console.log(data)

  const firstFilm = data.find((object) => object.id == 1)


    let details = document.getElementsByClassName("Details")
    title.innerText = firstFilm.title
    runtime.innerText = firstFilm.runtime
    showtime.innerText = firstFilm.showtime

    description.innerText = firstFilm.description

    const poster = document.getElementById("poster")
    const image = document.createElement("img")
    image.src = firstFilm.poster
    image.alt = "poster image"
    image.width = "400"
    image.height = "400"
    poster.appendChild(image)

    const remainingTickets = firstFilm.capacity-firstFilm.tickets_sold
    const availableTickets = document.createElement ("span")
    availableTickets.innerText = `${remainingTickets} remaining tickets`
    details.appendChild (availableTickets)

    const ticketButton = document.getElementById ("buy")
    ticketButton.addEventListener("click", () =>{
      if (availableTickets < 1){
        availableTickets.innerText = "SOLD OUT"
        alert("no more tickets")
        }
        else {
          --availableTickets}

    })
    function getMovies (){
      fetch ("http://localhost:3000/films")
      .then(response => response.json())
      .then((renderFilms))
    }
      getmovies ()
    
      function movieTitles (names) {
      const availableMovies = document.getElementsByClassName ("list-group")
      const listTitles = document.createElement("li")
      listTitles.innerText = names.title
      availableMovies.appendChild (listTitles)
    }
    function renderFilms (films) {
      films.forEach (movieTitles);
    }
    

    



    
})