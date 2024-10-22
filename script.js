

  // Array of track sources
const tracks = [
  { title: 'Rushing Back - iLektron', src: 'track1.mp3' },
  { title: 'Formula - Labyrinth', src: 'track2.mp3' },
  { title: 'United in Grief - Kendrick Lamar', src: 'track3.mp3' },
  { title: 'Pink + White - Frank Ocean', src: 'track4.mp3' },
  { title: 'Flying - Curbi', src: 'newtrack1.mp3' },
  { title: 'Silence - Borne', src: 'newtrack2.mp3' },
  { title: 'Rhinestone - Flume', src: 'newtrack3.mp3' },
  { title: 'Pepper - Skrillex', src: 'newtrack4.mp3' },
  { title: 'Make it Bun Dem - Skrillex', src: 'tracklike1.mp3' },
  { title: 'Runnin - 21 Savage', src: 'tracklike2.mp3' },
  { title: 'Skeletons - Travis Scott', src: 'tracklike3.mp3' },
  { title: 'Flashing Lights - Kanye West', src: 'tracklike4.mp3' },
  { title: 'Shallows - Lady Gaga', src: 'trending1.mp3' },
  { title: 'Running Out of Time - Tyler, The Creator', src: 'trending2.mp3' },
  { title: 'Sidewalks - The Weeknd', src: 'trending3.mp3' },
  { title: 'Inhale Exhale - Skrillex', src: 'trending4.mp3' },
  { title: 'Yeezus - Kanye West', src: 'albumrelease1.mp3' },
  { title: 'Astroworld - Travis Scott', src: 'albumrelease2.mp3' },
  { title: 'Midnight - Taylor Swift', src: 'albumrelease3.mp3' },
  { title: 'Born to Die - Lana Del Rey', src: 'albumrelease4.mp3' },
  { title: 'Dark Side of the Moon - Pink Floyd', src: 'albumrelease5.mp3' },
  { title: 'Mix One - Peekaboo', src: 'favoritemix1.mp3' },
  { title: 'Mix Two - Flowdan', src: 'favoritemix2.mp3' },
  { title: 'Mix Three - Fred again...', src: 'favoritemix3.mp3' },
  { title: 'Mix Four - Skrillex', src: 'favoritemix4.mp3' },
  { title: 'Mix Five - Skrillex', src: 'favoritemix5.mp3' }
];

const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Function to play the selected track
function playTrack(src) {
  audioSource.src = src;
  audioPlayer.load(); // Load the new source
  audioPlayer.play(); // Play the track
}

// Add event listeners to track images
document.querySelectorAll('.track').forEach((trackElement, index) => {
  trackElement.addEventListener('click', () => {
      playTrack(tracks[index].src);
  });
});

// Previous and Next track functionality
let currentTrackIndex = 0;

document.getElementById('prevTrack').addEventListener('click', () => {
  if (currentTrackIndex > 0) {
      currentTrackIndex--;
      playTrack(tracks[currentTrackIndex].src);
  }
});

document.getElementById('nextTrack').addEventListener('click', () => {
  if (currentTrackIndex < tracks.length - 1) {
      currentTrackIndex++;
      playTrack(tracks[currentTrackIndex].src);
  }
});

