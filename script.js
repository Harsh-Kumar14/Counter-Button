let counter = 0;

const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.textContent = counter;
}
