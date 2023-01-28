import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const userTimeLoad = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(JSON.parse(userTimeLoad));

player.on('timeupdate', throttle(
    (function(data) {
    const userTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(userTime));
}), 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});