const logosBox = document.querySelectorAll('.clients__wrapper div');
const parentImg = document.querySelector('.clients__wrapper');
const tl = gsap.timeline();
let startScale = 6;
let size = 3;
let subarray = [];
let left = [16, 18, 17];
let count = 0;

logosBox.forEach(item => {
    let clone = item.cloneNode(true);
    parentImg.appendChild(clone);
});

const logos = [...document.querySelectorAll('.clients__wrapper div')]
const logosBoxAfter = document.querySelectorAll('.clients__wrapper div');
const logosImg = document.querySelectorAll('.clients__wrapper img');

for (let i = 0; i < Math.ceil(logos.length / size); i++) {
    subarray[i] = logos.slice((i * size), (i * size) + size);
}

function getR(max) {
    return Math.floor(Math.random() * (max));
}

tl.to(logosImg, {
    y: "random(-0, 20, 6)",
    x: "random(-0, 20, 6)",
    duration: 1,
    ease: "none",
    repeat: -1,
    repeatRefresh: true
})



gsap.to(logosBoxAfter, {
    x: "-100vw",
    duration: 40,
    ease: "none",
    repeat: -1,
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







