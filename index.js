let songIndex = 0;
let audioElement = new Audio("Besharam Rang Song.mp3");
let masterPlay = document.getElementById("masterplay");
let rangePicker = document.getElementById("range");
let songsItems = Array.from(document.getElementsByClassName("card1"));
let songName = document.getElementById("songName");
let songImage = document.getElementById("songI");
let songs = [
  {
    songName: "Besharam Rang",
    filePath: "0.mp3",
    coverpath:
      "https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-150x150.jpg?bch=468440",
  },
  {
    songName: "Yadav Brand 2",
    filePath: "1.mp3",
    coverpath:
      "https://c.saavncdn.com/357/Yadav-Brand-2-Hindi-2022-20220205133812-150x150.jpg",
  },
  {
    songName: "Naseeb Se",
    filePath: "2.mp3",
    coverpath:
      "https://c.saavncdn.com/824/Naseeb-Se-From-Satyaprem-Ki-Katha-Hindi-2023-20230526145336-150x150.jpg",
  },
  {
    songName: "Ram Siya Ram",
    filePath: "3.mp3",
    coverpath:
      "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-150x150.jpg",
  },

  {
    songName: "He's Soo Cute",
    filePath: "4.mp3",
    coverpath:
      "https://c.saavncdn.com/119/Major-Ajay-Krishna-Kannada-2021-20210108101001-150x150.jpg",
  },
  {
    songName: "Baarish Aayi Hai",
    filePath: "5.mp3",
    coverpath:
      "https://c.saavncdn.com/503/Baarish-Aayi-Hai-Hindi-2022-20220712053244-150x150.jpg",
  },

  {
    songName: "Apna Bana Le",
    filePath: "6.mp3",
    coverpath:
      "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221206124543-150x150.jpg",
  },
];

songsItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("ptext")[0].innerText = songs[i].songName;
});

// Handle to play and pause song

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  //Update range picker

  rangeProgress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  rangePicker.value = rangeProgress;
});

rangePicker.addEventListener("change", () => {
  audioElement.currentTime = (rangePicker.value * audioElement.duration) / 100;
});

// const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName("song-img")).forEach((element) => {
//     element.classList.remove("fa-pause");
//     element.classList.add("fa-play");
//   });
// };

Array.from(document.getElementsByClassName("song-img")).forEach((element) => {
  element.addEventListener("click", (e) => {
    // makeAllPlays();
    songIndex = parseInt(e.target.id);
    // e.target.classList.remove("fa-play");
    // e.target.classList.add("fa-pause");
    audioElement.src = `${songIndex}.mp3`;
    songImage.innerHTML = songs[songIndex].coverpath;
    songName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});

// next song

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex}.mp3`;
  songImage.innerHTML = songs[songIndex].coverpath;
  songName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

//previous song

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex}.mp3`;
  songImage.innerHTML = songs[songIndex].coverpath;
  songName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
