// Set the target date - October 11, 2025, 6:00 PM Bulgaria time
const targetDate = new Date('2025-10-11T18:00:00+03:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💜';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create floating Hello Kitty elements
function createKitty() {
    const kitty = document.createElement('div');
    kitty.classList.add('kitty-float');
    const kittyElements = ['🐱', '🎀', '💝'];
    kitty.textContent = kittyElements[Math.floor(Math.random() * kittyElements.length)];
    kitty.style.left = Math.random() * 100 + 'vw';
    kitty.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(kitty);

    setTimeout(() => {
        kitty.remove();
    }, 6000);
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Create hearts periodically
setInterval(createHeart, 800);

// Create Hello Kitty elements periodically
setInterval(createKitty, 1500);