const colors = ["#cbd5e1", "#e9d5ff", "#bfdbfe", "#d1d5db", "#fefcbf", "#a5b4fc"];
let currentIndex = 0;

document.getElementById("colorBtn").addEventListener("click", function() {
    for (let i = 0; i < colors.length; i++) {
        if (i === currentIndex) {
            document.body.style.backgroundColor = colors[i];
        }
    }
    currentIndex++;

    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
});
