requirejs.config({
    baseUrl: '/js/lib/',
    paths: {
        'app': '../api',
        'fontawesome': './icons/fontawesome.min',
        'axios': './axios.min',
        'domReady': './domReady'
    },
    shim: {
        'fontawesome': {
            deps: ['./icons/solid.min']
        }
    },
});

requirejs(['/js/script.js'], () => {});

require(['fontawesome'], function () {
    console.log('font awesome loaded');
  })

require(['axios'], function () {
    console.log('axios loaded');
});

require (['domReady'], function () {
    console.log('domReady loaded');
    clearSearch();
    searchBar();
});
