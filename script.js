const container = document.querySelector('.container');

function createDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  container.appendChild(dot);
}

for (let i = 0; i < 10; i++) {
  createDot();
}

let angle = 0;

function moveDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    const dotAngle = angle + (index * (360 / dots.length)); 
    dot.style.setProperty('--angle', dotAngle + 'deg');
  });
  angle += 1; 
  requestAnimationFrame(moveDots); 
}

moveDots(); 