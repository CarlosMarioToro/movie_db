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
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

function secondsToString(minutes) {
    var hour = Math.floor(minutes / 60);
    var minute = minutes % 60;
    return hour + 'h ' + minute + 'm';
}

async function getBackgroundMoviesPreview(id) {
    const { data } = await api('/movie/' + id);
    // const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    // const data = await res.json();

    console.log(data);
    console.log(data.runtime);
    const imagen = document.getElementById('movieBackground');
    imagen.style.backgroundImage = "url(" + IMAGE_URL + data.poster_path + ")";
    const score = document.getElementById('score');
    score.innerText = data.vote_average;
    const duration = document.getElementById('duration');
    duration.innerText = secondsToString(data.runtime);
    const title = document.getElementById('title');
    title.innerText = data.title;
    const description = document.getElementById('description');
    description.innerText = data.overview;

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

async function getTrendingMoviesPreview() {
    const { data } = await api('/trending/movie/day');
    // const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('.trending .trendingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', IMAGE_URL + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
    getBackgroundMoviesPreview(movies[0].id);
}

async function getCategoriesPreview() {
    const { data } = await api('/genre/movie/list');

    // const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    // const data = await res.json();

    const categories = data.genres;
    categories.forEach(category => {
        const PreviewCategoriesContainer = document.querySelector('.categories .categories-list')
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const movietitle = document.createElement('h3');
        movietitle.classList.add('category-title');
        movietitle.setAttribute('id','id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        movietitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(movietitle);
        PreviewCategoriesContainer.appendChild(categoryContainer);
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
        movieImg.setAttribute('src', IMAGE_URL + movie.poster_path);

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
        movieImg.setAttribute('src', IMAGE_URL + movie.poster_path);

        movieContainer.appendChild(movieImg);
        upcomingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

getTrendingMoviesPreview();
getCategoriesPreview();
getPopularMoviesPreview();
getUpcomingMoviesPreview();