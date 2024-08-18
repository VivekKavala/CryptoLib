const cryptoPricesContainer = document.querySelector('.prices');


(() => {
    fetch('https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjFjMmM4NTk2LWNiY2QtNDM0OS1iMzg3LWNkMmYzOGRjN2RmZSIsIm9yZ0lkIjoiNDA0MjAwIiwidXNlcklkIjoiNDE1MzM0IiwidHlwZUlkIjoiOWMwNjkzMDYtYzc2Yy00NTMyLWIyZmYtNjY3MzY5ZWQxOTRiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMyNjQ5MjgsImV4cCI6NDg3OTAyNDkyOH0.uasip_eYvKTscfE-DZDykZ-7DAU6E7isZx9r1hMGGSw' // Replace with your actual API key
        }
    })
        .then(response => response.json())
        .then(data => {

            let tableRows = '';
            data.forEach(item => {
                tableRows += `
                <tr>
                        <td>${item.market_cap_rank}</td>
                        <td class="coin-data-1">
                            <div class="coin-d">
                                <img class="coin-image-1"
                                    src="${item.logo}"
                                    alt="">
                                <div class="coin-name-d">
                                    <a href="/crypto-currencies/${formatString(item.name)}">
                                        ${item.name}
                                    </a>
                                    <span class="t-txt upper">
                                        ${item.symbol}
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td class="bold">$${addCommas(item.usd_price)}</td>
                        <td class="bold ${item.usd_price_24hr_percent_change > 0 ? "text-green" : "text-red"}">${Number(item.usd_price_24hr_percent_change).toFixed(2)}%</td>
                        <td>${formatNumber(item.circulating_supply)}</td>
                        <td>${formatNumber(item.total_supply)}</td>
                    </tr>`

            });



            cryptoPricesContainer.innerHTML = `
            <table class="chakra-table t-txt">
                    <thead>
                        <tr class="bold">
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>24Hr Change</td>
                            <td>Current Supply</td>
                            <td>Total Supply</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            `

        })
        .catch(error => console.error('Error:', error));
})()

function formatNumber(number) {
    if (number >= 1e9) {
        return (number / 1e9).toFixed(2) + ' B';
    } else if (number >= 1e6) {
        return (number / 1e6).toFixed(2) + ' M';
    } else {
        return Number(number).toFixed(2).toLocaleString();
    }
}



function formatString(input) {
    // Remove all special characters except alphanumeric and spaces
    let cleanedString = input.replace(/[^a-zA-Z0-9\s]/g, '');

    // Replace spaces with hyphens
    let formattedString = cleanedString.replace(/\s+/g, '-');

    let lowerCaseString = formattedString.toLowerCase();

    return lowerCaseString;
}

function addCommas(number) {
    // Convert the number to a string
    let str = number.toString();

    // Split the string into integer and decimal parts
    let parts = str.split('.');

    // Add commas to the integer part using regular expression
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Join integer and decimal parts, if any
    return parts.join('.');
}

