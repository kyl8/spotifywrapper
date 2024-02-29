const api = require('./api.js');

let access_token;
let trackNames = [];
let artistNames = [];
let imgURLs = [];
let previewURLs = [];

// populating arrays
async function getTrack(name) {
    try {
        access_token = await api.getAcessToken();
        const trackName = await api.searchAll(name, access_token);
        trackName.forEach(obj => {
            trackNames.push(obj.name);
            artistNames.push(obj.artists[0].name);
            imgURLs.push(obj.album.images[0].url);
            previewURLs.push(obj.preview_url);
        });
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

function clearSearch() {
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
    
}

function searchBar() {

}

/* getTrack('Summertime Sadness').then(() =>
{
    console.log(trackNames);
    console.log(artistNames);
    console.log(imgURLs);
    console.log(previewURLs);

});
*/