const dots = document.querySelectorAll('.dot');
const video = document.getElementById('background-video');
const image = document.getElementById('background-image');

// Set initial video source
video.src = `./Images/Shadow Of The Tomb Raider - Official Trailer.mp4`;

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const src = this.getAttribute('data-src');
        
        if (type === 'video') {
            video.src = `./Images/${src}`;
            video.style.display = 'block';
            image.style.display = 'none';
            video.play();
        } else if (type === 'image') {
            image.src = `./Images/${src}`;
            image.style.display = 'block';
            video.style.display = 'none';
        }
    });
});