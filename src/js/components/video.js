function videoBlock() {

    const videoWrap = document.querySelectorAll('.video-wrapper')
    const videoWrapHover = document.querySelectorAll('.video-wrapper-hover')

    videoWrap.forEach(item => {
        let previeBlock = item.querySelector('.preview');
        let player = item.querySelector('.player');
        let playerVideoId = player.getAttribute('data-video-id');
        let playerId = player.getAttribute('id');
        let switchStatus = 0;
        let playerVideo;

        window.YT.ready(function () {
            playerVideo = new YT.Player(playerId, {
                videoId: playerVideoId,
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

            previeBlock.addEventListener('click', () => {
                play()
            });
        }

        function play() {
            playerVideo.playVideo();
            previeBlock.classList.add('hide');
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

    videoWrapHover.forEach(item => {
        let previeBlock = item.querySelector('.preview');
        let player = item.querySelector('.player');
        let playerVideoId = player.getAttribute('data-video-id');
        let playerId = player.getAttribute('id');
        let switchStatus = 0;

        let playerVideo;

        window.YT.ready(function () {
            playerVideo = new YT.Player(playerId, {
                videoId: playerVideoId,
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    enablejsapi: 1,
                    origin: window.location.origin,
                },
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
        }

        function play() {
            playerVideo.playVideo();
            previeBlock.classList.add('hide');
        }

        previeBlock.addEventListener('mouseenter', function () {
            play();
        });


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














}

videoBlock()