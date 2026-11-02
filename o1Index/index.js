
const themeBtn = document.getElementById("themeBtn");

// Check whether the button exists
if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        // Toggle dark mode
        document.body.classList.toggle("dark");

        // Change button icon
        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });

}
