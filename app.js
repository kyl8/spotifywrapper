requirejs.config({
    baseUrl: '/js/lib/',
    paths: {
<<<<<<< HEAD
        'api': '../api/api',
=======
        'app': '../api',
>>>>>>> 43306105446ffcf633c0aa8224bdd58021a5be82
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

require(['/js/script.js'], () => {
    console.log("main script loaded");
});

require(['fontawesome'], function () {
    console.log('font awesome loaded');
  })


<<<<<<< HEAD
=======
require (['domReady'], function () {
    console.log('domReady loaded');
    clearSearch();
    searchBar();
});
>>>>>>> 43306105446ffcf633c0aa8224bdd58021a5be82
