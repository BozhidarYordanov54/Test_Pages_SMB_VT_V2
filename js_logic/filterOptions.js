function filterOptions() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('town');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.options');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
            ul.style.display = 'none';
        } else {
            li[i].style.display = 'none';
            ul.style.display = 'initial';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var options = document.querySelectorAll('.options li');
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            var townValue = this.innerHTML; // Get the inner HTML of the <li> element
            townValue = townValue.charAt(0).toUpperCase() + townValue.slice(1);
            document.getElementById('town').value = townValue;
            document.querySelector('.options').style.display = 'none';
        });
    });
});
