const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');

const secretCode = 'DIYA';
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();
    
    if (userInput === secretCode) {
        resultDiv.innerHTML = '💕 Access Granted, My Love! 💕';
        window.location.href = nextPageUrl;
    } else {
        resultDiv.innerHTML = '💔 Access Denied! You are not my cutie!';
    }
    
    showHeart();
});

// Floating Heart Animation
function showHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
