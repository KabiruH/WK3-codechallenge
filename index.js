
function loadMovies () {
fetch("http://localhost:3000/films")
.then (resp => resp.json())
.then (data => appendFirstFilm(data))
   // console.log(data)
}
loadMovies ()
  
//Show poster of the first movie and its details
function appendFirstFilm(data) {
  let first = data[0];
  let details = document.getElementById("button");
  details.innerHTML = "";
  let image = document.getElementById("pic");
  let title = document.getElementById("title");
  let runtime = document.getElementById("runtime");
  let showtime = document.getElementById("showtime");
  let tickets = document.getElementById("tickets");
  let description = document.getElementById("description");

  let button = document.createElement("button");
  button.id = "btn";
  button.innerText = "Buy Ticket";
  let total = first.capacity - first.tickets_sold;
  button.addEventListener("click", () => {
    if (total > 0) {
      total --;
      document.getElementById("tickets").innerHTML = total;
    } else if (total < 1) {
      document.getElementById("tickets").innerHTML = "*No tickets available";
    }
  });
  title.textContent = first.title;
  runtime.textContent = first.runtime;
  showtime.textContent = first.showtime;
  tickets.textContent = first.capacity - first.tickets_sold;
  description.textContent = first.description;
  image.src = `
    ${first.poster}
    `;
  details.appendChild(button);
}

//fetches list of movies in the menu section
function appendMenu() {
  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((data) => menuTitles(data));
}
appendMenu();

//Displays menu titles on the menu section
function menuTitles(data) {
  data.forEach((item) => {
    let title = document.createElement("li");
    title.id = "list";
    title.addEventListener("click", () => {
      const i = item.id;
      appendIndividualDetails(data[i - 1]);
    });
    let menu = document.getElementById("menu");
    title.textContent = item.title;
    menu.appendChild(title);
  });
}

//appends details of the specific name that is clicked on the
function appendIndividualDetails(item) {
  let movie = document.getElementById("button");
  movie.innerHTML = "";
  let image = document.getElementById("pic");
  let title = document.getElementById("title");
  let runtime = document.getElementById("runtime");
  let showtime = document.getElementById("showtime");
  let tickets = document.getElementById("tickets");
  let description = document.getElementById("description");
  let button = document.createElement("button");
  button.id = "btn";
  button.textContent = "Buy Ticket";
  let total = item.capacity - item.tickets_sold;
  //Buying tickets.
  button.addEventListener("click", () => {
    //if tickets available is greater than 0 the total amount decreses by one every time it is pressed otherwise it prints a message
    if (total > 0) {
      total -= 1;
      document.getElementById("tickets").innerHTML = total;
    } else if (total < 1) {
      document.getElementById("tickets").innerHTML = "*No tickets available";
    }
  });

  title.textContent = item.title;
  runtime.textContent = item.runtime;
  showtime.textContent = item.showtime;
  tickets.textContent = item.capacity - item.tickets_sold;
  description.textContent = item.description;
  image.src = `
    ${item.poster}
    `;
  movie.appendChild(button)
}