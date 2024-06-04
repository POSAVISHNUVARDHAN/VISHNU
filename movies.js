document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display top 10 Telugu movies
    fetchTopMovies('telugu', 'teluguMovies', 10);

    // Fetch and display top 10 Hindi movies
    fetchTopMovies('hindi', 'hindiMovies', 10);

    // Fetch and display top 10 Tamil movies
    fetchTopMovies('tamil', 'tamilMovies', 10);

    // Fetch and display top 10 Malayalam movies
    fetchTopMovies('malayalam', 'malayalamMovies', 10);

    // Fetch and display top 10 English movies
    fetchTopMovies('english', 'englishMovies', 10);

    async function fetchTopMovies(language, elementId, count) {
        const apiKey = '5f06f038';
        const response = await fetch(`http://www.omdbapi.com/?s=${language}&apikey=${apiKey}&type=movie`);
        const data = await response.json();

        if (data.Search) {
            displayMovies(data.Search.slice(0, count), elementId);
        } else {
            console.error(`Failed to fetch ${language} movies`);
        }
    }

    function displayMovies(movies, elementId) {
        const movieList = document.getElementById(elementId);
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie';
            movieItem.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h4>${movie.Title}</h4>
            `;
            movieList.appendChild(movieItem);
        });
    }
});
