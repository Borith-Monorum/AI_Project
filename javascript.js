// scroll-top 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})
// scroll-top 

// banner 
const swiperEl = document.getElementById('banner');
// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
// banner 


// partners 
const swiperE2 = document.getElementById('partner')
const partners = {
  slidesPerView: 2,
  spacebetween: 10,
  breakpoints: {
    640: {
      slidesPerView:3,
      spacebetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spacebetween: 40,
    },
    1440:{
      slidesPerView: 5,
      spacebetween: 50,
    }
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);
Object.assign(swiperE2, partners);

// and now initialize it
swiperEl.initialize();
swiperE2.initialize();
// partners 
