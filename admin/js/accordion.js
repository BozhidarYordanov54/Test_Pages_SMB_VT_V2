document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.querySelector('.open-btn');

    openButton.addEventListener('click', function() {
        var articleContent = document.querySelector('.article-content-wrapper');
        articleContent.classList.toggle('open');
        if(articleContent.classList.contains('open')) {
            openButton.innerHTML = 'Свиване';
        }
        else {
            openButton.innerHTML = 'Разгъване';
        }
    });
});