function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
let timerData = null;

function onStart() {
  timerData = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
  },1000);
};

function onStop() {
  clearInterval(timerData);
  refs.stop.setAttribute('disabled', true);
  refs.start.removeAttribute('disabled');
};
