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



    function videoBlock() {

        let playButton = document.querySelector(".play-btn");
        let previeBlock = document.querySelector('.preview');
        let videoId = document.querySelector('.player').getAttribute('data-video-id');

        let playerVideo;
        window.YT.ready(function () {
            playerVideo = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: videoId,
                events: {
                    onReady: onReady,
                    onStateChange: onStateChange,
                },
            });
        });

        function onReady() {

            let iframe = playerVideo.getIframe();
            let videoTitle = iframe.getAttribute('data-video-title');

            iframe.setAttribute('title', videoTitle);
            playButton.addEventListener('click', () => {
                play()
            });

            function play() {
                playerVideo.playVideo();
                previeBlock.classList.add('hide');
            }
        }

        function onStateChange(e) {

            if (e.data == 2) {
                previeBlock.classList.remove('hide');
            }

            if (e.data == 0) {
                previeBlock.classList.remove('hide');
            }

        }
    }

    videoBlock();

});