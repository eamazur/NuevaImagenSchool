




document.addEventListener('DOMContentLoaded', function() {
  let months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const chips = document.querySelectorAll('.chip-month');
  
  const professions = [
    {
      profession: 'Cosmetology',
      duration: 215,
      credits: 50,
      price: 14300,
      months: 7,
      endElement: document.querySelector('#end-cosmetology'),
      creditsElement: document.querySelector('#credits-cosmetology'),
      priceElement: document.querySelector('#price-cosmetology'),
      monthsElement: document.querySelector('#months-cosmetology')
    },
    {
      profession: 'Hairstylist',
      duration: 172,
      credits: 40,
      price: 11300,
      months: 6,
      endElement: document.querySelector('#end-hairstylist'),
      creditsElement: document.querySelector('#credits-hairstylist'),
      priceElement: document.querySelector('#price-hairstylist'),
      monthsElement: document.querySelector('#months-hairstylist')
    },
    {
      profession: 'Nail',
      duration: 86,
      credits: 20,
      price: 7600,
      months: 3,
      endElement: document.querySelector('#end-nail'),
      creditsElement: document.querySelector('#credits-nail'),
      priceElement: document.querySelector('#price-nail'),
      monthsElement: document.querySelector('#months-nail')
    },
     {
      profession: 'Esthetician',
      duration: 86,
      credits: 20,
      price: 7650,
      months: 3,
      endElement: document.querySelector('#end-esthetician'),
      creditsElement: document.querySelector('#credits-esthetician'),
      priceElement: document.querySelector('#price-esthetician'),
      monthsElement: document.querySelector('#months-esthetician')
    },
    {
      profession: 'Barber',
      duration: 215,
      credits: 50,
      price: 14300,
      months: 7,
      endElement: document.querySelector('#end-barber'),
      creditsElement: document.querySelector('#credits-barber'),
      priceElement: document.querySelector('#price-barber'),
      monthsElement: document.querySelector('#months-barber')
    },
  ];
  
  let currentDate = new Date();
  let startMonth = currentDate.getMonth() + 1;
  
  let startMonthName = months[startMonth];
  
  function getEndDate(currentDate, duration) {
    let today = new Date();
    let endDate = new Date(today.setDate(today.getDate() + duration));
    return 'Graduate ' + months[endDate.getMonth()] + ' ' + endDate.getFullYear();
  }

  function getCreditsAndDuration(profession) {

  }

  professions.forEach(item => {
    item.endElement.textContent = getEndDate(currentDate, item.duration);
    item.creditsElement.textContent = item.credits + ' credits / ' + item.duration + ' days';
    item.priceElement.textContent = '$' + item.price.toLocaleString();
    item.monthsElement.textContent = item.months + ' months';
  });

  chips.forEach(item => {
    item.textContent = 'start in ' + startMonthName;
  });
})