function videoBlock() {

    const videoWrap = document.querySelectorAll('.video-wrapper')

    videoWrap.forEach(item => {
        let playButton = item.querySelector(".play-btn");
        let previeBlock = item.querySelector('.preview');
        let player = item.querySelector('.player');
        let playerVideoId = player.getAttribute('data-video-id');
        let playerId = player.getAttribute('id');
        let playerVideo;

        window.YT.ready(function () {
            playerVideo = new YT.Player(playerId, {
                height: '360',
                width: '640',
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
        item.addEventListener('click', function () {

        });
    });











}

videoBlock();