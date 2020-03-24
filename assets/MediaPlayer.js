export default class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || []; //inicializacion

        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }

    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}