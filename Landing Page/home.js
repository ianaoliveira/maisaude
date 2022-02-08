var videoPlayer = document.getElementsByClassName("video-conceitual");


videoPlayer.play()
videoPlayer.volume = 0.5;

videoPlayer.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
        videoPlayer.pause();
        videoPlayer.firstChild.nodeValue = 'Play';
    } else {
        videoPlayer.play();
        videoPlayer.firstChild.nodeValue = 'Pause';
    }
});

