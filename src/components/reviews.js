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

const reviewsList = document.querySelector('.reviews-container__reviews-list');
const forwardButton = document.querySelector('.button-forward');
const backwardButton = document.querySelector('.button-backward');
const pageLanguage = document.documentElement.lang;

const reviewTextTemplate = document.querySelector('#review-text-template').content;
const reviewPhotoTemplate = document.querySelector('#review-photo-template').content;
const reviewVideoTemplate = document.querySelector('#review-video-template').content;

/**
 * This is our review "database". 
 * Each review has several attributes:
 *  type (required): can be 'text', 'photo' or 'video' - this changes which template will be used during rendering
 *  contentEn (required): depending on review type is either a string or a variable
 *                        leading to a photo or video file (see top of file for how to import)
 *  contentEs (required): same as contentEn, but will be displayed in the Spanish version of the website,
 *                        if the two versions are identical, simply copy the value of contentEn
 *  avatar (optional, applicable only to text type): a variable leading to a photo file (see top of file for how to import)
 *                                                   if it is specified in a text review, then an avatar will be rendered in the caption
 */

const reviews = [
  {
    type: 'text',
    contentEn: '"I am a student of nueva imagen, Laura the owner and our teacher, truly cares about our learning, she gives all her knowledge and love in each class she teaches us, without a doubt she is an example to follow for new generations of beauticians, cosmetologists etc. Thank you Laura."',
    contentEs: '"Soy estudiante de nueva imagen, Laura la propietaria y nuestra profesora, verdaderamente se preocupa por nuestro aprendizaje, ella brinda todo su conocimiento y amor en cada clase que nos imparte, sin duda alguna es un ejemplo a seguir para nuevas generaciones de esteticistas, cosmetologas etc. Gracias Laura."',
  },
  {
    type: 'photo',
    contentEn: photoReview3,
    contentEs: photoReview3,
  },
  {
    type: 'text',
    contentEn: '"I am a student of Nueva imagen beauty school, Ms. Laura super professional and excellent instructor. I am very happy to be part of this class!"',
    contentEs: '"Soy estudiante de Nueva imagen beauty school , Mra. Laura súper profesional y excelente instructora. Estoy muy contenta de formar parte de esta clase!"',
  },
  {
    type: 'video',
    contentEn: videoReview5,
    contentEs: videoReview5,
  },
  {
    type: 'video',
    contentEn: videoReview1,
    contentEs: videoReview1,
  },
  {
    type: 'text',
    contentEn: '"Today I am proud to have attended Escuela Nueva Imagen. It was a life-changing experience, an educational one. I am very grateful for the support I received"',
    contentEs: '"Hoy estoy orgullosa de haber asistido a Escuela Nueva Imagen. Fue un cambio de vida, de educación. Estoy muy agradecida por el apoyo que se me brindó"',
  },
  {
    type: 'video',
    contentEn: videoReview2,
    contentEs: videoReview2,
  },
  {
    type: 'video',
    contentEn: videoReview3,
    contentEs: videoReview3,
  },
  {
    type: 'video',
    contentEn: videoReview4,
    contentEs: videoReview4,
  }
];

function renderReviewEn(reviewObj) {
  let reviewElement;
  if (reviewObj.type == 'text') {
    reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);
    reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEn;

    if (!reviewObj.avatar) {
      reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
    } else {
      reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
    }

    reviewsList.append(reviewElement);
  } else if (reviewObj.type == 'photo') {
    reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
    reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEn;
    reviewsList.append(reviewElement);
  } else if (reviewObj.type == 'video') {
    reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
    reviewElement.querySelector('.review__video').src = reviewObj.contentEn;
    reviewsList.append(reviewElement);
  } else {
    console.log('review undefined, will not render');
  }
}

function renderReviewEs(reviewObj) {
  let reviewElement;
  if (reviewObj.type == 'text') {
    reviewElement = reviewTextTemplate.querySelector('.review-text').cloneNode(true);
    reviewElement.querySelector('.review__text-content').textContent = reviewObj.contentEs;

    if (!reviewObj.avatar) {
      reviewElement.querySelector('.review__avatar').classList.add('avatar-hidden');
    } else {
      reviewElement.querySelector('.review__avatar').src = reviewObj.avatar;
    }

    reviewsList.append(reviewElement);
  } else if (reviewObj.type == 'photo') {
    reviewElement = reviewPhotoTemplate.querySelector('.review-photo').cloneNode(true);
    reviewElement.querySelector('.review-photo__image').src = reviewObj.contentEs;
    reviewsList.append(reviewElement);
  } else if (reviewObj.type == 'video') {
    reviewElement = reviewVideoTemplate.querySelector('.review-video').cloneNode(true);
    reviewElement.querySelector('.review__video').src = reviewObj.contentEs;
    reviewsList.append(reviewElement);
  } else {
    console.log('review undefined, will not render');
  }
}

function removeReviews() {
  const reviews = document.querySelectorAll('.review');
  reviews.forEach(review => review.remove());
}

function loadReviews() {
  removeReviews();
  reviews.forEach(review => {
    if (pageLanguage === 'en') {
      renderReviewEn(review);
    } else {
      renderReviewEs(review);
    }
  });
}

document.addEventListener('DOMContentLoaded', loadReviews);

const scrollDistance = 300;

forwardButton.addEventListener('click', () => {
  reviewsList.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});

backwardButton.addEventListener('click', () => {
  reviewsList.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});
