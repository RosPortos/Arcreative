document.addEventListener('DOMContentLoaded', function () {
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
                        onStateChange: onStateChange,
                    },
                });
            });

            previeBlock.addEventListener('click', () => {
                playerVideo.playVideo();
                previeBlock.classList.add('hide');
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

        videoWrapHover.forEach(item => {
            let previeBlock = item.querySelector('.preview');
            let player = item.querySelector('.player');
            let playerVideoId = player.getAttribute('data-video-id');
            let playerId = player.getAttribute('id');
            let playerVideo;

            window.YT.ready(function () {
                playerVideo = new YT.Player(playerId, {
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
                });
            });


            item.addEventListener('mouseover', function () {
                playerVideo.playVideo();
                setTimeout(() => playerVideo.playVideo(), 500)
                previeBlock.classList.add('hide')
            });

            item.addEventListener('mouseout', function () {
                playerVideo.pauseVideo();
                previeBlock.classList.remove('hide')
            });


        });
















    }

    videoBlock()






});







