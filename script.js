// DARK MODE TOGGLE
let modeBtn = document.getElementById("modeBtn");

if (modeBtn) {
    modeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeBtn.innerText = "☀ Light Mode";
        } else {
            modeBtn.innerText = "🌙 Dark Mode";
        }
    });
}

// BOOKING FORM MESSAGE (no preventDefault)
let bookingForm = document.getElementById("bookingForm");
let result = document.getElementById("result");

if (bookingForm) {
    bookingForm.addEventListener("submit", function () {
        result.innerText = "Booking sent successfully!";
    });
}

// CONTACT FORM MESSAGE (no preventDefault)
let contactForm = document.getElementById("contactForm");
let contactResult = document.getElementById("contactResult");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        contactResult.innerText = "Message sent successfully!";
    });
}

console.log("JavaScript Connected Successfully!");
