const url = 'https://api.worldnewsapi.com/search-news?text=crypto&language=en&sort=publish-time&sort-direction=ASC&number=10';
const apiKey = '990022febd8941e99194654a6fb37e9f';

fetch(url, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
