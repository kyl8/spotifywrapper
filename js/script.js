<<<<<<< HEAD
=======
requirejs(['/js/api/api.js'], () => {console.log('api.js loaded')}); 

>>>>>>> 43306105446ffcf633c0aa8224bdd58021a5be82
let access_token;

// populating arrays
require(['api'], async function getTrack(name) {
    let trackNames = [];
    let artistNames = [];
    let imgURLs = [];
    let previewURLs = [];

    try {
        access_token = await getAccessToken();
        const trackName = await searchAll(name, access_token);
        trackName.forEach(obj => {
            trackNames.push(obj.name);
            artistNames.push(obj.artists[0].name);
            imgURLs.push(obj.album.images[0].url);
            previewURLs.push(obj.preview_url);
        });
    } catch (error) {
        console.log(`error: ${error}`);
    }
    return { trackNames, artistNames, imgURLs, previewURLs }; 
}); 

require(['domReady'], function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
            console.log("searchbar not empty");
            clearButton.style.opacity = '1';
            clearButton.disabled = false;
        } else {
            console.log("searchbar empty");
            clearButton.style.opacity = '0';
            clearButton.disabled = true;
        }
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        clearButton.style.opacity = '0';
        clearButton.disabled = true;
        console.log("searchbar empty");
    });
    
});

/* if something is entered in the search bar, create a list to display tracks and waits 
for click event to play the song (list limit 6) */
function searchBar() {
    let query;
    const searchInput = document.getElementById('searchInput');

    //search event
    /*searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
            query = searchInput.value;
            getTrack(query).then((results) => {
                console.log(results);
            }); 
        } else {
            console.log("nothing typed");
        }
    });*/ 

    //click event
    searchInput.addEventListener('click', () => {
        query = searchInput.value;
        console.log(query);
    });
}

getTrack('hello');