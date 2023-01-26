const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: ".promo .swiper-button-next",
        prevEl: ".promo .swiper-button-prev",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});

const partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 800,
    navigation: {
        nextEl: ".partners .swiper-button-next",
        prevEl: ".partners .swiper-button-prev",
    },
    /* breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }, */
});