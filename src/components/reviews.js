//import all images for reviews here for Webpack to insert correct file paths to dist

import avatarReview1 from '../images/IMG_5802.webp';
import photoReview3 from '../images/IMG_5802.webp';
import videoReview1 from '../images/review-video-1.mp4';
import videoReview2 from '../images/review-video-2.mp4';
import videoReview3 from '../images/review-video-3.mp4';
import videoReview4 from '../images/review-video-4.mp4';
import videoReview5 from '../images/review-video-5.mp4';
import videoReview6 from '../images/review-video-6.mp4';
import videoReview7 from '../images/review-video-7.mp4';
import videoReview7en from '../images/review-video-7-subs-en.mp4';
import videoReview7es from '../images/review-video-7-subs.mp4';

const reviewsList = document.querySelector('.reviews-container__reviews-list')
const forwardButton = document.querySelector('.button-forward');
const backwardButton = document.querySelector('.button-backward');
const pageCountDisplay = document.querySelector('#page-count');
const currentPageDisplay = document.querySelector('#current-page');
const pageLanguage = document.documentElement.lang;

const reviewTextTemplate  = document.querySelector('#review-text-template').content;
const reviewPhotoTemplate = document.querySelector('#review-photo-template').content;
const reviewVideoTemplate = document.querySelector('#review-video-template').content;

/**
 * This is our review "datebase". 
 * Each review has several attributes:
 *  type (required): can be 'text', 'photo' or 'video' - this changes which template will be used during rendering
 *  contentEn (required): depending on review type is either a string or a variable
 *                        leading to a photo or video file (see top of file for how to import)
 *  contentEs (required): same as contentEn, but will be displayed in the Spanish version of the website,
 *                        if the two versions are identical, simply copy the value of contentEn
 *  avatar (optional, applicable only to text type): a variable leading to a photo file (see top of file for how to import)
 *                                                   if it is specified in a text review, then an avatar will be rendered in the caption
 *  nameEn (required): a string with the name of the author
 *  nameEs (required): same as nameEn, but will be displayed in the Spanish version of the website,
 *                     if the two versions are identical, simply copy the value of nameEn
 *  tag (required): a string with the tag of the author
 *                  note that it is rendered as simple text and not a link
 * */

