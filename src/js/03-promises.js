import Notiflix from 'notiflix';

let delay = null;
let step = null;
let amount = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });// Fulfill
        } else {
          reject({ position, delay });// Reject
        }
      },delay);
  });
}

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onPromiseValue);


  function onSuccess({ position, delay }) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    };

  function onError({ position, delay }) {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  };

  function onPromiseValue(evt) {
      evt.preventDefault();

  delay = Number(evt.target.delay.value);
  step = Number(evt.target.step.value);
  amount = Number(evt.target.amount.value);

  for (let i = 1; i <= amount; i += 1) {
  createPromise(i, delay).then(onSuccess).catch(onError);
  delay += step;
};

console.log(delay);
console.log(step);
console.log(amount);
};
