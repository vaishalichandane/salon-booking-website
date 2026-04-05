// DARK MODE TOGGLE
let modeBtn = document.getElementById("modeBtn");

if (modeBtn) {
    modeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        // Change button text
        if (document.body.classList.contains("dark-mode")) {
            modeBtn.innerText = "☀ Light Mode";
        } else {
            modeBtn.innerText = "🌙 Dark Mode";
        }

    });
}

// BOOKING FORM HANDLING
let form = document.getElementById("bookingForm");
let result = document.getElementById("result");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        result.innerText = "Thank you! We will contact you soon.";
        form.reset();
    });
}

console.log("JavaScript Connected Successfully!");
// CONTACT FORM
let contactForm = document.getElementById("contactForm");
let contactResult = document.getElementById("contactResult");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        contactResult.innerText = "Message sent successfully!";
        contactForm.reset();
    });
}