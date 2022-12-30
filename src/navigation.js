searchFormBtn.addEventListener('click', () => {
    location.hash = '#trends'
});

infoBtn.addEventListener('click', () => {
    verDescripcion.classList.remove('inactive');
});

closeBtn.addEventListener('click', () => {
    verDescripcion.classList.add('inactive');
});

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

    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    detailSection.classList.remove('inactive');
    verDescripcion.classList.add('inactive');

    trendingPreviewSection.classList.remove('inactive');
    
    categoriesPreviewSection.classList.remove('inactive');
    categoriesList.classList.remove('categoriesPreview-list');
    categoriesList.classList.add('categories-list');
    categoriesPreviewMovieList.classList.add('inactive');
    categoriesList.classList.add('scrolling');

    popularSection.classList.remove('inactive');

    upcommingSection.classList.remove('inactive');

    footerSection.classList.remove('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
    getCategoriesMoviesPreview();
    getPopularMoviesPreview();
    getUpcomingMoviesPreview();
}

function categoriesPage() {
    console.log('Categoria!!');

    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');

    relatedPreviewSection.classList.add('inactive')

    categoriesPreviewSection.classList.remove('inactive');
    categoriesList.classList.add('categoriesPreview-list');
    categoriesList.classList.remove('categories-list');
    categoriesList.classList.remove('scrolling');
    categoriesPreviewMovieList.classList.remove('inactive');

    popularSection.classList.add('inactive');

    upcommingSection.classList.add('inactive');

    footerSection.classList.remove('inactive');
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