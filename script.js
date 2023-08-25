const colorToggle = document.getElementById('color-toggle');
const body = document.body;

colorToggle.addEventListener('change', () => {
    if (colorToggle.checked) {
        body.style.backgroundColor = '#333'; // Change to desired color
    } else {
        body.style.backgroundColor = '#fff'; // Change to default color
    }
});

const slider = document.querySelector('.slider');

slider.addEventListener('input', () => {
    const value = slider.value;
    const hue = value * 1.2; // Adjust this factor for better color variation
    body.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
});