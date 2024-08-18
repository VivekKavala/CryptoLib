fetch('https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap', {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjFjMmM4NTk2LWNiY2QtNDM0OS1iMzg3LWNkMmYzOGRjN2RmZSIsIm9yZ0lkIjoiNDA0MjAwIiwidXNlcklkIjoiNDE1MzM0IiwidHlwZUlkIjoiOWMwNjkzMDYtYzc2Yy00NTMyLWIyZmYtNjY3MzY5ZWQxOTRiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjMyNjQ5MjgsImV4cCI6NDg3OTAyNDkyOH0.uasip_eYvKTscfE-DZDykZ-7DAU6E7isZx9r1hMGGSw' // Replace with your actual API key
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));