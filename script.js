// Function to hide the loader and restore scrolling
function hideLoader() {
    const loader = document.getElementById('loader');

    // Start fading out the loader
    loader.style.opacity = '0';

    // Wait for the opacity transition to complete
    setTimeout(function() {
        // Hide the loader completely
        loader.style.display = 'none';

        // Restore scrolling after loader is hidden
        document.body.style.overflow = 'auto';
    }, 500); // Wait for the 500ms transition to finish
}

// Wait for the page to fully load
window.onload = function() {
    // Disable scrolling while loader is visible
    document.body.style.overflow = 'hidden';

    // Hide the loader after 3 seconds
    setTimeout(hideLoader, 2000); // Initial delay (3000ms or 3 seconds)
};