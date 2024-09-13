const dots = document.querySelectorAll('.dot');
const video = document.getElementById('background-video');
const image = document.getElementById('background-image');
const text = document.querySelector('#text')

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
    dot.addEventListener('click', function () {
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

const menuItems = document.querySelectorAll('.dot');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(el => el.classList.remove('active')); // Remove active from all
        this.classList.add('active'); // Add active to the clicked item
    });
});
///////////////////////////////// Change text //////////////////////
const texts = [
    "Tomb Raider, known as Lara Croft: Tomb Raider from 2001 to 2008, is a media franchise that originated with an action-adventure video game series created by British video game developer Core Design. The franchise is currently owned by CDE Entertainment; it was formerly owned by Eidos Interactive, then by Square Enix Europe after Square Enix's acquisition of Eidos in 2009 until Embracer Group purchased the intellectual property alongside Eidos in 2022.",
    "Lara Croft is the main protagonist and playable character of the video game series. She travels around the world in search of many forgotten artefacts and locations, frequently connected to supernatural powers.While her biography has changed throughout the series, her shared traits are her origins as the only daughter and heir of the aristocratic Croft family.She is portrayed as intelligent, athletic, elegant, fluent in multiple languages, and determined to fulfil her own goals at any cost. She has brown eyes and brown hair worn in a braid or ponytail. ",
    "Shadow of the Tomb Raider is a 2018 action-adventure game developed by Eidos-Montréal and published by Square Enix's European subsidiary. The game is the sequel to Rise of the Tomb Raider and is the twelfth mainline entry in the Tomb Raider series, as well as the third and final entry of the Survivor trilogy."
]
function changeText(index) {
    const textElement = document.getElementById('text');
    textElement.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before changing text
    setTimeout(() => {
      textElement.innerText = texts[index];
      textElement.classList.remove('fade-out');
    }, 500); // This should match the duration of the CSS transition
  }
document.getElementById('text').innerText = texts[0];

const buttons = [
    document.getElementById('dots1'),
    document.getElementById('dots2'),
    document.getElementById('dots3')
]

buttons.forEach((button, index) => {
    button.addEventListener('click', () => changeText(index));
  });