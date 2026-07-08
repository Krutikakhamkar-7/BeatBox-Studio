const buttons = document.querySelectorAll(".sound-btn");
const volumeSlider = document.getElementById("volume");
const stopBtn = document.getElementById("stopBtn");

let currentVolume =
Number(localStorage.getItem("volume")) || 1;

volumeSlider.value = currentVolume;

const sounds = {};

const soundNames = [
    "dog",
    "cat",
    "rain",
    "ocean",
    "fire",
    "bell",
    "drum",
    "piano",
    "click",
    "laugh",
    "car",
    "alarm"
];

// Load Sounds
soundNames.forEach(name => {

    sounds[name] = new Audio(`sounds/${name}.mp3`);

    sounds[name].volume = currentVolume;

});

// Play Sound
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const sound = button.dataset.sound;

        sounds[sound].pause();

        sounds[sound].currentTime = 0;

        sounds[sound].play();

        button.classList.add("active");

        setTimeout(() => {

            button.classList.remove("active");

        }, 200);

    });

});

// Volume Control
volumeSlider.addEventListener("input", () => {

    currentVolume = volumeSlider.value;

    soundNames.forEach(name => {

        sounds[name].volume = currentVolume;

    });

    localStorage.setItem(
        "volume",
        currentVolume
    );

});

// Stop All Sounds
stopBtn.addEventListener("click", () => {

    soundNames.forEach(name => {

        sounds[name].pause();

        sounds[name].currentTime = 0;

    });

});