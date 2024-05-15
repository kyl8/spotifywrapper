const CLIENT_ID = '3bd2ab29930c47f9b075f751522b6dd9';
const CLIENT_SECRET = '050c71323cc2460dbad988d3597ab559';
const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const data = new URLSearchParams();
data.append('grant_type', 'client_credentials');
const URL = 'https://api.spotify.com/v1';

// let access_token;

const config = {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
};

async function getAccessToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', config);
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function searchAll(query, access_token) {
    try {
        const response = await fetch(`${URL}/search?q=${encodeURIComponent(query)}&type=track`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        const data = await response.json();
        return data.tracks.items;
    } catch (error) {
        console.error('Error searching tracks:', error);
        throw error;
    }
}

/* async function searchAll(query, access_token) {
    try {
        fetch(`${URL}/search?q=${query}&type=track`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
        }
    }
    )
    .then(response => response.json())
    .then(data => {
        return data.tracks.items;
     });
    }
    catch (error) {
        return console.error(error);
    }
};*/


define("app", () => {
    return {
        getAcessToken: getAccessToken(),
        searchAll: searchAll(),
    }
});

/*getAccessToken().then((access_token) => {
    searchAll('hello', access_token);
});*/

