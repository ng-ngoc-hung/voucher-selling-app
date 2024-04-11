// Fetch the content of navbar HTML file
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

// Fetch the content of footer HTML file
fetch('./components/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(html => {
    // Inject the fetched HTML content into the div
    document.getElementById('footer').innerHTML = html;
})
.catch(error => console.error('There was a problem fetching the content:', error));