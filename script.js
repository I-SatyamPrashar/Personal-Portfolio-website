document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinksAll = document.querySelectorAll(".nav-link");
    const contactForm = document.getElementById("contact-form");

    // Hamburger menu functionality
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinksAll.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });

                // Remove active class from all links and add to the current one
                navLinksAll.forEach(l => l.classList.remove("active"));
                this.classList.add("active");

                // Close the mobile navigation after clicking a link
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                }
            }
        });
    });

    // Contact form submission handling
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill out all fields.");
                return;
            }

            alert("Message sent successfully!");
            this.reset();
        });
    }
});