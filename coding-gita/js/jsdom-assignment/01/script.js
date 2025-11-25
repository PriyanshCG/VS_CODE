const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function() {
    paragraph.textContent = 'The text has been changed!';
});

