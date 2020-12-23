export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio");
  const radioCoverImg = document.querySelector(".radio-cover__img");
  const radioHeaderBig = document.querySelector(".radio-header__big");
  const radioNavigation = document.querySelector(".radio-navigation");
  const radioItem = document.querySelectorAll(".radio-item");
  const radioVolumeIcon = document.querySelector(".radio-volume_icon");
  const radioVolumeRange = document.querySelector(".radio-volume_range");
  const radioStop = document.querySelector(".radio-stop");

  const audio = new Audio();
  audio.type = "audio/aac";

  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      radioStop.classList.remove("fa-stop");
      radioStop.classList.add("fa-play");
    } else {
      radio.classList.add("play");
      radioStop.classList.remove("fa-play");
      radioStop.classList.add("fa-stop");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  const changeValue = () => {
    if (audio.muted) {
      audio.muted = false;
    }
    audio.volume = radioVolumeRange.value / 100;
  };

  const toggleVolume = () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
      radioVolumeRange.value = 0;
    } else {
      radioVolumeRange.value = Math.round(audio.volume * 100);
    }
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parrent = target.closest(".radio-item");
    selectItem(parrent);

    console.log();

    const title = parrent.querySelector(".radio-name").textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parrent.querySelector(".radio-img").src;
    radioCoverImg.src = urlImg;

    radioStop.disabled = false;

    audio.src = target.dataset.radioStantion;
    audio.volume = 0.5;
    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });

  radioVolumeRange.addEventListener("input", changeValue);

  radioVolumeIcon.addEventListener("click", toggleVolume);
};
