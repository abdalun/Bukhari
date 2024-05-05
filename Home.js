let slideIndex = 0; // Initialize slide index

// Function to display the next image
function showNextSlide() {
    const slides = document.querySelectorAll('.slider img');
    slides[slideIndex].style.display = 'none'; // Hide current slide
    slideIndex = (slideIndex + 1) % slides.length; // Increment slide index
    slides[slideIndex].style.display = 'block'; // Display next slide
}

// Function to start automatic sliding
function startSlideShow() {
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Start automatic sliding when the page loads
window.onload = startSlideShow;