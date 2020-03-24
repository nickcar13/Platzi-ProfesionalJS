import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay();
    ]
});

const button = document.querySelector("button");
const buttonMute = document.querySelector("button.mute");
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};