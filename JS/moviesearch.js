//top trending movies api.

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

 //authrization code. 
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


//searched movie api.
const search =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const movieMainContainer = document.querySelector("#moviemaincontainer");
const poster = document.querySelector(".movie_poster");
const movie_info = document.querySelector(".movie_info");

const getMovies = async (api) => {
  const response = await fetch(api);
  console.log(response);
  const data = await response.json();
  console.log(data);
  showMovies(data.results);
};


// ===============================================API CALL===============================================================
const showMovies = (data) => {
  movieMainContainer.innerHTML = "";
  data.forEach((item) => {
    const moviecontainer = document.createElement("div");
    moviecontainer.classList.add("moviecontainer");
    moviecontainer.innerHTML = `
            <img src = "${
              IMGPATH + item.poster_path
            }" alt=""  class="movie_poster"/>

            <div class="movie_info">
                <div class="title"> 
                    <h2> ${item.original_title}  </h2>
                    <span> ${item.vote_average} <span>
                </div>
                <h3 class="overview">Overview:</h3>
                <p class="movie_discription"> 
                    "${item.overview}"
                </p>
             </div>
     `;
    movieMainContainer.appendChild(moviecontainer);
  });
};


// ====================================================FOR SEARCHING MOVIES========================================
const find = document.querySelector(".search_bar");

find.addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    // console.log(event.target.value)
    getMovies(search + event.target.value);
  } else {
    getMovies(apiUrl);
  }
});

getMovies(apiUrl);
