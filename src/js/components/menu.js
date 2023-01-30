function menu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mob-menu');
    let count = 0

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        if (count == 0) {
            disableScroll();
            count = 1
        } else if (count == 1) {
            enableScroll();
            count = 0
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== menu & e.target !== burger) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            enableScroll();
        }
    });

}

menu();

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


var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? {
    passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


