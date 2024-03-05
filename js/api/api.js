const CLIENT_ID = '3bd2ab29930c47f9b075f751522b6dd9';
const CLIENT_SECRET = '050c71323cc2460dbad988d3597ab559';
const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const URL = 'https://api.spotify.com/v1';

// let access_token;

const config = {
    headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

define(async function getAcessToken() {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', config);
        return response.data.access_token;
        
    }
    catch (error) {
        return error.toJSON();
    }
});

define(async function searchAll(query, access_token) {
    try {
        const response = await axios.get(`${URL}/search?q=${query}&type=track`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
        }
    }
    );
        return response.data.tracks.items;
    }
    catch (error) {
        return error;
    }
});