const reviews = [
  //this is from videoReview1
  {
    type: 'text',
    contentEn: '"Attending Escuela Nueva Imagen was a game changer for me. The training, the practice, the instructors"',
    contentEs: '"Asistir a Escuela Nueva Imagen fue un cambio de juego para mí. La capacitación, la práctica, los instructores"',
    avatar: undefined,
    nameEn: 'Gabriel, barber',
    nameEs: 'Gabriel, barber',
    tag: '@barbergabrielaurora',
  },
  {
    type: 'photo',
    contentEn: photoReview3,
    contentEs: photoReview3,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  //this is from videoReview7
  {
    type: 'text',
    contentEn: '"Today I am proud to have attended Escuela Nueva Imagen. It was a life-changing experience, an educational one. I am very grateful for the support I received"',
    contentEs: '"Hoy estoy orgullosa de haber asistido a Escuela Nueva Imagen. Fue un cambio de vida, de educación. Estoy muy agradecida por el apoyo que se me brindó"',
    avatar: undefined,
    nameEn: 'Gabriel, barber',
    nameEs: 'Gabriel, barber',
    tag: '@barbergabrielaurora',
  },
  {
    type: 'video',
    contentEn: videoReview5,
    contentEs: videoReview5,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  {
    type: 'video',
    contentEn: videoReview1,
    contentEs: videoReview1,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  {
    type: 'video',
    contentEn: videoReview2,
    contentEs: videoReview2,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  {
    type: 'video',
    contentEn: videoReview3,
    contentEs: videoReview3,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  {
    type: 'video',
    contentEn: videoReview4,
    contentEs: videoReview4,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  
  {
    type: 'video',
    contentEn: videoReview6,
    contentEs: videoReview6,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
  {
    type: 'video',
    contentEn: videoReview7en,
    contentEs: videoReview7es,
    nameEn: 'Anna',
    nameEs: 'Maria',
    tag: '@barberannaurora',
  },
];

function renderReviewEn(reviewObj) {

  let reviewElement;
  let avatarPresent;
  if (reviewObj.type == 'text') {
    //fill text review
    reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);

    reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEn;
    
    if(!reviewObj.avatar) {
      avatarPresent = false;
      reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
    } else {
      reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
      avatarPresent = true;
    }
    reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn;
    reviewElement.querySelector('.review__author-tag').textContent = reviewObj.tag;

    //render review
    reviewsList.append(reviewElement);

  } else {
    //fill photo review
    if (reviewObj.type == 'photo') {
      reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
      reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEn;
      //reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn + ', ' + reviewObj.tag;

      //render review
      reviewsList.append(reviewElement);
    } else { 
      if (reviewObj.type == 'video') {
        //fill video review
        reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
        reviewElement.querySelector('.review__video').src = reviewObj.contentEn;
        //reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn + ', ' + reviewObj.tag;

        //render review
        reviewsList.append(reviewElement);
      } else {
        console.log('review undefined, will not render');
      }
    }
    
  }
  
};

function renderReviewEs(reviewObj) {

  let reviewElement;
  let avatarPresent;
  if (reviewObj.type == 'text') {
    //fill text review
    reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);

    reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEs;
    
    if(!reviewObj.avatar) {
      avatarPresent = false;
      reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
    } else {
      reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
      avatarPresent = true;
    }
    reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs;
    reviewElement.querySelector('.review__author-tag').textContent = reviewObj.tag;

    //render review
    reviewsList.append(reviewElement);

  } else {
    //fill photo review
    if (reviewObj.type == 'photo') {
      reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
      reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEs;
      reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs + ', ' + reviewObj.tag;

      //render review
      reviewsList.append(reviewElement);
    } else { 
      if (reviewObj.type == 'video') {
        //fill video review
        reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
        reviewElement.querySelector('.review__video').src = reviewObj.contentEs;
        reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs + ', ' + reviewObj.tag;

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
  }
};

function loadReviews() {
  removeReviews();
  
  for (let i= 0; i <= reviews.length; i++) {
    if (pageLanguage == 'en') {
      if (reviews[i-1]) {
        //render English content
        renderReviewEn(reviews[i-1]);
      };
    } else {
      if (reviews[i-1]) {
        //render Spanish content
        renderReviewEs(reviews[i-1]);
      };
    }
    
  };
};

document.addEventListener('DOMContentLoaded', function() {
  loadReviews();
});


let scrollDistance = 300;

forwardButton.addEventListener('click', () => {
  reviewsList.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});

backwardButton.addEventListener('click', () => {
  reviewsList.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});

//In case we go back to pagination
//delete all below line 101
// the last piese of old code left should be the reviews array

// let reviewsPerPage = 4;

// let currentPage = 1;
// let pageCount;

// function calculatePageCount(reviewsArr) {
//   pageCount = Math.ceil(reviewsArr.length / reviewsPerPage);
//   return pageCount;
// };

// function checkPageLimits(pageNumber) {  
//   if (pageNumber <= 1) {
//     backwardButton.classList.add('inactive');
//     currentPageDisplay.classList.add('page-number-inactive');
//   } else {
//     backwardButton.classList.remove('inactive');
//     currentPageDisplay.classList.remove('page-number-inactive');
//   };
//   if (pageNumber >= pageCount) {
//     forwardButton.classList.add('inactive');
//     pageCountDisplay.classList.add('page-number-inactive');
//   } else {
//     forwardButton.classList.remove('inactive');
//     pageCountDisplay.classList.remove('page-number-inactive');
//   }
// };

// function renderReviewEn(reviewObj) {

//   let reviewElement;
//   let avatarPresent;
//   if (reviewObj.type == 'text') {
//     //fill text review
//     reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);

//     reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEn;
    
//     if(!reviewObj.avatar) {
//       avatarPresent = false;
//       reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
//     } else {
//       reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
//       avatarPresent = true;
//     }
//     reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn;
//     reviewElement.querySelector('.review__author-tag').textContent = reviewObj.tag;

//     //render review
//     reviewsList.append(reviewElement);

//   } else {
//     //fill photo review
//     if (reviewObj.type == 'photo') {
//       reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
//       reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEn;
//       reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn + ', ' + reviewObj.tag;

//       //render review
//       reviewsList.append(reviewElement);
//     } else { 
//       if (reviewObj.type == 'video') {
//         //fill video review
//         reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
//         reviewElement.querySelector('.review__video').src = reviewObj.contentEn;
//         reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEn + ', ' + reviewObj.tag;

//         //render review
//         reviewsList.append(reviewElement);
//       } else {
//         console.log('review undefined, will not render');
//       }
//     }
    
//   }
  
// };

// function renderReviewEs(reviewObj) {

//   let reviewElement;
//   let avatarPresent;
//   if (reviewObj.type == 'text') {
//     //fill text review
//     reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);

//     reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEs;
    
//     if(!reviewObj.avatar) {
//       avatarPresent = false;
//       reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
//     } else {
//       reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
//       avatarPresent = true;
//     }
//     reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs;
//     reviewElement.querySelector('.review__author-tag').textContent = reviewObj.tag;

//     //render review
//     reviewsList.append(reviewElement);

//   } else {
//     //fill photo review
//     if (reviewObj.type == 'photo') {
//       reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
//       reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEs;
//       reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs + ', ' + reviewObj.tag;

//       //render review
//       reviewsList.append(reviewElement);
//     } else { 
//       if (reviewObj.type == 'video') {
//         //fill video review
//         reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
//         reviewElement.querySelector('.review__video').src = reviewObj.contentEs;
//         reviewElement.querySelector('.review__author-name').textContent = reviewObj.nameEs + ', ' + reviewObj.tag;

//         //render review
//         reviewsList.append(reviewElement);
//       } else {
//         console.log('review undefined, will not render');
//       }
//     }
    
//   }
  
// };

// function removeReviews() {
//   const reviews = document.querySelectorAll('.review');
//   for (let i = 0; i < reviews.length; i++) {
//     reviews[i].remove();
//   }
// };

// function loadReviews(pageNumber) {
//   currentPageDisplay.textContent = pageNumber;
//   checkPageLimits(pageNumber);

//   let firstReview = (reviewsPerPage * pageNumber) - (reviewsPerPage - 1);
  
//   removeReviews();
  
//   for (let i= firstReview; i < firstReview + reviewsPerPage; i++) {
//     if (pageLanguage == 'en') {
//       if (reviews[i-1]) {
//         //render English content
//         renderReviewEn(reviews[i-1]);
//       };
//     } else {
//       if (reviews[i-1]) {
//         //render Spanish content
//         renderReviewEs(reviews[i-1]);
//       };
//     }
    
//   };
// };

// document.addEventListener('DOMContentLoaded', function() {
//   pageCount = calculatePageCount(reviews);
//   pageCountDisplay.textContent = pageCount;
//   loadReviews(currentPage);
// });

// backwardButton.addEventListener('click', function() {
//   currentPage--;
//   loadReviews(currentPage);
// });

// forwardButton.addEventListener('click', function() {
//   currentPage++;
//   loadReviews(currentPage);
// });
