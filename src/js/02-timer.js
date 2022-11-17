import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
  dataTimeInp: document.querySelector('#datetime-picker'),
  dataStartBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  isActive: false, // На початку таймер не активний
  onClose(selectedDates) {
    const endTime = selectedDates[0];
    if (endTime - Date.now() < 0) {
      refs.dataStartBtn.setAttribute('disabled', true);
      // alert('Please choose a date in the future');
      options.onClose();
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.dataStartBtn.removeAttribute('disabled');
    };
      refs.dataStartBtn.addEventListener('click', () => {
      if(this.isActive > 0) {
        return; // Якщо таймер активний, то за допомогою return виходимо із циклу і нічого не робимо (це позбовляє можливості кнопці реагувати на кількість кліків)
      };
      this.isActive = true; // робимо таймер активним
          const intervalId = setInterval(() => {
          const currentTime = Date.now();
          const remainTime = (endTime - currentTime);
          const { days, hours, minutes, seconds } = convertMs(remainTime);
          console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);

        }, 1000);
        // stopInterval();
      });

  },
};

// function stopInterval(){
//   if(remainTime <= 0) {
//      clearInterval(intervalId)
//     }
// };


flatpickr('#datetime-picker', options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = (Math.floor(ms / day)).toString().padStart(2, '0');
  // Remaining hours
  const hours = (Math.floor((ms % day) / hour)).toString().padStart(2, '0');
  // Remaining minutes
  const minutes = (Math.floor(((ms % day) % hour) / minute)).toString().padStart(2, '0');
  // Remaining seconds
  const seconds = (Math.floor((((ms % day) % hour) % minute) / second)).toString().padStart(2, '0');

  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}


// console.log(countDown);
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log(convertMs(110540000)); // {days: 1, hours: 6 minutes: 42, seconds: 20}





