"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var logosBox = document.querySelectorAll('.clients__wrapper .box-img');
var parentImg = document.querySelector('.clients__wrapper');
var tl = gsap.timeline();
var tlImg = gsap.timeline();
var startScale = 6;
var size = 3;
var subarray = [];
var left = [16, 18, 17];
var count = 0;
logosBox.forEach(function (item) {
  var clone = item.cloneNode(true);
  parentImg.appendChild(clone);
});
var logos = _toConsumableArray(document.querySelectorAll('.clients__wrapper .box-img'));
var logosBoxAfter = document.querySelectorAll('.clients__wrapper .box-img');
var logosImg = document.querySelectorAll('.clients__wrapper img');
for (var i = 0; i < Math.ceil(logos.length / size); i++) {
  subarray[i] = logos.slice(i * size, i * size + size);
}
function getR(max) {
  return Math.floor(Math.random() * max);
}
logosImg.forEach(function (can) {
  var randomX = random(5, 10);
  var randomY = random(5, 10);
  var randomDelay = random(0, 1);
  var randomTime = random(1, 3);
  var randomTime2 = random(5, 10);
  var randomAngle = random(2, 4);
  TweenLite.set(can, {
    x: randomX(-1),
    y: randomX(1)
  });
  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);
  function rotate(target, direction) {
    TweenLite.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    });
  }
  function moveX(target, direction) {
    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }
  function moveY(target, direction) {
    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }
  function random(min, max) {
    var delta = max - min;
    return function () {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return (min + delta * Math.random()) * direction;
    };
  }
});
gsap.to(logosBoxAfter, {
  x: "-=100vw",
  duration: 50,
  ease: "none",
  repeat: -1,
  yoyo: true
});
subarray.forEach(function (array, i) {
  if (array.length == 1) {
    array[0].style.cssText = "left: ".concat(left[0] * count, "vw; top: ").concat(getR(6), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    count++;
  } else if (array.length == 2) {
    array[0].style.cssText = "left: ".concat(left[0] * count, "vw; top: ").concat(getR(6), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    array[1].style.cssText = "left: ".concat(left[1] * count, "vw; top: ").concat(10 + getR(4), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    count++;
  } else {
    array[0].style.cssText = "left: ".concat(left[0] * count, "vw; top: ").concat(getR(6), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    array[1].style.cssText = "left: ".concat(left[1] * count, "vw; top: ").concat(10 + getR(4), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    array[2].style.cssText = "left: ".concat(left[2] * count, "vw; top: ").concat(21 + getR(4), "vw;  transform: scale(0.").concat(startScale + getR(4), ")");
    count++;
  }
});
"use strict";

function menu() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mob-menu');
  var count = 0;
  burger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    if (count == 0) {
      disableScroll();
      count = 1;
    } else if (count == 1) {
      enableScroll();
      count = 0;
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
  var header = document.querySelector(".header");
  var page = document.querySelector(".page-site");
  var scrolledWindow = scrollY;
  var scrollPrev = 0;
  if (scrolledWindow > 10) {
    header.classList.add('header-black');
  } else {
    header.classList.remove('header-black');
  }
  window.addEventListener('scroll', function () {
    var scrolled = scrollY;
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
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}
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
"use strict";

function rowAnim(direction, elements) {
  var blocks = gsap.utils.toArray(elements);
  var videoWrapHover = document.querySelectorAll('.video-wrapper-hover');
  var currentWidth = 0;
  var prevWidth = 0;
  var widest;
  blocks.forEach(function (el, i) {
    var width = gsap.getProperty(el, "width");
    if (width > prevWidth) {
      widest = width;
    }
    gsap.set(el, {
      x: currentWidth
    });
    currentWidth += width;
    prevWidth = width;
  });
  var totalWidth = currentWidth;
  videoWrapHover.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      tl.pause();
    });
    item.addEventListener('mouseout', function () {
      tl.play();
    });
  });
  var tl = gsap.to(blocks, {
    x: "".concat(direction, "=").concat(totalWidth),
    repeat: -1,
    duration: 25,
    ease: "none",
    repeatRefresh: true,
    modifiers: {
      x: gsap.utils.unitize(function (x) {
        return gsap.utils.wrap(-widest, totalWidth - widest, x);
      })
    }
  });
}
rowAnim('-', ".row-img-item.left-move >div");
rowAnim('+', ".row-img-item.right-move >div");
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var anchors = document.querySelectorAll('a.scroll-to');
var _iterator = _createForOfIteratorHelper(anchors),
  _step;
try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
"use strict";

var promoSwiper = new Swiper(".promo-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".promo .swiper-button-next",
    prevEl: ".promo .swiper-button-prev"
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1]
    },
    next: {
      translate: ["100%", 0, 0]
    }
  }
});
var partnersSwiper = new Swiper(".partners-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 800,
  navigation: {
    nextEl: ".partners .swiper-button-next",
    prevEl: ".partners .swiper-button-prev"
  }
  /* breakpoints: {
      1150: {
          slidesPerView: 3,
      },
  }, */
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function videoBlock() {
    var videoWrap = document.querySelectorAll('.video-wrapper');
    var videoWrapHover = document.querySelectorAll('.video-wrapper-hover');
    var playerList = document.querySelectorAll('.player');
    playerList.forEach(function (el, i) {
      el.setAttribute('id', "player".concat(i));
    });
    videoWrap.forEach(function (item) {
      var previeBlock = item.querySelector('.preview');
      var player = item.querySelector('.player');
      var playerVideoId = previeBlock.getAttribute('data-video-id');
      var playerId = player.getAttribute('id');
      var switchStatus = 0;
      var playerVideo;
      window.YT.ready(function () {
        playerVideo = new YT.Player(playerId, {
          videoId: playerVideoId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange
          }
        });
      });
      function onPlayerReady() {
        previeBlock.addEventListener('click', function () {
          playerVideo.playVideo();
          previeBlock.classList.add('hide');
        });
      }
      function onStateChange(e) {
        if (e.data == 2) {
          previeBlock.classList.remove('hide');
          previeBlock.classList.remove('not-visible');
          switchStatus++;
        }
        if (e.data > 2 && switchStatus > 0) {
          previeBlock.classList.add('not-visible');
          switchStatus = 0;
        }
        if (e.data == 0) {
          previeBlock.classList.remove('hide');
          previeBlock.classList.remove('not-visible');
        }
      }
    });
    videoWrapHover.forEach(function (item) {
      var previeBlock = item.querySelector('.preview');
      var player = item.querySelector('.player');
      var playerVideoId = previeBlock.getAttribute('data-video-id');
      var playerId = player.getAttribute('id');
      var playerVideo;
      window.YT.ready(function () {
        playerVideo = new window.YT.Player(playerId, {
          videoId: playerVideoId,
          playerVars: {
            'muted': 1,
            'autoplay': 0,
            'disablekb': 1,
            'controls': 0,
            'iv_load_policy': 3,
            'loop': 1,
            'showinfo': 0,
            'modestbranding': 1
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      });
      function onPlayerReady() {
        item.addEventListener('mouseover', function () {
          playerVideo.playVideo();
          previeBlock.classList.add('hide');
        });
        item.addEventListener('mouseout', function () {
          playerVideo.pauseVideo();
          previeBlock.classList.remove('hide');
        });
      }
    });
  }
  videoBlock();
});
"use strict";
//# sourceMappingURL=main.js.map
