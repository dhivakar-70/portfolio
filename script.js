/*let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}*/

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.education-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});


function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mdhivakarmdhivakar@gmail.com').value;
    const message = document.getElementById('message').value;

    // Replace this with your email sending logic (e.g., using an email API or backend)
    const emailSent = Math.random() > 0.5; // Simulating email success or failure

    const notification = document.getElementById('notification');
    if (emailSent) {
        notification.textContent = 'Your message has been sent successfully!';
        notification.className = 'notification success';
    } else {
        notification.textContent = 'There was an error sending your message. Please try again later.';
        notification.className = 'notification error';
    }

    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);

    // Reset the form
    document.getElementById('contact-form').reset();
}
