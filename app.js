requirejs.config({
    baseUrl: '/js/lib/',
    paths: {
        'api': '../api/api',
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


