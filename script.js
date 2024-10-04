const letterElement = document.getElementById('letter');
const scoreElement = document.getElementById('score');

let score = 0;
let currentLetter = '';

function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

function updateLetter() {
    currentLetter = getRandomLetter();
    letterElement.textContent = currentLetter;
}

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey === currentLetter) {
        score += 1;
        alert('Правильно!');
    } else {
        score = Math.max(0, score - 10);
        alert('Неправильно! Правильная буква была: ' + currentLetter);
    }
    scoreElement.textContent = score;
    updateLetter();
});

// Инициализация
updateLetter();
