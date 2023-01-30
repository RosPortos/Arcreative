document.addEventListener('DOMContentLoaded', function () {

    function headerHide() {
        const header = document.querySelector(".header");
        let scrollPrev = 0;

        window.addEventListener('scroll', function () {
            let scrolled = scrollY;

            if (scrolled > 10) {
                header.classList.add('header-black');
            } else {
                header.classList.remove('header-black');
            }

            if (scrolled > 0 && scrolled > scrollPrev) {
                header.classList.add('header-top');
            } else {
                header.classList.remove('header-top');
            }
            scrollPrev = scrolled;
        });
    }

    if (window.innerWidth > 991) {
        headerHide();
    }









});





