document.addEventListener("DOMContentLoaded", function () {

    const hireButton = document.querySelector(".hire-btn");

    if (hireButton) {
        hireButton.addEventListener("click", function () {
            console.log("Hire Me button clicked!");
        });
    }

});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});