// Navbar toggle
var menuBtn = document.getElementById('menu-btn');
var navbar = document.querySelector('.header .navbar');

menuBtn.onclick = function() {
   if (navbar.className.indexOf('active') === -1) {
      navbar.className += ' active';
   } else {
      navbar.className = navbar.className.replace(' active', '');
   }
};




// gallery slider

var galleryIndex = 0;
var gallerySlide = document.querySelector('.gallery-slide');
var galleryImages = gallerySlide.querySelectorAll('img');

function showGallerySlide(index) {

   if(index >= galleryImages.length) 
      { 
         galleryIndex = 0; 
      }
   if(index < 0) 
      { 
         galleryIndex = galleryImages.length -1; 
      }

   gallerySlide.style.transform = 'translateX(' + (-galleryIndex * 100) + '%)';
}

document.querySelector('.gallery-container .next').onclick = function() {
   galleryIndex++;
   showGallerySlide(galleryIndex);
};
document.querySelector('.gallery-container .prev').onclick = function() {
   galleryIndex--;
   showGallerySlide(galleryIndex);
};

// reviews slider

var reviewIndex = 0;
var reviewsSlide = document.querySelector('.reviews-slide');
var reviewBoxes = reviewsSlide.querySelectorAll('.box');

function showReviewSlide(index) {

   if(index >= reviewBoxes.length) 
      { 
         reviewIndex = 0; 
      }

   if(index < 0) { 
      reviewIndex = reviewBoxes.length -1; 
   }

   reviewsSlide.style.transform = 'translateX(' + (-reviewIndex * 100) + '%)';
}


document.querySelector('.reviews-container .next-review').onclick = function() {
   reviewIndex++;
   showReviewSlide(reviewIndex);
};

document.querySelector('.reviews-container .prev-review').onclick = function() {
   reviewIndex--;
   showReviewSlide(reviewIndex);
};



