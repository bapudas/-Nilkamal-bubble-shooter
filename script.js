// Get elements from the HTML
const gameBoard = document.getElementById('game-board');
const shooter = document.getElementById('shooter');

// Shooter position
let shooterX = 140; // Initial position (middle of the game container)
const shooterSpeed = 10; // Speed of the shooter movement

// Move the shooter left and right
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && shooterX > 0) {
        shooterX -= shooterSpeed; // Move left
    } else if (event.key === 'ArrowRight' && shooterX < 280) {
        shooterX += shooterSpeed; // Move right
    }
    shooter.style.left = `${shooterX}px`; // Update shooter position
});

// Shoot a bubble
function shootBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${shooterX + 5}px`; // Position bubble at the shooter
    bubble.style.bottom = '50px'; // Start just above the shooter
    gameBoard.appendChild(bubble);

    // Move the bubble upwards
    let bubbleY = 50;
    const bubbleInterval = setInterval(() => {
        bubbleY += 5; // Move the bubble up
        bubble.style.bottom = `${bubbleY}px`;

        // Remove bubble when it goes off the screen
        if (bubbleY >= 430) {
            clearInterval(bubbleInterval);
            gameBoard.removeChild(bubble);
        }
    }, 50); // Adjust speed of the bubble
}

// Shoot when spacebar is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        shootBubble();
    }
});
