menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.toggle('inactive');
    // menuHamburger.classList.remove('hamburger')
})

searchFormBtn.addEventListener('click', () => {
    searchPage();
});

searchFrmBtn.addEventListener('click', () => {
    fillSearchPage();
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

relatedBtn.addEventListener('click', () => {
    location.hash = '#related';
});

categoriesBtn.addEventListener('click', () => {
    location.hash = '#categories=';
});

popularBtn.addEventListener('click', () => {
    location.hash = '#popular';
});

upcomingBtn.addEventListener('click', () => {
    location.hash = '#upcoming';
});

closeBtn.addEventListener('click', () => {
    location.hash = '';
    verDescripcion.classList.add('inactive');
});

trendingHomeBtn.addEventListener('click', () => {
    window.history.back();
});

relatedHomeBtn.addEventListener('click', () => {
    window.history.back();
});

categoriesHomeBtn.addEventListener('click', () => {
    window.history.back();
});

popularHomeBtn.addEventListener('click', () => {
    window.history.back();
});

upcomingHomeBtn.addEventListener('click', () => {
    window.history.back();
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#moviedetails=')) {
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

    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    // menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    // menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.remove('inactive');

    headerTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    searchFormBtn.classList.remove('inactive');
    searchFrmBtn.classList.add('inactive');

    searchForm.classList.add('scale-up-right');

    detailSection.classList.remove('inactive');
    verDescripcion.classList.add('inactive');

    trendingSection.classList.remove('inactive');
    trendingSection.classList.add('trending');
    trendingSection.classList.remove('trendingPage');
    trendingHomeBtn.classList.add('inactive');
    trendingMoviesPreviewList.classList.add('trendingPreview-movieList');
    trendingMoviesPreviewList.classList.remove('trendingPagePreview-movieList');
    trendingMoviesPreviewList.classList.add('scrolling');
    trendingBtn.classList.remove('inactive');

    relatedSection.classList.remove('inactive');
    relatedSection.classList.add('related');
    relatedSection.classList.remove('relatedPage');
    relatedHomeBtn.classList.add('inactive');
    relatedMoviesPreviewList.classList.add('relatedPreview-movieList');
    relatedMoviesPreviewList.classList.remove('relatedPagePreview-movieList');
    relatedMoviesPreviewList.classList.add('scrolling');
    relatedBtn.classList.remove('inactive');

    categoriesSection.classList.remove('inactive');
    categoryHeaderTitle.innerHTML = 'Categorias';
    categoryHeaderTitle.classList.remove('inactive');
    categoriesPreviewList.classList.remove('categoriesPreview-list');
    categoriesPreviewList.classList.add('categories-list');
    categoriesPreviewList.classList.add('scrolling');
    categoriesPreviewList.classList.remove('inactive');
    categoriesPreviewMovieList.classList.add('inactive');
    categoriesHomeBtn.classList.add('inactive');
    categoriesBtn.classList.remove('inactive');

    popularSection.classList.remove('inactive');
    popularSection.classList.add('popular');
    popularSection.classList.remove('popularPage');
    popularHomeBtn.classList.add('inactive');
    popularMoviesPreviewList.classList.add('popularPreview-movieList');
    popularMoviesPreviewList.classList.remove('popularPagePreview-movieList');
    popularMoviesPreviewList.classList.add('scrolling');
    popularBtn.classList.remove('inactive');

    upcomingSection.classList.remove('inactive');
    upcomingSection.classList.add('upcoming');
    upcomingSection.classList.remove('upcomingPage');
    upcomingHomeBtn.classList.add('inactive');
    upcomingMoviesPreviewList.classList.add('upcomingPreview-movieList');
    upcomingMoviesPreviewList.classList.remove('upcomingPagePreview-movieList');
    upcomingMoviesPreviewList.classList.add('scrolling');
    upcomingBtn.classList.remove('inactive');

    footerSection.classList.remove('inactive');    
}

function searchPage() {
    // location.hash = '#search=';

    headerTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    searchFormBtn.classList.add('inactive');
    searchFrmBtn.classList.remove('inactive');

    // menuHamburger.classList.toggle('open');
    // menu.classList.toggle('respmenu');
    // menu.classList.toggle('menu');
    menu.classList.add('inactive');

    searchForm.classList.add('scale-up-right');

}

function fillSearchPage() {
    location.hash = '#search=' + searchForm.value;

    const [_, query] = location.hash.split('=');

    getMoviesBySearch(query);

    detailSection.classList.add('inactive');
    trendingSection.classList.add('inactive');
    relatedSection.classList.add('inactive');
    popularSection.classList.add('inactive');
    upcomingSection.classList.add('inactive');
    categoriesList.classList.add('inactive');
    categoryHeaderTitle.classList.add('inactive');
    categoriesPreviewMovieList.classList.remove('inactive');

    // menuHamburger.classList.toggle('open');
    // menu.classList.toggle('respmenu');
    // menu.classList.toggle('menu');
    menu.classList.add('inactive');

    categoriesSection.classList.remove('inactive');
    categoriesSection.classList.remove('categories');
    categoriesHomeBtn.classList.remove('inactive');
    categoriesList.classList.add('categoriesPreview-list');
    categoriesList.classList.remove('categories-list');
    categoriesList.classList.remove('scrolling');
    categoriesPreviewMovieList.classList.remove('inactive');
    categoriesBtn.classList.add('inactive');
}

function movieDetailsPage() {
    verDescripcion.classList.remove('inactive');
    detailSection.classList.remove('inactive');
    headerTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    searchFormBtn.classList.remove('inactive');
    searchFrmBtn.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    trendingSection.classList.remove('inactive');
    trendingSection.classList.add('trending');
    trendingSection.classList.remove('trendingPage');
    trendingHomeBtn.classList.add('inactive');
    trendingMoviesPreviewList.classList.add('scrolling');
    trendingMoviesPreviewList.classList.add('trendingPreview-movieList');
    trendingMoviesPreviewList.classList.remove('trendingPagePreview-movieList');
    trendingMoviesPreviewList.classList.add('scrolling');
    trendingBtn.classList.remove('inactive');
    relatedSection.classList.remove('inactive');
    relatedSection.classList.add('related');
    relatedSection.classList.remove('relatedPage');
    relatedHomeBtn.classList.add('inactive');
    relatedMoviesPreviewList.classList.add('scrolling');
    relatedMoviesPreviewList.classList.add('relatedPreview-movieList');
    relatedMoviesPreviewList.classList.remove('relatedPagePreview-movieList');
    relatedMoviesPreviewList.classList.add('scrolling');
    relatedBtn.classList.remove('inactive');
    categoriesSection.classList.remove('inactive');
    categoriesPreviewMovieList.classList.add('inactive');
    categoryHeaderTitle.classList.remove('inactive');
    categoriesSection.classList.add('categories');
    categoriesSection.classList.remove('categoriesPage');
    categoriesHomeBtn.classList.add('inactive');
    categoriesPreviewList.classList.remove('categoriesPreview-list');
    categoriesPreviewList.classList.add('categories-list');
    categoriesPreviewList.classList.add('scrolling');
    categoriesPreviewList.classList.remove('inactive');
    categoriesMoviesPreviewList.classList.add('scrolling');
    categoriesMoviesPreviewList.classList.add('categoriesPreview-movieList');
    categoriesMoviesPreviewList.classList.remove('categoriesPagePreview-movieList');
    categoriesMoviesPreviewList.classList.add('scrolling');
    categoriesBtn.classList.remove('inactive');
    popularSection.classList.remove('inactive');
    popularPreviewMovieList.classList.add('inactive');
    popularSection.classList.add('popular');
    popularSection.classList.remove('popularPage');
    popularHomeBtn.classList.add('inactive');
    popularPreviewMovieList.classList.remove('popularPreview-list');
    popularPreviewMovieList.classList.add('popular-list');
    popularPreviewMovieList.classList.add('scrolling');
    popularPreviewMovieList.classList.remove('inactive');
    popularMoviesPreviewList.classList.add('scrolling');
    popularMoviesPreviewList.classList.add('popularPreview-movieList');
    popularMoviesPreviewList.classList.remove('popularPagePreview-movieList');
    popularMoviesPreviewList.classList.add('scrolling');
    popularBtn.classList.remove('inactive');
    upcomingSection.classList.remove('inactive');
    upcomingPreviewMovieList.classList.add('inactive');
    upcomingSection.classList.add('upcoming');
    upcomingSection.classList.remove('upcomingPage');
    upcomingHomeBtn.classList.add('inactive');
    upcomingPreviewMovieList.classList.remove('upcomingPreview-list');
    upcomingPreviewMovieList.classList.add('upcoming-list');
    upcomingPreviewMovieList.classList.add('scrolling');
    upcomingPreviewMovieList.classList.remove('inactive');
    upcomingMoviesPreviewList.classList.add('scrolling');
    upcomingMoviesPreviewList.classList.add('upcomingPreview-movieList');
    upcomingMoviesPreviewList.classList.remove('upcomingPagePreview-movieList');
    upcomingMoviesPreviewList.classList.add('scrolling');
    upcomingBtn.classList.remove('inactive');

}

function trendsPage() {
    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.add('inactive');
    // verDescripcion.classList.add('inactive');

    trendingSection.classList.remove('inactive');
    trendingSection.classList.remove('trending');
    trendingSection.classList.add('trendingPage');
    trendingHomeBtn.classList.remove('inactive');
    trendingMoviesPreviewList.classList.remove('trendingPreview-movieList');
    trendingMoviesPreviewList.classList.add('trendingPagePreview-movieList');
    trendingMoviesPreviewList.classList.remove('scrolling');
    trendingBtn.classList.add('inactive');

    relatedSection.classList.add('inactive')

    categoriesSection.classList.add('inactive');

    popularSection.classList.add('inactive');

    upcomingSection.classList.add('inactive');

    footerSection.classList.remove('inactive');
}

function relatedPage() {

    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.add('inactive');
    // verDescripcion.classList.add('inactive');

    trendingSection.classList.add('inactive');
    trendingHomeBtn.classList.add('inactive');

    relatedSection.classList.remove('inactive');
    relatedSection.classList.remove('related');
    relatedSection.classList.add('relatedPage');
    relatedHomeBtn.classList.remove('inactive');
    relatedMoviesPreviewList.classList.remove('relatedPreview-movieList');
    relatedMoviesPreviewList.classList.add('relatedPagePreview-movieList');
    relatedMoviesPreviewList.classList.remove('scrolling');
    relatedBtn.classList.add('inactive');

    categoriesSection.classList.add('inactive');

    popularSection.classList.add('inactive');

    upcomingSection.classList.add('inactive');

    footerSection.classList.remove('inactive');
}

function categoriesPage() {
    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.add('inactive');
    // verDescripcion.classList.add('inactive');

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
    categoriesBtn.classList.add('inactive');

    popularSection.classList.add('inactive');

    upcomingSection.classList.add('inactive');

    footerSection.classList.remove('inactive');
}

function popularPage() {
    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.add('inactive');
    // verDescripcion.classList.add('inactive');

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
    popularBtn.classList.add('inactive');

    upcomingSection.classList.add('inactive');

    footerSection.classList.remove('inactive');
}

function upcomingPage() {

    headerSection.classList.remove('inactive');
    menuHamburger.classList.remove('inactive');
    headerTitle.classList.remove('inactive')
    menu.classList.add('inactive');
    searchForm.classList.add('inactive');

    menuHamburger.classList.toggle('open');
    menu.classList.toggle('respmenu');
    menu.classList.toggle('menu');
    menu.classList.add('inactive');

    detailSection.classList.add('inactive');
    // verDescripcion.classList.add('inactive');

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
    upcomingBtn.classList.add('inactive');

    footerSection.classList.remove('inactive');
}

getTrendingMoviesPreview();
getCategoriesPreview();
getCategoriesMoviesPreview();
getPopularMoviesPreview();
getUpcomingMoviesPreview();