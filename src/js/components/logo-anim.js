const logosBox = document.querySelectorAll('.clients__wrapper .box-img');
const parentImg = document.querySelector('.clients__wrapper');
const tl = gsap.timeline();
const tlImg = gsap.timeline();
let startScale = 6;
let size = 3;
let subarray = [];
let left = [16, 18, 17];
let count = 0;

logosBox.forEach(item => {
    let clone = item.cloneNode(true);
    parentImg.appendChild(clone);
});

const logos = [...document.querySelectorAll('.clients__wrapper .box-img')]
const logosBoxAfter = document.querySelectorAll('.clients__wrapper .box-img');
const logosImg = document.querySelectorAll('.clients__wrapper img');

for (let i = 0; i < Math.ceil(logos.length / size); i++) {
    subarray[i] = logos.slice((i * size), (i * size) + size);
}

function getR(max) {
    return Math.floor(Math.random() * (max));
}

logosImg.forEach(can => {
    const randomX = random(5, 10);
    const randomY = random(5, 10);
    const randomDelay = random(0, 1);
    const randomTime = random(1, 3);
    const randomTime2 = random(5, 10);
    const randomAngle = random(2, 4);

    TweenLite.set(can, {
        x: randomX(-1),
        y: randomX(1),
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
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
});


gsap.to(logosBoxAfter, {
    x: "-=100vw",
    duration: 50,
    ease: "none",
    repeat: -1,
    yoyo: true
});

subarray.forEach((array, i) => {
    if (array.length == 1) {
        array[0].style.cssText = `left: ${left[0] * count}vw; top: ${getR(6)}vw;  transform: scale(0.${startScale + getR(4)})`;
        count++
    } else if (array.length == 2) {
        array[0].style.cssText = `left: ${left[0] * count}vw; top: ${getR(6)}vw;  transform: scale(0.${startScale + getR(4)})`;
        array[1].style.cssText = `left: ${left[1] * count}vw; top: ${10 + getR(4)}vw;  transform: scale(0.${startScale + getR(4)})`;
        count++
    } else {
        array[0].style.cssText = `left: ${left[0] * count}vw; top: ${getR(6)}vw;  transform: scale(0.${startScale + getR(4)})`;
        array[1].style.cssText = `left: ${left[1] * count}vw; top: ${10 + getR(4)}vw;  transform: scale(0.${startScale + getR(4)})`;
        array[2].style.cssText = `left: ${left[2] * count}vw; top: ${21 + getR(4)}vw;  transform: scale(0.${startScale + getR(4)})`;
        count++
    }


})







