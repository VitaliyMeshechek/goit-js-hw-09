import Notiflix from 'notiflix';


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        onPromiseValue(createPromise)
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
  btn: document.querySelector('button'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};
console.dir(refs);
refs.form.addEventListener('submit', onPromiseValue);
// refs.form.addEventListener('input', );



  function onSuccess({ position, delay }) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    };

  function onError({ position, delay }) {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  };



  function onPromiseValue(evt) {



    refs.form.currenTarget = refs.form.value;
    // const formEl = evt.currenTarget;
    const delay = refs.delay.value;
    const step = refs.step.value;
    const amount = refs.amount.value;
  //  Number(refs.delay.target.value) = value;
  // Number(refs.step.target.value) = value;
  //  Number(refs.amount.target.value) = value;

  // refs.delay.target = Number(refs.delay.value);
  // refs.step.target = Number(refs.step.value);
  // refs.amount.target = Number(refs.amount.value);
  // const delay = Number(refs.delay.value);
  // const step = Number(refs.step.value);
  // const amount = Number(refs.amount.value);
  // console.log(delay);
  // console.log(step);
  // console.log(amount);



    for (let i = 0; i < amount; i += 1) {
      if(amount > 0){
        createPromise(i, delay).then(onSuccess).catch(onError);
        i = delay + step

      }

      evt.preventDefault();
    };

  }
