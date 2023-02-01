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


/* const swiper = new Swiper(".class", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    },
}); */