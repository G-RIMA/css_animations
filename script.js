const colorToggle = document.getElementById('color-toggle');
const body = document.body;

colorToggle.addEventListener('change', () => {
    if (colorToggle.checked) {
        body.style.backgroundColor = '#333'; // Change to desired color
    } else {
        body.style.backgroundColor = '#fff'; // Change to default color
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}






