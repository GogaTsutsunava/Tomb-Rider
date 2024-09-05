const dots = document.querySelectorAll('.dot');
const video = document.getElementById('background-video');
const image = document.getElementById('background-image');

// Function to handle transitions between media (video/image)
function applyFadeTransition(showElement, hideElement, newSrc, type) {
    // Ensure both elements are not in mid-animation
    showElement.classList.remove('fade-in', 'fade-out');
    hideElement.classList.remove('fade-in', 'fade-out');

    // Apply fade-out to the currently visible element
    hideElement.classList.add('fade-out');

    // Wait for the fade-out animation to complete (500ms)
    setTimeout(() => {
        // Hide the old element and stop video if necessary
        hideElement.style.display = 'none';
        if (type === 'video') {
            showElement.src = `./Images/${newSrc}`;
            showElement.style.display = 'block';
            showElement.play();
        } else if (type === 'image') {
            showElement.src = `./Images/${newSrc}`;
            showElement.style.display = 'block';
        }

        // After source is updated, apply fade-in
        showElement.classList.add('fade-in');
    }, 50); // This timing matches the fade-out animation duration
}

// Event listener for each dot
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const src = this.getAttribute('data-src');

        // If dot corresponds to a video
        if (type === 'video') {
            applyFadeTransition(video, image, src, 'video');
        }
        // If dot corresponds to an image
        else if (type === 'image') {
            applyFadeTransition(image, video, src, 'image');
        }
    });
});
