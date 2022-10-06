import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onPlay(data) {
  const { seconds } = data;
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log('played the video!', data);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
