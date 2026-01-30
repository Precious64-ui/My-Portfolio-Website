const links = document.querySelectorAll('nav a'); // selects all navbar links
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // prevents default jump
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[i].style.display = 'block';
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

setInterval(nextSlide, 3000); // changes slide every 3 seconds
showSlide(index);

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const email = form.email.value;
    const message = form.message.value;
    if (!email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
    }
});

const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});