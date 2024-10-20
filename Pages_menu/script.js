new Swiper('.carousel', {
    loop: true, // Permet de boucler le carrousel

    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },

    speed: 1000, //vitesse entre les diapositifs
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
        slideChangeTransitionEnd: function () {
            if (this.isEnd) {
                this.slideToLoop(0, 0);
            }
        }
    },
});
