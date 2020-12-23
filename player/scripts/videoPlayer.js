export const videoPlayerInit = () => {
  const videoPlayer = document.querySelector(".video-player");
  const videoButtonPlay = document.querySelector(".video-button__play");
  const videoButtonStop = document.querySelector(".video-button__stop");
  const videoProgress = document.querySelector(".video-progress");
  const videoTimePassed = document.querySelector(".video-time__passed");
  const videoTimeTotal = document.querySelector(".video-time__total");
  const videoVolumeIcon = document.querySelector(".video-volume_icon");
  const videoVolumeRange = document.querySelector(".video-volume_range");
  const videoFullscreen = document.querySelector(".video-fullscreen");
  // let currentVolume;

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove("fa-pause");
      videoButtonPlay.classList.add("fa-play");
    } else {
      videoButtonPlay.classList.add("fa-pause");
      videoButtonPlay.classList.remove("fa-play");
    }
  };

  const togglePlay = (e) => {
    e.preventDefault();
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  const addZero = (n) => (n < 10 ? "0" + n : n);

  const changeValue = () => {
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
    }
    videoPlayer.volume = videoVolumeRange.value / 100;
  };

  const toggleVolume = () => {
    videoPlayer.muted = !videoPlayer.muted;
  };

  videoPlayer.addEventListener("click", togglePlay);
  videoButtonPlay.addEventListener("click", togglePlay);

  videoPlayer.addEventListener("play", toggleIcon);
  videoPlayer.addEventListener("pause", toggleIcon);

  videoButtonStop.addEventListener("click", stopPlay);

  videoPlayer.addEventListener("timeupdate", () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    videoTimePassed.textContent =
      addZero(minutePassed) + ":" + addZero(secondsPassed);
    videoTimeTotal.textContent =
      addZero(minuteTotal) + ":" + addZero(secondsTotal);
  });

  videoProgress.addEventListener("input", () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });

  videoVolumeRange.addEventListener("input", changeValue);

  videoPlayer.addEventListener("volumechange", () => {
    if (videoPlayer.volume > 0 && !videoPlayer.muted) {
      videoVolumeIcon.classList.remove("fa-volume-off");
      videoVolumeIcon.classList.add("fa-volume-up");
    } else {
      videoVolumeIcon.classList.remove("fa-volume-up");
      videoVolumeIcon.classList.add("fa-volume-off");
    }

    if (videoPlayer.muted) {
      videoVolumeRange.value = 0;
    } else {
      videoVolumeRange.value = Math.round(videoPlayer.volume * 100);
    }
  });

  videoVolumeIcon.addEventListener("click", toggleVolume);

  videoFullscreen.addEventListener("click", () => {
    videoPlayer.requestFullscreen();
  });

  changeValue();
};
