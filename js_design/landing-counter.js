document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 300; // Adjust the speed as necessary

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const updateCount = () => {
            const current = +counter.innerText.replace(/\D/g, ''); // Remove any non-digit characters
            const increment = target / speed;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment) + "+";
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
});
