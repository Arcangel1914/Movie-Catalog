
// This is an array of objects (movie data)
//  // changing this to movie titles, genre, rating, year
let movies = [ 

 { title: "The Accountant", genre: "action", rating: 4.9, year: 2016 }, 

 { title: "The Dark Knight", genre: "action", rating: 4.8, year: 2008 },
 { title: "Good Will Hunting", genre: "drama", rating: 4.7, year: 1997 },
 { title: "The Shawshank Redemption", genre: "drama", rating: 4.9, year: 1994 },
  { title: "The Hangover", genre: "comedy", rating: 4.3, year: 2009 },
  {title: "Me before You", genre: "romance", rating: 4.1, year: 2016 },
  {title: "The Notebook", genre: "romance", rating: 4.2, year: 2004 },
  {title: "Superbad", genre: "comedy", rating: 4.0, year: 2007 },
  {title: "Inception", genre: "action", rating: 4.8, year: 2010 },
  {title: "The Godfather", genre: "drama", rating: 4.9, year: 1972 },
  {title: "Year One", genre: "comedy", rating: 3.5, year: 2009 },
  {title: "The Fault in Our Stars", genre: "romance", rating: 4.0, year: 2014 },


];




//I want to display the list of movies in the webpage, so I can
//  see all the data for each movie. 
// I will use a for loop to go through each movie in the array and
//  log its title, genre, rating, 
// and year to the console.


function showMovies(movies) { 
  const movieContainer = document.getElementById("movie-container"); 
  movieContainer.innerHTML = ""; 
  const templateCard = document.querySelector(".template-card");

  for (let i = 0; i < movies.length; i++) { 
    const movieCard = templateCard.cloneNode(true); // Clone the template card for each movie

    movieCard.style.display = "block"; // Make the cloned card visible
    movieCard.classList.remove("template-card"); // Remove the template class 
     // from the cloned card
    movieCard.querySelector(".movie-title").textContent = movies[i].title; 
    movieCard.querySelector(".movie-genre").textContent = movies[i].genre; 
    movieCard.querySelector(".movie-rating").textContent = movies[i].rating; 
    movieCard.querySelector(".movie-year").textContent = movies[i].year; 
    
    
    
    movieContainer.appendChild(movieCard); // Add the movie card to the container
  } 
  
  
  }




// This function will be called when the page loads to 
// display the list of movies on the webpage.
document.addEventListener("DOMContentLoaded", function() {

  showMovies(movies); // Call the function to show movies when the page loads
}

);



   

function updateMovieList() { 
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const genreSelectValue = document.getElementById("genre-select").value;

  const filteredMovies = movies.filter(  // Use the filter method to
  //  create a new array of movies
  //  
    
    function(movie) { // Filter movies based on search input and selected genre
    const matchesTitle = movie.title.toLowerCase().includes(searchInput);
    const matchesGenre = genreSelectValue === "" || movie.genre === genreSelectValue; // Check if the movie matches the selected genre or if no genre is selected


    return matchesTitle && matchesGenre;
  }

);

  showMovies(filteredMovies);
}

function SearchByTitle() { 
updateMovieList(); // Call the function to show movies 
// based on the search input and selected genre
}




// This function will filter the movies by genre 
// when the user selects a genre from the dropdown menu.

function filterByGenre() { 
 
updateMovieList(); // Call the function to show movies 
// based on the search input and selected genre

}

function SortByYear() { 

  const sortedMovies = [...movies].sort( // Create a copy of the movies array 
  // and sort it by year
    function(a, b) {
      return a.year - b.year; // Sort movies by year in ascending order
    } // from oldest to newest
  );

  showMovies(sortedMovies); // Show the sorted movies on the webpage  
}

