let noButtonMoved = false;

// Handle Button Click
document.querySelectorAll(".btn a").forEach((button) => {
    button.onclick = (event) => {
        event.preventDefault();

        if (event.target.id.includes("noButton")) {
            moveNoButton(event.target);
            noButtonMoved = true;
        }

        if (!noButtonMoved) {
            swapButtons();
        }

        showHeart(event.clientX, event.clientY);
    };
});

// Move the "No" Button Randomly
function moveNoButton(button) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Swap Button Texts
function swapButtons() {
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;

    let tempHref = yesButton.href;
    yesButton.href = noButton.href;
    noButton.href = tempHref;
}

// Show Heart Animation
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
