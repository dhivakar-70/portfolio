document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for smaller screens
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Form submission handling
    const form = document.querySelector('form');
    const notification = document.querySelector('.notification');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Example validation (you can add more complex validation here)
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (name && email && message) {
            // Simulate form submission
            setTimeout(() => {
                showNotification('Your message has been sent successfully!', 'success');
                form.reset();
            }, 500);
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });

    // Show notification
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.style.display = 'block';

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    // Handle typing animation (optional improvement)
    const typingText = document.querySelector('.typing-text span::before');

    if (typingText) {
        const words = ["Fullstack Developer", "UI/UX Developer", "Web Designer", "IoT with Automation", "Artificial Intelligence", "Video Editor"];
        let index = 0;

        function typeWords() {
            typingText.textContent = words[index];
            index = (index + 1) % words.length;
            setTimeout(typeWords, 3000); // Change word every 3 seconds
        }

        typeWords();
    }
});
