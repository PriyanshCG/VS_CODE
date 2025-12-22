const img = document.getElementById('myImage');
const btn1 = document.getElementById('btnImage1');
const btn2 = document.getElementById('btnImage2');

btn1.addEventListener('click', () => {
    img.src = 'https://idsb.tmgrup.com.tr/ly/uploads/images/2024/06/30/334647.jpg';
    img.alt = 'Image 1';
});

btn2.addEventListener('click', () => {
    img.src = 'https://statico.sportskeeda.com/editor/2025/03/78ef8-17415476855562-1920.jpg';
    img.alt = 'Image 2';
});
