const button = document.getElementById('toggleButton');
const paragraph = document.getElementById('toggleParagraph');

button.addEventListener('click', () => {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        paragraph.style.display = 'none';
        button.textContent = 'Show';
    }
});
