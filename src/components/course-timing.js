const chips = document.querySelectorAll('.chip-month');

let months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
  ];

let endElementCosmetology = document.querySelector('#end-cosmetology');
let endElementHairstylist = document.querySelector('#end-hairstylist');
let endElementNail = document.querySelector('#end-nail');
let endElementEsthetician = document.querySelector('#end-esthetician');
let endElementBarber = document.querySelector('#end-barber');

//duration in days
let durationCosmetology = 215;
let durationHairstylist = 172;
let durationNail = 86;
let durationEsthetician = 86;
let durationBarber = 215;

let currentDate = new Date();
let startMonth = currentDate.getMonth() + 1;

let startMonthName = months[startMonth];

document.addEventListener('DOMContentLoaded', function() {
  for (let i= 0; i <= chips.length; i++) {
    chips[i].textContent = 'start in ' + startMonthName;
  }
})



let endDate = 0;

function getEndDate(duration) {
  let endDate = currentDate.setDate(currentDate.getDate() + duration);
  console.log(endDate);
}

getEndDate(durationCosmetology);