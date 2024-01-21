const searchBar = document.body.querySelector("#header__search__bar");
const movieList = document.body.querySelector(".movies__list");

searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(searchBar.value);
    fetchData();
  }
});

async function fetchData() {
  const searchTerm = searchBar.value;
  const URL = `https://omdbapi.com/?apikey=f731582d&s=${searchTerm}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    movieList.innerHTML = data.Search.map(
      (movie) =>
        `<div class="movie">
        <figure class="movieimg--wrapper">
          <img src="${movie.Poster}" alt="" class="movieimg" />
          <h3 class="movieinfo--title">${movie.Title}</h3>
          <div class="movieinfo--list">
            <div class="movieinfo movieinfo1">
              <i class="fa-solid fa-clock movieinfo--icon"></i>
              <p class="movieinfo--text">${movie.Runtime}</p>
            </div>
            <div class="movieinfo movieinfo2">
              <i class="fa-solid fa-star movieinfo--icon"></i>
              <p class="movieinfo--text">${movie.imdbRating}</p>
            </div>
            <div class="movieinfo movieinfo3">
              <i class="fa-solid fa-earth-americas movieinfo--icon"></i>
              <p class="movieinfo--text">${movie.Language}</p>
            </div>
          </div>
        </figure>
        <h4 class="movietitle">${movie.Title}</h4>
      </div>`
    ).join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

