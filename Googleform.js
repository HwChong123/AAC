// Function to randomly choose a Google Form URL
function getRandomFormUrl() {
    var formUrls = [
        'https://your-first-form-url-here',
        'https://your-second-form-url-here'
    ];
    var randomIndex = Math.floor(Math.random() * formUrls.length);
    return formUrls[randomIndex];
}

// Redirect to the randomly chosen Google Form
window.location.href = getRandomFormUrl();
