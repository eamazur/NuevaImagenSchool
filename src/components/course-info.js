document.addEventListener('DOMContentLoaded', function () {
  const professions = [
    {
      profession: 'Cosmetology',
      credits: 50,
      hours: 1500,
      price: 17500,
      creditsElement: document.querySelector('#credits-cosmetology'),
      priceElement: document.querySelector('#price-cosmetology')
    },
    {
      profession: 'Hairstylist',
      credits: 40,
      hours: 1200,
      price: 14500,
      creditsElement: document.querySelector('#credits-hairstylist'),
      priceElement: document.querySelector('#price-hairstylist')
    },
    {
      profession: 'Nail Technician',
      credits: 20,
      hours: 600,
      price: 9500,
      creditsElement: document.querySelector('#credits-nail'),
      priceElement: document.querySelector('#price-nail')
    },
    {
      profession: 'Esthetician',
      credits: 20,
      hours: 600,
      price: 9500,
      creditsElement: document.querySelector('#credits-esthetician'),
      priceElement: document.querySelector('#price-esthetician')
    },
    {
      profession: 'Barber',
      credits: 50,
      hours: 1500,
      price: 17500,
      creditsElement: document.querySelector('#credits-barber'),
      priceElement: document.querySelector('#price-barber')
    }
  ];

  professions.forEach(item => {
    if (item.creditsElement) {
      item.creditsElement.textContent = `${item.credits} credits / ${item.hours} hours`;
    }
    if (item.priceElement) {
      item.priceElement.textContent = `$${item.price.toLocaleString()}`;
    }
  });
});
