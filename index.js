

fetch("http://localhost:3000/films")
.then (resp => resp.json())
.then (data => {
   // console.log(data)

  const firstFilm = data.find((object) => object.id == 1)
//Show poster of the first movie and its details

    let details = document.getElementsByClassName("Details")
    title.innerText =  firstFilm.title
    runtime.innerText = firstFilm.runtime
    showtime.innerText = firstFilm.showtime
    capacity.innerText = firstFilm.capacity
    tickets_sold.innerText = firstFilm.tickets_sold
    description.innerText = firstFilm.description

    

    const poster = document.getElementById("poster")
    const image = document.createElement("img")
    image.src = firstFilm.poster
    image.alt = "poster image"
    image.width = "300"
    image.height = "400"
    poster.appendChild(image)

    //purchasing tickets
    const remainingTickets = firstFilm.capacity-firstFilm.tickets_sold
    const availableTickets = document.createElement ("button")
    availableTickets.innerText = `${remainingTickets} remaining tickets`
    details.appendChild (availableTickets)

    const ticketButton = document.getElementById ("buy")
    ticketButton.addEventListener("click", () =>{
      if (availableTickets < 1){
        ticketButton.innerText = "SOLD OUT"
        availableTickets.innerText = ""
        
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