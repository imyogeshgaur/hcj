const music = document.querySelector('audio');
const image = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name:"Music-1",
    title:" Astronomia",
    artist:"NCS"
},
{
    name:"Music-2",
    title:"Funtime",
    artist:"NCS"
},
{
    name:"Music-3",
    title:"Spark",
    artist:"NCS"
}

]

let isPlay = false;
const playMusic = ()=>{
    music.play();
    isPlay=true;
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animate');
};

const pauseMusic = ()=>{
    isPlay=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove('animate');
};

play.addEventListener('click',()=>{
    isPlay ? playMusic() : pauseMusic();
});

const loadSong = () =>{
   title.textContent = songs.title;
   artist.textContent = songs.artist;
   music.src = `music/${songs.name}.mp3`;
   image.src = `images/${songs.name}.jpg`;

};
songIndex = 0;

const nextSong = ()=>{
  songIndex = (songIndex + 1)/songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
  }
loadSong(songs[0]);

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);



