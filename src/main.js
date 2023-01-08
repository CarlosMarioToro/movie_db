const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
        'language': 'es-CO',
    },
});

const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/';

const
    screen = {
        small: null,
        medium: window.matchMedia('(min-width: 400px)'),
        large: window.matchMedia('(min-width: 800px)')
    };

let imageSize = 'w342';

function resizeHandler() {

    // get window width
    if (window.matchMedia("(max-width: 375px)").matches) {
        imageSize = 'w342';
        getTrendingMoviesPreview();
        getCategoriesPreview();
        getCategoriesMoviesPreview();
        getPopularMoviesPreview();
        getUpcomingMoviesPreview();
    } else if (window.matchMedia("(min-width: 376px) and (max-width: 992px)").matches) {
        imageSize = 'w500';
        getTrendingMoviesPreview();
        getCategoriesPreview();
        getCategoriesMoviesPreview();
        getPopularMoviesPreview();
        getUpcomingMoviesPreview();       
    } else if (window.matchMedia("(min-width: 993px)").matches) {
        imageSize = 'original';
        getTrendingMoviesPreview();
        getCategoriesPreview();
        getCategoriesMoviesPreview();
        getPopularMoviesPreview();
        getUpcomingMoviesPreview();      
    }

    
}

function minutesToString(minutes) {
    var hour = Math.floor(minutes / 60);
    var minute = minutes % 60;
    return hour + 'h ' + minute + 'm';
}

// Utils
function createMovies(movies, container) {
    container.innerHTML = '';

    if (createMovies.caller.name === 'getTrendingMoviesPreview') {
        where = 'Trending';
    } else if (createMovies.caller.name === 'getRelatedMoviesPreview') {
        where = 'Related';
    } else if (createMovies.caller.name === 'getPopularMoviesPreview') {
        where = 'Popular';
    } else if (createMovies.caller.name === 'getUpcomingMoviesPreview') {
        where = 'Upcoming';
    } else {
        where = 'Category';
    }

    movies.forEach(movie => {
        if (movie.poster_path !== null) {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');
    
            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('title', movie.title);
            movieImg.setAttribute('src', IMAGE_URL + imageSize + movie.poster_path);
            movieImg.setAttribute('where', where);
    
            movieImg.addEventListener('click', () => {
                location.hash = `#moviedetails=${movie.id}-${movie.original_title}`;
                getBackgroundMoviesPreview(movie.id);
                trendingTxt.innerHTML = movieImg.getAttribute('where')
            });
    
            movieContainer.appendChild(movieImg);
            container.appendChild(movieContainer);            
        }
    });
}

async function getBackgroundMoviesPreview(id) {
    const { data } = await api('/movie/' + id);

    const imagen = document.getElementById('movieBackground');
    imagen.style.backgroundImage = "url(" + IMAGE_URL + imageSize + data.poster_path + ")";
    const score = document.getElementById('score');
    score.innerText = data.vote_average;
    const duration = document.getElementById('duration');
    duration.innerText = minutesToString(data.runtime);
    const title = document.getElementById('title');
    title.innerText = data.title;
    // trendingTxt.innerText = 'sdfsdf';

    infoBtn.addEventListener('click', () => {
        location.hash = `#moviedetails=${data.id}-${data.original_title}`;
        navigator();
    });

    data.genres.forEach(genre => {
        // const genresContainer = document.querySelector('.movieDetails_genres');
        const genreContainer = document.createElement('div');
        genreContainer.classList.add('genre-container');
        const divGenre = document.createElement('div');
        divGenre.classList.add('divGenre');
        divGenre.setAttribute('id', 'id' + genre.id);
        const genreSpanContainer = document.createElement('span');
        genreSpanContainer.innerText = genre.name;

        genreContainer.appendChild(divGenre);
        genreContainer.appendChild(genreSpanContainer);
    })
    generalDescription(id);
    
    getRelatedMoviesPreview(id);
}

async function generalDescription(id) {
    const { data } = await api('/movie/' + id);

    // const generalDescriptionContainer = document.querySelector('.cardDescription');
    
    generalDescriptionContainer.innerHTML = '';

    const generalDescription_image = document.createElement('img');
    const generalDescription_title = document.createElement('h2');
    const generalDescription_description = document.createElement('p');
    const generalDescription_genres = document.createElement('div');

    generalDescription_image.classList.add('movie-img');
    generalDescription_image.setAttribute('alt', data.original_title);
    generalDescription_image.setAttribute('src', IMAGE_URL + imageSize + data.poster_path);
    generalDescription_title.classList.add('generalDescription_title');
    generalDescription_description.classList.add('movieDetail-description');
    generalDescription_description.setAttribute('id', 'description');
    generalDescription_genres.classList.add('movieDetails_genres');

    generalDescription_title.innerText = data.title;
    generalDescription_description.innerText = data.overview;

    generalDescriptionContainer.appendChild(generalDescription_title);
    generalDescriptionContainer.appendChild(generalDescription_image);
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

async function getTrendingMoviesPreview() {
    const { data } = await api('/trending/movie/day');

    const movies = data.results;
    createMovies(movies, trendingMoviesPreviewList);
    
    getBackgroundMoviesPreview(movies[0].id);
    // getRelatedMoviesPreview(movies[0].id)
}

async function getRelatedMoviesPreview(id) {
    const { data } = await api('/movie/' + id + '/similar');

    const movies = data.results;
    createMovies(movies, relatedMoviesPreviewList);
}

async function getCategoriesMoviesPreview(id) {
    const { data } = await api('/discover/movie?with_genres=' + id);

    const movies = data.results;
    createMovies(movies, categoriesPreviewMovieList);
}

async function getCategoriesPreview() {
    const { data } = await api('/genre/movie/list');
    
    const categories = data.genres;
    categoriesPreviewList.innerHTML = "";
    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        
        const categorytitle = document.createElement('h3');
        categorytitle.classList.add('category-title');
        const categoryTitleText = document.createTextNode(category.name);
        categorytitle.addEventListener('click', () => {
            location.hash = `#categories=${category.id}-${category.name}`;
            if (categoryHeaderTitle.hasChildNodes()) {
                categoryHeaderTitle.removeChild(categoryHeaderTitle.lastChild);
            }
            categoryHeaderTitle.appendChild(document.createTextNode('Categorias' + ' - ' + category.name));
            getCategoriesMoviesPreview(category.id)
        });
        categorytitle.setAttribute('id','id' + category.id);

        categorytitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categorytitle);
        categoriesList.appendChild(categoryContainer);
    });
}

async function getPopularMoviesPreview() {
    const { data } = await api('/movie/popular');

    const movies = data.results;
    createMovies(movies, popularMoviesPreviewList);
}

async function getUpcomingMoviesPreview() {
    const { data } = await api('/movie/upcoming');

    const movies = data.results;
    createMovies(movies, upcomingMoviesPreviewList);
}

async function getMoviesBySearch(query) {
    const { data } = await api('/search/movie' + query);

    const movies = data.results;
    createMovies(movies, categoriesPreviewMovieList);
}