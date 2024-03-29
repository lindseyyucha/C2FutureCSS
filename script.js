
const dots = document.querySelectorAll('.dot');
let angle = 0;

function moveDots() {
  dots.forEach(dot => {
    dot.style.setProperty('--angle', angle + 'deg');
  });
  angle += 1; 
  requestAnimationFrame(moveDots);
}

moveDots();
