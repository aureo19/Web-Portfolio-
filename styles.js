(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            
            // Smooth scrolling to the section
            document.getElementById(button.dataset.id).scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();




document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const subjectInput = document.querySelector('input[type="text"]');
        const messageTextarea = document.querySelector('textarea');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (subjectInput.value.trim() === '') {
            alert('Please enter the subject.');
            return;
        }

        if (messageTextarea.value.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        // If all fields are valid, submit the form
        // You can add your submission logic here, such as sending the form data to a server

        // For demonstration purposes, let's display an alert message
        alert('Message submitted successfully!');

        // Reset the form after submission
        form.reset();
    });
});