searchFormBtn.addEventListener('click', () => {
    location.hash = '#search='
});

infoBtn.addEventListener('click', () => {
    verDescripcion.classList.remove('inactive');
});


closeBtn.addEventListener('click', () => {
    verDescripcion.classList.add('inactive');
});

trendingHomeBtn.addEventListener('click', () => {
    homePage();
});

relatedHomeBtn.addEventListener('click', () => {
    homePage();
});

categoriesHomeBtn.addEventListener('click', () => {
    homePage();
});

popularHomeBtn.addEventListener('click', () => {
    homePage();
});

upcomingHomeBtn.addEventListener('click', () => {
    homePage();
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
    } else if (location.hash.startsWith('#related')) {
        relatedPage();
    } else if (location.hash.startsWith('#popular')) {
        popularPage();
    } else if (location.hash.startsWith('#upcoming')) {
        upcomingPage();
    } else if (location.hash.startsWith('#categories=')) {
        categoriesPage();
    } else {
        homePage();
    }

    window.scrollTo(0, 0);
}

function homePage() {
    location.hash = '#home'
    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    detailSection.classList.remove('inactive');
    verDescripcion.classList.add('inactive');

    trendingSection.classList.remove('inactive');
    trendingSection.classList.add('trending');
    trendingSection.classList.remove('trendingPage');
    trendingHomeBtn.classList.add('inactive');
    trendingMoviesPreviewList.classList.add('trendingPreview-movieList');
    trendingMoviesPreviewList.classList.remove('trendingPagePreview-movieList');
    trendingMoviesPreviewList.classList.add('scrolling');

    relatedSection.classList.remove('inactive');
    relatedSection.classList.add('related');
    relatedSection.classList.remove('relatedPage');
    relatedHomeBtn.classList.add('inactive');
    relatedMoviesPreviewList.classList.add('relatedPreview-movieList');
    relatedMoviesPreviewList.classList.remove('relatedPagePreview-movieList');
    relatedMoviesPreviewList.classList.add('scrolling');
    
    categoriesSection.classList.remove('inactive');
    categoryHeaderTitle.innerHTML = 'Categorias';
    categoriesList.classList.remove('categoriesPreview-list');
    categoriesList.classList.add('categories-list');
    categoriesPreviewMovieList.classList.add('inactive');
    categoriesList.classList.add('scrolling');    
    categoriesHomeBtn.classList.add('inactive');

    popularSection.classList.remove('inactive');
    popularSection.classList.add('popular');
    popularSection.classList.remove('popularPage');
    popularHomeBtn.classList.add('inactive');
    popularMoviesPreviewList.classList.add('popularPreview-movieList');
    popularMoviesPreviewList.classList.remove('popularPagePreview-movieList');
    popularMoviesPreviewList.classList.add('scrolling');

    upcomingSection.classList.remove('inactive');
    upcomingSection.classList.add('upcoming');
    upcomingSection.classList.remove('upcomingPage');
    upcomingHomeBtn.classList.add('inactive');
    upcomingMoviesPreviewList.classList.add('upcomingPreview-movieList');
    upcomingMoviesPreviewList.classList.remove('upcomingPagePreview-movieList');
    upcomingMoviesPreviewList.classList.add('scrolling');

    footerSection.classList.remove('inactive');
    
    getTrendingMoviesPreview();
    getCategoriesPreview();
    getCategoriesMoviesPreview();
    getPopularMoviesPreview();
    getUpcomingMoviesPreview();
}

function searchPage() {
    console.log('Search!!');

    detailSection.classList.add('inactive')
    trendingSection.classList.add('inactive');
    relatedSection.classList.add('inactive');
    categoriesSection.classList.add('inactive');
    popularSection.classList.add('inactive');
    upcomingSection.classList.add('inactive');
    
    verDescripcion.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    searchForm.classList.add('scale-up-right');

}

function movieDetailsPage() {
    console.log('Movie!!');
}

