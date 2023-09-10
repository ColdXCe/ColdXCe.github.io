const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});