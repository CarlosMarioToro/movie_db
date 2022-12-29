window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#categories=')) {
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage() {
    console.log('Home!!');

    getTrendingMoviesPreview();
    getCategoriesPreview();
    getPopularMoviesPreview();
    getUpcomingMoviesPreview();
}

function categoriesPage() {
    console.log('Categoria!!');
}

function movieDetailsPage() {
    console.log('Movie!!');
}

function searchPage() {
    console.log('Search!!');
}

function trendsPage() {
    console.log('TRENDS');
}