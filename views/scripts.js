// Fetch the content of another HTML file
fetch('./components/navbar.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(html => {
    // Inject the fetched HTML content into the div
    document.getElementById('navbar').innerHTML = html;
})
.catch(error => console.error('There was a problem fetching the content:', error));