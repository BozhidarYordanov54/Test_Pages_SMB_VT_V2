var isAutofilled = false; // Flag to track autofill

document.addEventListener('DOMContentLoaded', function() {
    var options = document.querySelectorAll('.options li');
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            bindOption(this);
            isAutofilled = true; // Set flag to true when option is clicked
        });
    });

    var townInput = document.getElementById('town');
    townInput.addEventListener('input', function(event) {
    var inputText = this.value.trim().toUpperCase();
        if (event.inputType === 'insertText') {
            // Check if input is coming from user
            if (inputText === '') {
                resetBinding(); // Call resetBinding function when input is empty
            } else {
                filterOptions();
            }
        }
    });

    townInput.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            // Check if backspace key is pressed
            document.getElementById('town').value = "";
        }
    });

    var xMark = document.querySelector('.fa-xmark');
    if (xMark) {
        xMark.addEventListener('click', function() {
            document.getElementById('town').value = "";
            document.querySelector(".search-box").classList.remove("has-content");
            resetBinding();
        });
    }
});

function filterOptions() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('town');
    filter = input.value.trim().toUpperCase();
    ul = document.querySelector('.options');
    li = ul.getElementsByTagName('li');
    var visibleOptions = [];
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (filter === '') {
            li[i].style.display = '';
            ul.style.display = 'none';
            visibleOptions.push(li[i]);
        } else if (a.textContent.trim().toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
            ul.style.display = 'none';
            visibleOptions.push(li[i]);
        } else {
            li[i].style.display = 'none';
            ul.style.display = 'initial';
        }
    }

    if (!isAutofilled && visibleOptions.length === 1) {
        bindOption(visibleOptions[0]);
    }
}

function bindOption(option) {
    var options = document.querySelectorAll('.options li');
    options.forEach(function(opt) {
        opt.classList.remove('selected');
    });
    option.classList.add('selected');
    var townInput = document.getElementById('town');
    var townValue = option.getAttribute('data-value');
    var townName = option.textContent.trim();
    townInput.value = townName;
    document.querySelector('.fa-xmark').style.fontSize = '16px';
    document.querySelector('.options').style.display = 'none';
    townInput.setAttribute('data-value', townValue);
    

    // Set isAutofilled to true
    isAutofilled = false;

    // Disable typing when autofilled
    if (!isAutofilled) {
        townInput.disabled = true;
        
    } else {
        townInput.disabled = false;
    }
}

function resetBinding() {
    document.getElementById('town').value = '';
    document.getElementById('town').removeAttribute('data-value');
    document.getElementById('town').disabled = false;
    document.querySelector('.fa-xmark').style.fontSize = '0';
}
