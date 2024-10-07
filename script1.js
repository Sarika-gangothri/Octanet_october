// RadioBridge Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar color change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('bg-dark');
            document.querySelector('.navbar').classList.remove('bg-transparent');
        } else {
            document.querySelector('.navbar').classList.add('bg-transparent');
            document.querySelector('.navbar').classList.remove('bg-dark');
        }
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Message:', document.getElementById('message').value);

            // Clear the form
            contactForm.reset();

            // Show a success message (you can replace this with a more sophisticated notification)
            alert('Thank you for your message. We will get back to you soon!');
        });
    }
});