const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    },
});

const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/';

const pathClose = 'M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z'
const imageSize = 'original';

function secondsToString(minutes) {
    var hour = Math.floor(minutes / 60);
    var minute = minutes % 60;
    return hour + 'h ' + minute + 'm';
}

async function getBackgroundMoviesPreview(id) {
    const { data } = await api('/movie/' + id);
    // const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    // const data = await res.json();

    const generalDescriptionContainer = document.querySelector('.generalDescription');
    const generalDescription_image = document.createElement('img');
    const generalDescription_title = document.createElement('h2');
    const generalDescription_description = document.createElement('p');
    const generalDescription_genres = document.createElement('div');

    generalDescription_image.classList.add('movie-img');
    generalDescription_image.setAttribute('alt', data.original_title);
    generalDescription_image.setAttribute('src', IMAGE_URL + 'w300' + data.poster_path);
    generalDescription_title.classList.add('generalDescription_title');
    generalDescription_description.classList.add('movieDetail-description');
    // generalDescription_description.classList.add('inactive');
    generalDescription_description.setAttribute('id', 'description');
    generalDescription_genres.classList.add('movieDetails_genres');
    // generalDescription_genres.classList.add('inactive');    

    const imagen = document.getElementById('movieBackground');
    imagen.style.backgroundImage = "url(" + IMAGE_URL + imageSize + data.poster_path + ")";
    const score = document.getElementById('score');
    score.innerText = data.vote_average;
    const duration = document.getElementById('duration');
    duration.innerText = secondsToString(data.runtime);
    const title = document.getElementById('title');
    title.innerText = data.title;

    generalDescription_title.innerText = data.title;
    generalDescription_description.innerText = data.overview;
    generalDescriptionContainer.appendChild(generalDescription_image);
    generalDescriptionContainer.appendChild(generalDescription_title);
    generalDescriptionContainer.appendChild(generalDescription_description);
    generalDescriptionContainer.appendChild(generalDescription_genres);

    data.genres.forEach(genre => {
        const genresContainer = document.querySelector('.movieDetails_genres');
        const genreContainer = document.createElement('div');
        genreContainer.classList.add('genre-container');
        const divGenre = document.createElement('div');
        divGenre.classList.add('divGenre');
        divGenre.setAttribute('id', 'id' + genre.id);
        const genreSpanContainer = document.createElement('span');
        genreSpanContainer.innerText = genre.name;

        genreContainer.appendChild(divGenre);
        genreContainer.appendChild(genreSpanContainer);
        genresContainer.appendChild(genreContainer);
    })
}

async function getRelatedMoviesPreview(id) {
    const { data } = await api('/movie/' + id + '/similar');
    // const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const relatingPreviewMoviesContainer = document.querySelector('.related .relatedPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);

        movieContainer.appendChild(movieImg);
        relatingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

async function getTrendingMoviesPreview() {
    const { data } = await api('/trending/movie/day');
    // const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    trendingMoviesPreviewList.innerHTML = '';
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
    getBackgroundMoviesPreview(movies[0].id);
    getRelatedMoviesPreview(movies[0].id)
}

async function getCategoriesMoviesPreview() {
    const { data } = await api('/discover/movie?with_genres=16');

    // const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    console.log(movies);
    categoriesPreviewMovieList.innerHTML =  "";
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);

        movieContainer.appendChild(movieImg);
        categoriesPreviewMovieList.appendChild(movieContainer)
    });
}

async function getCategoriesPreview() {
    const { data } = await api('/genre/movie/list');

    // const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    // const data = await res.json();

    const categories = data.genres;
    categoriesPreviewList.innerHTML = "";
    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const movietitle = document.createElement('h3');
        movietitle.classList.add('category-title');
        movietitle.setAttribute('id','id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        movietitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(movietitle);
        categoriesList.appendChild(categoryContainer);
    });
}

async function getPopularMoviesPreview() {
    const { data } = await api('/movie/popular');
    // const res = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const popularPreviewMoviesContainer = document.querySelector('.popular .popularPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);

        movieContainer.appendChild(movieImg);
        popularPreviewMoviesContainer.appendChild(movieContainer);
    });
}

async function getUpcomingMoviesPreview() {
    const { data } = await api('/movie/upcoming');
    // const res = await fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const upcomingPreviewMoviesContainer = document.querySelector('.upcoming .upcomingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);

        movieContainer.appendChild(movieImg);
        upcomingPreviewMoviesContainer.appendChild(movieContainer);
    });
}