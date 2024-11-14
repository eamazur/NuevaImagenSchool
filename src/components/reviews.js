//import all images for reviews here for Webpack to insert correct file paths to dist
import avatarReview1 from '../images/IMG_5802.webp';
import videoReview2 from '../images/IMG_5485.mp4';
import photoReview3 from '../images/IMG_5802.webp';


const reviewsList = document.querySelector('.reviews-container__reviews-list')
const forwardButton = document.querySelector('.button-forward');
const backwardButton = document.querySelector('.button-backward');
const pageCountDisplay = document.querySelector('#page-count');
const currentPageDisplay = document.querySelector('#current-page');

const reviewTextTemplate  = document.querySelector('#review-text-template');
const reviewPhotoTemplate = document.querySelector('#review-photo-template');
const reviewVideoTemplate = document.querySelector('#review-video-template');

const reviewsPerPage = 4;

let currentPage = 1;
let pageCount;

const reviews = [
  {
    type: 'text',
    content: '“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”',
    author: {
      avatar: avatarReview1,
      name: 'Gabriel, barber',
      tag: '@barbergabrielaurora',
    }
  },
  {
    type: 'video',
    content: videoReview2,
    author: {
      avatar: undefined,
      name: 'Anna',
      tag: '@barberannaurora',
    }
  },
  {
    type: 'photo',
    content: photoReview3,
    author: {
      avatar: undefined,
      name: 'Anna',
      tag: '@barberannaurora',
    }
  },
  {
    type: 'text',
    content: '“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”',
    author: {
      avatar: undefined,
      name: 'Gabriel, barber',
      tag: '@barbergabrielaurora',
    }
  },
];

function calculatePageCount(reviewsArr) {
  let reviewCount = reviewsArr.length;

  pageCount = Math.ceil(reviewCount / reviewsPerPage);
  console.log('pageCount ' + pageCount);
  return pageCount;
};

function changePage() {

}

function checkPageLimits(pageNumber) {
  console.log('checking page limits, current page ' + pageNumber + ', page count ' + pageCount);
  
  if (pageNumber == 1) {
    backwardButton.classList.add('inactive');
    currentPageDisplay.classList.add('page-number-inactive');
    console.log('reached first page');
  } else {
    backwardButton.classList.remove('inactive');
    currentPageDisplay.classList.remove('page-number-inactive');
  };
  if (pageNumber == pageCount) {
    forwardButton.classList.add('inactive');
    pageCountDisplay.classList.add('page-number-inactive');
    console.log('reached last page')
  } else {
    forwardButton.classList.remove('inactive');
    pageCountDisplay.classList.remove('page-number-inactive');
  }
};

function loadReviews(pageNumber) {
  console.log(pageNumber);
  console.log(reviews[pageNumber]);
  currentPageDisplay.textContent = pageNumber;
  checkPageLimits(pageNumber);
};

document.addEventListener('DOMContentLoaded', function() {
  pageCount = calculatePageCount(reviews);
  pageCountDisplay.textContent = pageCount;
});

document.addEventListener('DOMContentLoaded', loadReviews(currentPage));

backwardButton.addEventListener('click', function() {
  currentPage--;
  loadReviews(currentPage);
});


forwardButton.addEventListener('click', function() {
  currentPage++;
  loadReviews(currentPage);
});



