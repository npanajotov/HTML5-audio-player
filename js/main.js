var audio = document.getElementById('audio');
var playlistElement = document.getElementsByClassName('playlist')[0];
var playlist = document.getElementsByClassName('playlist')[0].getElementsByTagName('button');
var play_pause = document.getElementsByClassName('control')[0].getElementsByTagName('button')[0];
var now_playing = document.getElementsByClassName('control')[0].getElementsByClassName('now-playing')[0];
var info = document.getElementsByClassName('info')[0];
var image = info.getElementsByTagName('img')[0];
var song = info.getElementsByClassName('song')[0];
var author = info.getElementsByClassName('author')[0];
var composer = info.getElementsByClassName('composer')[0];
var year = info.getElementsByClassName('year')[0];
var show_hide_playlist = info.getElementsByClassName('playlist-btn')[0];
var currently = document.getElementsByClassName('time')[0].getElementsByTagName('span')[0];
var total = document.getElementsByClassName('time')[0].getElementsByTagName('span')[1];

for (var i = 0; i < playlist.length; i++) {
    playlist[i].addEventListener("click", function () {
        var n_source = this.getAttribute('data-audio');
        var n_song = this.getAttribute('data-song');
        var n_author = this.getAttribute('data-author');
        var n_composer = this.getAttribute('data-composer');
        var n_year = this.getAttribute('data-year');
        var n_image = this.getAttribute('data-image');
        if (audio.canPlayType('audio/mp3')) {
            audio.src = 'tracks/' + n_source;
            song.innerHTML = n_song;
            composer.innerHTML = n_composer;
            author.innerHTML = n_author;
            year.innerHTML = n_year;
            now_playing.innerHTML = n_song;
            image.src = 'images/' + n_image;
        }
        audio.currentTime = 0;
        play_pause.innerHTML = '<i class="fa fa-pause"></i>';
        audio.play();
    });
}
play_pause.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        this.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        this.innerHTML = '<i class="fa fa-play"></i>';
    }
});

audio.addEventListener('loadedmetadata', function () {
    var minutes = Math.floor(parseInt(audio.duration) / 60) % 60;
    var seconds = parseInt(audio.duration) % 60;
    var sec = seconds < 10 ? "0" + seconds : seconds;
    total.innerHTML = minutes + ":" + sec;
});
audio.addEventListener('timeupdate', function () {
    var minutes = Math.floor(parseInt(audio.currentTime) / 60) % 60;
    var seconds = parseInt(audio.currentTime) % 60;
    var sec = seconds < 10 ? "0" + seconds : seconds;
    currently.innerHTML = minutes + ":" + sec;
});
show_hide_playlist.addEventListener('click', function () {
    if (playlistElement.classList.contains('closed')) {
        playlistElement.className = 'playlist';
    } else {
        playlistElement.className += ' closed';
    }
});