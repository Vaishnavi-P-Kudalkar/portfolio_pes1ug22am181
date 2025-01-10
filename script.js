// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Add animation to project cards when they come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project').forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px)';
    project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(project);
});

// Form validation for contact form (if you add one later)
function validateForm(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            event.preventDefault();
        }
    }
}

// Add this to your contact form when you create one
// const form = document.querySelector('form');
// if (form) {
//     form.addEventListener('submit', validateForm);
// }