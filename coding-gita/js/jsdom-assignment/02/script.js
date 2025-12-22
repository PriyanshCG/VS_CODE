const button = document.getElementById('styleButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
    paragraph.style.color = 'white';
    paragraph.style.backgroundColor = 'red';
    paragraph.style.fontSize = '40px';
});
