/* document.addEventListener('DOMContentLoaded', function () {
    function videoBlock() {

        const videoWrap = document.querySelectorAll('.video-wrapper')
        const videoWrapHover = document.querySelectorAll('.video-wrapper-hover')
        const playerList = document.querySelectorAll('.player');

        playerList.forEach((el, i) => {
            el.setAttribute('id', `player${i}`)
        });

        videoWrap.forEach(item => {
            let previeBlock = item.querySelector('.preview');
            let player = item.querySelector('.player');
            let playerVideoId = previeBlock.getAttribute('data-video-id');
            let playerId = player.getAttribute('id');
            let switchStatus = 0;
            let playerVideo;

            window.YT.ready(function () {
                playerVideo = new YT.Player(playerId, {
                    videoId: playerVideoId,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onStateChange,
                    },
                });
            });

            function onPlayerReady() {
                previeBlock.addEventListener('click', () => {
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

        
    }


    videoBlock();






}); */




document.addEventListener('DOMContentLoaded', function () {
    function videoBlock() {

        const videoWrap = document.querySelectorAll('.video-wrapper')
        const playerList = document.querySelectorAll('.player');

        playerList.forEach((el, i) => {
            el.setAttribute('id', `player-${i + 1}`)
        });

        function stopVideo() {
            document.querySelectorAll("video").forEach(function (video) {
                video.pause();
            });
            document.querySelectorAll("iframe[src^='https://www.youtube.com']").forEach(item => {
                item.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
            document.querySelectorAll("iframe[src^='https://player.vimeo.com']").forEach(item => {
                item.contentWindow.postMessage('{"method":"pause"}', 'https://player.vimeo.com');
            });
        }

        videoWrap.forEach(item => {
            let previeBlock = item.querySelector('.preview');
            let player = item.querySelector('.player');
            let playerVideoId = previeBlock.getAttribute('data-video-id');
            let playerId = player.getAttribute('id');
            let type = previeBlock.getAttribute('data-video-type');
            let switchStatus = 0;
            let playerVideo;
            let video;

            if (type === "youtube") {
                previeBlock.addEventListener('click', function () {
                    stopVideo()

                    if (!previeBlock.classList.contains('init')) {
                        previeBlock.classList.add('init')

                        window.YT.ready(function () {
                            playerVideo = new YT.Player(playerId, {
                                videoId: playerVideoId,
                                events: {
                                    'onReady': onPlayerReady,
                                    'onStateChange': onStateChange,
                                },
                            });
                        });
                    }

                    function onPlayerReady() {
                        playerVideo.playVideo();
                        previeBlock.classList.add('hide');

                        previeBlock.addEventListener('click', () => {
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
            }

            if (type === "vimeo") {
                previeBlock.addEventListener('click', function () {
                    stopVideo()

                    function playVideo() {
                        previeBlock.classList.add('hide')
                        playerVideo.play();
                    }

                    if (!previeBlock.classList.contains('init')) {
                        previeBlock.classList.add('init')

                        playerVideo = new Vimeo.Player(playerId, {
                            id: playerVideoId,
                            responsive: true,
                        });

                        playVideo();
                    }

                    playVideo()

                    playerVideo.on('pause', function () {
                        previeBlock.classList.remove('hide')
                    });

                    playerVideo.on('ended', function () {
                        previeBlock.classList.remove('hide')
                    });
                });


            }

            if (type === "video") {
                previeBlock.addEventListener('click', function (e) {
                    e.stopPropagation();
                    stopVideo()
                    if (!previeBlock.classList.contains('init')) {
                        previeBlock.classList.add('init')

                        player.innerHTML =
                            `
                                <video class="default-video" controls playsinline>
                                    <source src="${playerVideoId}">
                                </video>   
                            `
                            ;

                        video = item.querySelector('.default-video')
                        video.play();
                        previeBlock.classList.add('hide');

                        video.addEventListener('pause', (event) => {
                            previeBlock.classList.remove('hide');
                        });

                        video.addEventListener('seeked', (event) => {
                            previeBlock.classList.add('hide');
                        });

                    } else {
                        video.play();
                        previeBlock.classList.add('hide');
                    }
                });
            }
        });
    }


    videoBlock();


    const videoWrapHover = document.querySelectorAll('.video-wrapper-hover')

    videoWrapHover.forEach(item => {
        let previeBlock = item.querySelector('.preview');
        let player = item.querySelector('.player');
        let playerVideoId = previeBlock.getAttribute('data-video-id');
        let playerVideoType = previeBlock.getAttribute('data-video-type');
        let playerId = player.getAttribute('id');
        let playerVideo;
        let video;

        if (playerVideoType === 'vimeo') {
            playerVideo = new Vimeo.Player(playerId, {
                id: playerVideoId,
                responsive: true,
                loop: true,
                dnt: false,
                title: false,
                controls: false
            });

            playerVideo.setVolume(0);
            item.addEventListener('mouseover', function () {
                playerVideo.play();
                previeBlock.classList.add('hide')
            });

            item.addEventListener('mouseout', function () {
                playerVideo.pause();
                previeBlock.classList.remove('hide')
            });
        }

        if (playerVideoType === 'video') {
            player.innerHTML =
                `
                                <video class="default-video"muted loop playsinline>
                                    <source src="${playerVideoId}">
                                </video>   
                            `
                ;

            video = item.querySelector('.default-video')

            item.addEventListener('mouseover', function () {
                video.play();
                previeBlock.classList.add('hide')
            });

            item.addEventListener('mouseout', function () {
                video.pause();
                previeBlock.classList.remove('hide')
            });
        }


    });




});









