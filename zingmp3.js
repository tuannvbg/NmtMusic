var getE = document.querySelector('.logo-class');
setInterval(() => {
    getE.classList.toggle('red');
}, 1000);

var getA = document.querySelector('.BIGBANG');
setInterval(() => {
    getA.classList.toggle('red');
}, 1000);

function appearNghesi() {
    document.getElementById('baihat').style.display = "none";
    document.querySelector('#nghesi').style.display = "block";
    document.getElementById('list').style.display = "none";
}
function appearPlaylist() {
    document.getElementById('list').style.display = "block";
    document.querySelector('#nghesi').style.display = "none";
    document.getElementById('baihat').style.display = "none";
}
function appearBaihat() {
    document.getElementById('baihat').style.display = "block";
    document.querySelector('#nghesi').style.display = "none";
    document.getElementById('list').style.display = "none";
}

var btn = document.querySelector('.btn');
var lastdance = document.querySelector('#lastdance');
var btnld = document.querySelector('#btn-ld'); 
function playld() {
    if(lastdance.paused) {
        lastdance.play();
        loser.pause();
        lnfil.pause();
        ifyou.pause();
        blue.pause();
        fxxkit.pause();
        haruharu.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        lastdance.pause();
        btnld.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var blue = document.querySelector('#blue');
var btnbl = document.querySelector('#btn-bl'); 
function playbl() {
    if(blue.paused) {
        blue.play();
        loser.pause();
        lnfil.pause();
        lastdance.pause();
        ifyou.pause();
        fxxkit.pause();
        haruharu.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        blue.pause();
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var haruharu = document.querySelector('#haruharu');
var btnhh = document.querySelector('#btn-hh'); 
function playhh() {
    if(haruharu.paused) {
        haruharu.play();
        loser.pause();
        lnfil.pause();
        lastdance.pause();
        blue.pause();
        fxxkit.pause();
        ifyou.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        haruharu.pause();
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var fxxkit = document.querySelector('#fxxkit');
var btnfi = document.querySelector('#btn-fi'); 
function playfi() {
    if(fxxkit.paused) {
        fxxkit.play();
        loser.pause();
        lnfil.pause();
        lastdance.pause();
        blue.pause();
        ifyou.pause();
        haruharu.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        fxxkit.pause();
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var loser = document.querySelector('#loser');
var btnls = document.querySelector('#btn-ls'); 
function playls() {
    if(loser.paused) {
        loser.play();
        ifyou.pause();
        lnfil.pause();
        lastdance.pause();
        blue.pause();
        fxxkit.pause();
        haruharu.pause();
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btnls.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        loser.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var lnfil = document.querySelector('#lnfil');
var btnlnfil = document.querySelector('#btn-lnfil'); 
function playlnfil() {
    if(lnfil.paused) {
        lnfil.play();
        loser.pause();
        ifyou.pause();
        lastdance.pause();
        blue.pause();
        fxxkit.pause();
        haruharu.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        lnfil.pause();
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
    }
}

var ifyou = document.querySelector('#ifyou');
var btniy = document.querySelector('#btn-iy'); 
function playiy() {
    if(ifyou.paused) {
        ifyou.play();
        loser.pause();
        lnfil.pause();
        lastdance.pause();
        blue.pause();
        fxxkit.pause();
        haruharu.pause();
        btnls.innerHTML = '<i class="fas fa-play"></i>';
        btnld.innerHTML = '<i class="fas fa-play"></i>';
        btnbl.innerHTML = '<i class="fas fa-play"></i>';
        btnlnfil.innerHTML = '<i class="fas fa-play"></i>';
        btnfi.innerHTML = '<i class="fas fa-play"></i>';
        btnhh.innerHTML = '<i class="fas fa-play"></i>';
        btniy.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        
        ifyou.pause();
        btniy.innerHTML = '<i class="fas fa-play"></i>';
    }
    
}

var playlist = document.querySelector('.playlist-bar');
var play = document.querySelector('#play');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var audio_music = document.querySelector('#audio_music');
var progress = document.querySelector('#progress');
var progressInclude = document.querySelector('.progress-include');
var title = document.querySelector('#title');
var cover = document.querySelector('#cover');

//title
var songs = ['ld', 'Fit', 'HaruHaru', 'Blue', 'IfYou', 'LetNotFallInLove', 'Loser'];
let songIndex = 0;

loadsong(songs[songIndex]);

function loadsong(song) {
    title.innerText = song;
    audio_music.src = `./source/${song}.mp3`;
    cover.src = `./source/${song}.jpg`;
}

function pauseSong() {
    playlist.classList.remove('play');
    play.innerHTML = '<i class="far fa-play-circle"></i>';
    audio_music.pause();
}

function playSong() {
    playlist.classList.add('play');
    play.innerHTML = '<i class="far fa-pause-circle"></i>';
    audio_music.play();
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadsong(songs[songIndex])
    playSong();
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadsong(songs[songIndex])
    playSong();
}

function updateProgress(e) {
    var {duration, currentTime} = e.srcElement;
    var progressPrecent = (currentTime / duration) *100;
    progress.style.width = `${progressPrecent}%`
}

function setProgess(e) {
    var width = this.clientWidth;
    var clickX = e.offsetX;
    var duration = audio_music.duration;

    audio_music.currentTime = (clickX / width) * duration;
}

play.addEventListener('click', () => {
    var isPlaying = playlist.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

//change songs
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
audio_music.addEventListener('timeupdate', updateProgress);
progressInclude.addEventListener('click', setProgess);
audio_music.addEventListener('ended', nextSong);
