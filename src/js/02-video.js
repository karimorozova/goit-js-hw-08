const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const VIDEOPLAYER_CURRENT_TIME_KEY = "videoplayer-current-time";
    const playbackPosition = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME_KEY) ?? 0;

    player.on('timeupdate', throttle(timeUpdatePlayerHandler, 1000));
    player.setCurrentTime(playbackPosition);


    function timeUpdatePlayerHandler(data) {
        const currentTime = data.seconds;
        
        localStorage.setItem(VIDEOPLAYER_CURRENT_TIME_KEY, currentTime);
    }
