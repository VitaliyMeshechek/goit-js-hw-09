// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';


// const refs = {
//   dataTimeInp: document.querySelector('#datetime-picker'),
//   dataStartBtn: document.querySelector('[data-start]'),
//   dataDays: document.querySelector('[data-days]'),
//   dataHours: document.querySelector('[data-hours]'),
//   dataMinutes: document.querySelector('[data-minutes]'),
//   dataSeconds: document.querySelector('[data-seconds]'),
// };
// let remainTime = null;
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   isActive: false, // На початку таймер не активний
//   onClose(selectedDates) {

//     const endTime = selectedDates[0];
//     if (selectedDates[0] <= new Date()) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       refs.dataStartBtn.setAttribute('disabled', true);
//       // alert('Please choose a date in the future');
//       // this.onClose()
//     } else {
//       refs.dataStartBtn.removeAttribute('disabled');
//     };
//       refs.dataStartBtn.addEventListener('click', () => {

//       if(this.isActive > 0) {
//         return; // Якщо таймер активний, то за допомогою return виходимо із циклу і нічого не робимо (це позбовляє можливості кнопці реагувати на кількість кліків)
//       };
//       this.isActive = true; // робимо таймер активним
//           const intervalId = setInterval(() => {
//           const currentTime = new Date();
//           remainTime = (endTime - currentTime);
//           const { days, hours, minutes, seconds } = convertMs(remainTime);
//           if (
//             days === '00' &&
//             hours === '00' &&
//             minutes === '00' &&
//             seconds === '00'
//           ) {
//             clearInterval(intervalId);
//           }
//           // if(remainTime < 1000) {
//           //   clearInterval(intervalId)}
//           console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
//         }, 1000);
//       });

//   },
// };

// // function onControlData(data) {

// // }

// flatpickr('#datetime-picker', options)

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = (Math.floor(ms / day)).toString().padStart(2, '0');
//   // Remaining hours
//   const hours = (Math.floor((ms % day) / hour)).toString().padStart(2, '0');
//   // Remaining minutes
//   const minutes = (Math.floor(((ms % day) % hour) / minute)).toString().padStart(2, '0');
//   // Remaining seconds
//   const seconds = (Math.floor((((ms % day) % hour) % minute) / second)).toString().padStart(2, '0');

//   refs.dataDays.textContent = days;
//   refs.dataHours.textContent = hours;
//   refs.dataMinutes.textContent = minutes;
//   refs.dataSeconds.textContent = seconds;

//   return { days, hours, minutes, seconds };
// }


// console.log(countDown);
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log(convertMs(110540000)); // {days: 1, hours: 6 minutes: 42, seconds: 20}




import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const refs = {
  dataTimeInp: document.querySelector('#datetime-picker'),
  dataStartBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let remainTime = null;
refs.dataStartBtn.setAttribute('disabled', true);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const endTime = selectedDates[0];

    if (endTime <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
      // refs.dataStartBtn.removeAttribute('disabled');
    }
    refs.dataStartBtn.removeAttribute('disabled');
    refs.dataStartBtn.addEventListener('click', () => {
      refs.dataStartBtn.setAttribute('disabled', true);
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        remainTime = endTime - currentTime;

        const { days, hours, minutes, seconds } = convertMs(remainTime);
        if (
          days === '00' &&
          hours === '00' &&
          minutes === '00' &&
          seconds === '00'
        ) {
          clearInterval(intervalId);
        }
        console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
      }, 1000);
    });
  },
};
flatpickr('#datetime-picker', options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}





// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     chekDate(selectedDates[0]);
//   },
// };
// flatpickr('#datetime-picker', options);

// const btnEl = document.querySelector('[data-start]');
// btnEl.setAttribute('disabled', 'true');

// const inputEl = document.querySelector('#datetime-picker');
// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// let intervalId = null;

// const pad = value => String(value).padStart(2, '0');

// const convertMs = ms => {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = pad(Math.floor(ms / day));

//   const hours = pad(Math.floor((ms % day) / hour));

//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));

//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// };

// const chekDate = date => {
//   const currentDate = new Date().getTime();
//   const selectedDate = date.getTime();

//   if (currentDate < selectedDate) {
//     Notify.success('Для запуска таймера нажмите кнопку "Start"');
//     btnEl.removeAttribute('disabled');
//     btnStart(selectedDate);
//   } else {
//     Notify.failure('ВЫБЕРИТЕ ДАТУ');
//   }
// };

// const btnStart = elemnt => {
//   btnEl.addEventListener('click', () => {
//     inputEl.setAttribute('disabled', 'true');
//     btnEl.setAttribute('disabled', 'true');
//     timer(elemnt);
//   });
// };

// const timer = targetDate => {
//   intervalId = setInterval(() => {
//     const delta = targetDate - new Date();
//     renderTimer(delta);
//   }, 1000);
// };

// const renderTimer = value => {
//   const { days, hours, minutes, seconds } = convertMs(value);

//   if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
//     clearInterval(intervalId);
//   }
//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);
//   daysEl.innerHTML = days;
//   hoursEl.innerHTML = hours;
//   minutesEl.innerHTML = minutes;
//   secondsEl.innerHTML = seconds;
// };

