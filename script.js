// Candle lighting logic
const candleBtn = document.querySelector('.candle-btn');
const candleWall = document.querySelector('.candle-wall');

candleBtn.addEventListener('click', () => {
  const candle = document.createElement('div');
  candle.classList.add('candle');
  const flame = document.createElement('div');
  flame.classList.add('flame');
  candle.appendChild(flame);
  candleWall.appendChild(candle);
});

// Recruitment form logic
const joinForm = document.getElementById('join-form');
const formStatus = document.querySelector('.form-status');

joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = "⚔️ Application Sent! We’ll contact you soon.";
  joinForm.reset();
});
