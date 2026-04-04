let modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        modeBtn.innerText = "☀ Light Mode";
    } else {
        modeBtn.innerText = "🌙 Dark Mode";
    }

});

console.log("JavaScript Connected Successfully!");