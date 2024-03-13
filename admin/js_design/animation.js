// Create a div element to represent the first animation
const animationDiv = document.createElement('div');
animationDiv.style.position = 'fixed';
animationDiv.style.top = '0';
animationDiv.style.left = '0';
animationDiv.style.width = '100%';
animationDiv.style.height = '100vh';
animationDiv.style.backgroundColor = '#93948E';

// Add the first animation div to the document body
document.body.appendChild(animationDiv);

// Animate the first div
animationDiv.animate([
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0)' },
], {
    duration: 2000,
    easing: 'ease-in-out',
    fill: 'forwards'
});

// Start typing animation after a delay
setTimeout(() => {
    startTypingAnimation();
}, 2000); // Adjust the delay as needed

// Remove the first animation div after the animation completes
animationDiv.addEventListener('animationend', () => {
    animationDiv.remove();
});

// Create a div element to represent the second animation
const animationDivTwo = document.createElement('div');
animationDivTwo.style.position = 'fixed';
animationDivTwo.style.top = '0';
animationDivTwo.style.left = '0';
animationDivTwo.style.width = '100%';
animationDivTwo.style.height = '100%';
animationDivTwo.style.backgroundColor = '#1B5A6B';
animationDivTwo.style.display = 'none';

// Add the second animation div to the document body
document.body.appendChild(animationDivTwo);

// Create and append the text container
const textContainer = document.createElement('div');
textContainer.style.position = 'fixed';
textContainer.style.top = '50%';
textContainer.style.left = '50%';
textContainer.style.transform = 'translate(-50%, -50%)';
textContainer.style.color = 'black';
textContainer.style.fontSize = '24px';
textContainer.style.fontFamily = 'Arial, sans-serif';
textContainer.style.textAlign = 'center';
textContainer.style.opacity = '0'; // Initial opacity set to 0

// Add the text container to the document body
document.body.appendChild(textContainer);

// Function to start the second animation and typing animation
function startAnimation() {
    // Show the second animation div
    animationDivTwo.style.display = 'block';
    animationDivTwo.style.height = '200%';

    // Animate the second div
    animationDivTwo.animate([
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(100%)' }
    ], {
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
    // Remove the first div from the screen
    animationDiv.animate([
        { transform: 'translateX(100%)' },
    ], {
        duration: 300,
        delay: 700,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Remove the second animation div after the animation completes
    animationDivTwo.addEventListener('animationend', () => {
        animationDivTwo.remove();
    });
}

function typeText(text, duration) {
    let index = 0;
    const typingInterval = setInterval(() => {
        textContainer.textContent = text.substring(0, index);
        index++;

        if (index > text.length) {
            clearInterval(typingInterval);
            
            // Optionally, start the deletion after a delay
            setTimeout(() => {
                startTextDeletion(text, duration);
            }, 1000); // Adjust the delay as needed
        }
    }, duration / text.length);
}

// Function to start the typing animation
function startTypingAnimation() {
    // Set the opacity to 1 to make the text visible
    textContainer.style.opacity = '1';
    // Start typing animation with the desired text and duration
    typeText('Здравейте, Паунка', 900); // Adjust the text and duration as needed

    const imageElement = document.createElement('img');
    imageElement.src = 'images/Logo-White.png'; // Replace with the actual path to your image
    imageElement.style.width = '100px'; // Adjust the width as needed
    imageElement.style.height = '100px'; // Adjust the height as needed
    imageElement.style.position = 'fixed';
    imageElement.style.top = '30%'; // Adjust the top position as needed
    imageElement.style.left = '50%'; // Adjust the left position as needed
    imageElement.style.transform = 'translateX(-50%)'; // Center the image horizontally
    imageElement.style.opacity = '1'; // Initial opacity set to 0
    imageElement.style.transition = 'opacity 0.2s ease-in-out';

    // Append the image to the document body
    document.body.appendChild(imageElement);
}

function startTextDeletion(text, duration) {
    let index = text.length;
    const deletionInterval = setInterval(() => {
        textContainer.textContent = text.substring(0, index);
        index--;

        if (index < 0) {
            clearInterval(deletionInterval);
            // Optionally, you can remove the text container after a delay
            setTimeout(() => {
                removeImage();
                textContainer.remove();
            }, 200); // Adjust the delay as needed
        }
    }, duration / text.length);
}

function removeImage() {
    const imageElement = document.querySelector('img');
    if (imageElement) {
        // Optionally, you can add a smooth disappearance transition here
        imageElement.style.transition = 'opacity 0.2s ease-in-out';
        imageElement.style.opacity = '0';

        // Remove the image after the transition completes
        imageElement.addEventListener('transitionend', () => {
            imageElement.remove();
        });
    }
}
// Delay the entire animation by 4000 milliseconds
setTimeout(startAnimation, 4000);
