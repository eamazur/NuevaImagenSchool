//import all images for reviews here for Webpack to insert correct file paths to dist

import avatarReview1 from '../images/IMG_5802.webp';
import videoReview2 from '../images/IMG_5485.mp4';
import photoReview3 from '../images/IMG_5802.webp';
/*
const link = 'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-fire-place-PEvIC-L4IeE'

const avatarReview1 = link;
const videoReview2 = link;
const photoReview3 = link;*/

const reviewsList = document.querySelector('.reviews-container__reviews-list')
const forwardButton = document.querySelector('.button-forward');
const backwardButton = document.querySelector('.button-backward');
const pageCountDisplay = document.querySelector('#page-count');
const currentPageDisplay = document.querySelector('#current-page');

const reviewTextTemplate  = document.querySelector('#review-text-template').content;
const reviewPhotoTemplate = document.querySelector('#review-photo-template').content;
const reviewVideoTemplate = document.querySelector('#review-video-template').content;

const reviewsPerPage = 4;

let currentPage = 1;
let pageCount;

const reviews = [
  {
    type: 'text',
    content: '“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”',
    avatar: avatarReview1,
    name: 'Gabriel, barber',
    tag: '@barbergabrielaurora',
  },
  {
    type: 'video',
    content: videoReview2,
    avatar: undefined,
    name: 'Anna',
    tag: '@barberannaurora',
  },
  {
    type: 'photo',
    content: photoReview3,
    avatar: undefined,
    name: 'Anna',
    tag: '@barberannaurora',
  },
  {
    type: 'text',
    content: '“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”',
    avatar: undefined,
    name: 'Gabriel, barber',
    tag: '@barbergabrielaurora',
  },
  {
    type: 'photo',
    content: photoReview3,
    avatar: undefined,
    name: 'Anna',
    tag: '@barberannaurora',
  },
  {
    type: 'text',
    content: '“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”',
    avatar: avatarReview1,
    name: 'Gabriel, barber',
    tag: '@barbergabrielaurora',
  },
  {
    type: 'video',
    content: videoReview2,
    avatar: undefined,
    name: 'Anna',
    tag: '@barberannaurora',
  },
 
];

function calculatePageCount(reviewsArr) {
  pageCount = Math.ceil(reviewsArr.length / reviewsPerPage);
  console.log('calculated pageCount, it is ' + pageCount);
  return pageCount;
};

function checkPageLimits(pageNumber) {
  console.log('checking page limits, current page ' + pageNumber + ', page count ' + pageCount);
  
  if (pageNumber <= 1) {
    backwardButton.classList.add('inactive');
    currentPageDisplay.classList.add('page-number-inactive');
    console.log('reached first page');
  } else {
    backwardButton.classList.remove('inactive');
    currentPageDisplay.classList.remove('page-number-inactive');
  };
  if (pageNumber >= pageCount) {
    forwardButton.classList.add('inactive');
    pageCountDisplay.classList.add('page-number-inactive');
    console.log('reached last page')
  } else {
    forwardButton.classList.remove('inactive');
    pageCountDisplay.classList.remove('page-number-inactive');
  }
};

function renderReview(reviewObj) {
  let reviewElement;
  let avatarPresent;
  if (reviewObj.type == 'text') {
    console.log('type text');
    //fill text review
    reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);

    reviewElement.querySelector('.review__text-content').textContent = reviewObj.content;
    
    if(!reviewObj.avatar) {
      avatarPresent = false;
      reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
    } else {
      reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
      avatarPresent = true;
      console.log('avatar found, ' + avatarPresent);
    }
    reviewElement.querySelector('.review__author-name').textContent = reviewObj.name;
    reviewElement.querySelector('.review__author-tag').textContent = reviewObj.tag;

    //render review
    reviewsList.append(reviewElement);

  } else {
    //fill photo review
    if (reviewObj.type == 'photo') {
      console.log('type photo');
      reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
      reviewElement.querySelector('.review-photo__image').src = reviewObj.content;
      reviewElement.querySelector('.review__author-name').textContent = reviewObj.name + ', ' + reviewObj.tag;

      //render review
      reviewsList.append(reviewElement);
    } else { 
      if (reviewObj.type == 'video') {
        console.log('type video');
        //fill video review
        reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
        reviewElement.querySelector('.review__video').src = reviewObj.content;
        reviewElement.querySelector('.review__author-name').textContent = reviewObj.name + ', ' + reviewObj.tag;

        //render review
        reviewsList.append(reviewElement);
      } else {
        console.log('review undefined, will not render');
      }
    }
    
  }
  
};

function removeReviews() {
  const reviews = document.querySelectorAll('.review');
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].remove();
    console.log('review removed');
  }
};

function loadReviews(pageNumber) {
  console.log('entered loadReviews, current page ' + pageNumber);
  currentPageDisplay.textContent = pageNumber;
  checkPageLimits(pageNumber);

  let firstReview = (reviewsPerPage * pageNumber) - (reviewsPerPage - 1);
  
  removeReviews();
  
  for (let i= firstReview; i < firstReview + reviewsPerPage; i++) {
    console.log('loading '+ i +' review');
    if (reviews[i-1]) {
      
      renderReview(reviews[i-1]);
    };
  };
};

document.addEventListener('DOMContentLoaded', function() {
  pageCount = calculatePageCount(reviews);
  pageCountDisplay.textContent = pageCount;
  loadReviews(currentPage);
});

backwardButton.addEventListener('click', function() {
  currentPage--;
  loadReviews(currentPage);
});

forwardButton.addEventListener('click', function() {
  currentPage++;
  loadReviews(currentPage);
});
