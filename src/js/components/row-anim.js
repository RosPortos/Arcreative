function rowAnim(direction, elements) {
    const blocks = gsap.utils.toArray(elements);
    const videoWrapHover = document.querySelectorAll('.video-wrapper-hover')

    let currentWidth = 0;
    let prevWidth = 0;
    let widest;

    blocks.forEach((el, i) => {
        const width = gsap.getProperty(el, "width");
        if (width > prevWidth) {
            widest = width;
        }
        gsap.set(el, { x: currentWidth });
        currentWidth += width;
        prevWidth = width;
    });

    const totalWidth = currentWidth;

    videoWrapHover.forEach(item => {
        item.addEventListener('mouseover', function () {
            tl.pause();
        });

        item.addEventListener('mouseout', function () {
            tl.play();
        });
    });

    const tl = gsap.to(blocks, {
        x: `${direction}=${totalWidth}`,
        repeat: -1,
        duration: 25,
        ease: "none",
        repeatRefresh: true,
        modifiers: {
            x: gsap.utils.unitize((x) =>
                gsap.utils.wrap(-widest, totalWidth - widest, x)
            )
        }
    });
}


rowAnim('-', ".row-img-item.left-move >div")
rowAnim('+', ".row-img-item.right-move >div")