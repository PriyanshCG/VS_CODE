   const redBtn = document.getElementById('redBtn');
    const greenBtn = document.getElementById('greenBtn');
    const blueBtn = document.getElementById('blueBtn');

    // Add click event listeners to change background color
    redBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = 'red';
    });

    greenBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = 'green';
    });

    blueBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = 'blue';
    });
