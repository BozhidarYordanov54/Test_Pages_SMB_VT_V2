const button = document.querySelector('.btn-add-child');
const elementToExpand = document.querySelector('.add-child-form');
const table = document.querySelector('.responsive-table'); // replace with your table selector

// Add event listener to the button
button.addEventListener('click', () => {
    if (elementToExpand.classList.contains('active')) {
        // Close the form element
        closeForm();
    } else {
        // Expand the form element
        expandForm();
    }
});

function expandForm() {
    // Add the "active" class to the element
    elementToExpand.classList.add('active');
    // Hide the table
    table.classList.add('hide');
    button.innerHTML = "Затвори формата";
}

function closeForm() {
    // Remove the "active" class from the element
    elementToExpand.classList.remove('active');
    // Show the table
    table.classList.remove('hide');
    button.innerHTML = "Добави ученик";
}