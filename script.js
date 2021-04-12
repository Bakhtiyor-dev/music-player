const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
let playing = false;

playBtn.addEventListener('click', function() {
    if (playing) {
        pause();
        playing = false;
    } else {
        play();
        playing = true;

    }
});

function play() {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    musicContainer.classList.add('play');
    audio.play();

}

function pause() {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    musicContainer.classList.remove('play');
    audio.pause();
}

const duration = audio.duration;

setInterval(function() {
    progress.style.width = (audio.currentTime / duration) * 100 + '%';
}, 1000);