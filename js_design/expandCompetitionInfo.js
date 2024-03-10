const allCards = document.querySelectorAll('.info-card');

allCards.forEach((card) => {
    card.addEventListener('click', function(event) {
        event.stopPropagation();

        // Collapse any expanded card
        allCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                const otherDescription = otherCard.querySelector('.event-description');
                otherDescription.style.display = 'none';
            }
        });

        card.classList.toggle('expanded');
        const description = card.querySelector('.event-description');
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener('click', () => {
    allCards.forEach((card) => {
        card.classList.remove('expanded');
        const description = card.querySelector('.event-description');
        description.style.display = 'none';
    });
});