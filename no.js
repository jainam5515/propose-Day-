document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.getElementById("noButton") || document.getElementById("noButton2") || document.getElementById("noButton3");
    
    if (noButton) {
        noButton.addEventListener("mouseover", moveNoButton);
        noButton.addEventListener("click", (event) => {
            event.preventDefault();
            moveNoButton();
        });
    }
});

// Function to Move the "No" Button Randomly
function moveNoButton() {
    let noButton = document.getElementById("noButton") || document.getElementById("noButton2") || document.getElementById("noButton3");
    let x = Math.random() * (window.innerWidth - 100); 
    let y = Math.random() * (window.innerHeight - 50);
    
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Show Floating Hearts on Click
function showHeart(x, y) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
