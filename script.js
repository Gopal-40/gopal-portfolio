document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            menuToggle.textContent =
                navLinks.classList.contains("active") ? "✕" : "☰";
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
            });
        });
    }


    // =========================
    // DARK / LIGHT MODE
    // =========================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light");
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");

            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );

            themeToggle.textContent =
                isLight ? "☀️" : "🌙";
        });
    }


    // =========================
    // COPYRIGHT YEAR
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // CONTACT FORM
    // =========================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert(
                `Thank you, ${name}! Your message has been received.`
            );

            contactForm.reset();
        });
    }

});