function trendsPage() {
    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');
    
    trendingSection.classList.remove('inactive');
    trendingSection.classList.remove('trending');
    trendingSection.classList.add('trendingPage');
    trendingHomeBtn.classList.remove('inactive');
    trendingMoviesPreviewList.classList.remove('trendingPreview-movieList');
    trendingMoviesPreviewList.classList.add('trendingPagePreview-movieList');
    trendingMoviesPreviewList.classList.remove('scrolling')
    
    relatedSection.classList.add('inactive')
    
    categoriesSection.classList.add('inactive');
    
    popularSection.classList.add('inactive');
    
    upcomingSection.classList.add('inactive');
    
    footerSection.classList.remove('inactive');
}

function relatedPage() {
    console.log('Related!!');

    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');
    
    trendingSection.classList.add('inactive');
    trendingHomeBtn.classList.add('inactive');
    
    relatedSection.classList.remove('inactive');
    relatedSection.classList.remove('related');
    relatedSection.classList.add('relatedPage');
    relatedHomeBtn.classList.remove('inactive');
    relatedMoviesPreviewList.classList.remove('relatedPreview-movieList');
    relatedMoviesPreviewList.classList.add('relatedPagePreview-movieList');
    relatedMoviesPreviewList.classList.remove('scrolling');
    
    categoriesSection.classList.add('inactive');
    
    popularSection.classList.add('inactive');
    
    upcomingSection.classList.add('inactive');
    
    footerSection.classList.remove('inactive');
}

function categoriesPage() {    
    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');
    
    trendingSection.classList.add('inactive');
    trendingHomeBtn.classList.add('inactive');
    
    relatedSection.classList.add('inactive');
    relatedHomeBtn.classList.add('inactive');
    
    categoriesSection.classList.remove('inactive');
    categoriesSection.classList.remove('categories');
    categoriesHomeBtn.classList.remove('inactive');
    categoriesList.classList.add('categoriesPreview-list');
    categoriesList.classList.remove('categories-list');
    categoriesList.classList.remove('scrolling');
    categoriesPreviewMovieList.classList.remove('inactive');
    
    popularSection.classList.add('inactive');
    
    upcomingSection.classList.add('inactive');
    
    footerSection.classList.remove('inactive');
}

function popularPage() {
    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');
    
    trendingSection.classList.add('inactive');
    trendingHomeBtn.classList.add('inactive');
    
    relatedSection.classList.add('inactive');
    relatedHomeBtn.classList.add('inactive');
    
    categoriesSection.classList.add('inactive');
    categoriesHomeBtn.classList.add('inactive');
    
    popularSection.classList.remove('inactive');
    popularSection.classList.remove('popular');
    popularSection.classList.add('popularPage');
    popularHomeBtn.classList.remove('inactive');
    popularMoviesPreviewList.classList.remove('popularPreview-movieList');
    popularMoviesPreviewList.classList.add('popularPagePreview-movieList');
    popularMoviesPreviewList.classList.remove('popularPreview-movieList');
    popularMoviesPreviewList.classList.remove('scrolling');
    
    upcomingSection.classList.add('inactive');
    
    footerSection.classList.remove('inactive');
}

function upcomingPage() {
    console.log('Upcoming!!');

    headerSection.classList.remove('inactive');
    menuMovil.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    detailSection.classList.add('inactive');
    verDescripcion.classList.add('inactive');
    
    trendingSection.classList.add('inactive');
    
    relatedSection.classList.add('inactive')
    
    categoriesSection.classList.add('inactive');
    
    popularSection.classList.add('inactive');
    
    upcomingSection.classList.remove('inactive');
    upcomingSection.classList.remove('upcoming');
    upcomingSection.classList.add('upcomingPage');
    upcomingHomeBtn.classList.remove('inactive');
    upcomingMoviesPreviewList.classList.remove('upcomingPreview-movieList');
    upcomingMoviesPreviewList.classList.add('upcomingPagePreview-movieList');
    upcomingMoviesPreviewList.classList.remove('scrolling');
    
    footerSection.classList.remove('inactive');
}