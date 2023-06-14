let songIndex = 0;
let audioElement = new Audio("Besharam Rang Song.mp3");
let masterPlay = document.getElementById("masterplay");
let rangePicker = document.getElementById("range");
let songsItems = Array.from(document.getElementsByClassName("card1"));
let songName = document.getElementById("songName");
let songImage = document.getElementById("songI");
let songVolumeIcon = document.querySelector("#volume-icon");
let showVolume = document.querySelector("#show-volume");
let currentVolume = document.querySelector("#volume");
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
  {
    songName: "Maiyya Mainu",
    filePath: "7.mp3",
    coverpath:
      "https://c.saavncdn.com/799/Jersey-Hindi-2021-20220412145401-150x150.jpg",
  },
  {
    songName: "Kya Loge Tum",
    filePath: "8.mp3",
    coverpath:
      "https://c.saavncdn.com/111/Kya-Loge-Tum-Hindi-2023-20230507053259-150x150.jpg",
  },
  {
    songName: "Main Khiladi (From Selfiee)",
    filePath: "9.mp3",
    coverpath:
      "https://c.saavncdn.com/019/Main-Khiladi-From-Selfiee-Hindi-2023-20230201184145-150x150.jpg",
  },
  {
    songName: "Jugnu",
    filePath: "10.mp3",
    coverpath:
      "https://c.saavncdn.com/272/Jugnu-Hindi-2021-20211024110230-150x150.jpg",
  },
  {
    songName: "Balenciaga",
    filePath: "11.mp3",
    coverpath:
      "https://c.saavncdn.com/985/Balenciaga-Hindi-2023-20230529131809-150x150.jpg",
  },
  {
    songName: "Tu Jhoothi Main Makkaar",
    filePath: "12.mp3",
    coverpath:
      "https://c.saavncdn.com/903/Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230316165419-150x150.jpg?bch=468440",
  },
  {
    songName: "Coke Studio ",
    filePath: "13.mp3",
    coverpath:
      "https://c.saavncdn.com/898/Coke-Studio-Season-14-Unknown-2022-20220509235614-150x150.jpg",
  },
  {
    songName: "DYNAMITE",
    filePath: "14.mp3",
    coverpath:
      "https://c.saavncdn.com/122/DYNAMITE-Hindi-2022-20220429202706-150x150.jpg",
  },
  {
    songName: "Gaadi Paache Gaadi",
    filePath: "15.mp3",
    coverpath:
      "https://c.saavncdn.com/326/Gaadi-Paache-Gaadi-Haryanvi-2022-20221013161516-150x150.jpg",
  },
  {
    songName: "Brahmastra",
    filePath: "16.mp3",
    coverpath:
      "https://c.saavncdn.com/625/Kumkumala-Audio-Teaser-From-Brahmastra-Telugu-Telugu-2022-20220527122104-150x150.jpg",
  },
  {
    songName: "Billi Billi",
    filePath: "17.mp3",
    coverpath:
      "https://c.saavncdn.com/348/Kisi-Ka-Bhai-Kisi-Ki-Jaan-Hindi-2023-20230427184704-150x150.jpg",
  },
  {
    songName: "Runjhun",
    filePath: "18.mp3",
    coverpath:
      "https://c.saavncdn.com/blob/939/Runjhun-Hindi-2022-20220823124353-150x150.jpg",
  },
  {
    songName: "Mast Nazron Se",
    filePath: "19.mp3",
    coverpath:
      "https://c.saavncdn.com/194/Mast-Nazron-Se-Hindi-2022-20220331031015-150x150.jpg",
  },
  {
    songName: "Amplifier",
    filePath: "20.mp3",
    coverpath:
      "https://c.saavncdn.com/471/Unforgettable-English-2009-150x150.jpg",
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
    songName.innerText = songs[songIndex].songName;
    changeImage();
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});

// next song

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 20) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex}.mp3`;
  songName.innerText = songs[songIndex].songName;
  changeImage();
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
  songName.innerText = songs[songIndex].songName;
  changeImage();
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

//change image

function changeImage() {
  let img = document.getElementById("songI");
  img.src = songs[songIndex].coverpath;
}

// song Volume controll

songVolumeIcon.addEventListener("click", muteSound);
songVolumeIcon.addEventListener("dblclick", dblmuteSound);
currentVolume.addEventListener("change", changeSound);

//mute Sound

function muteSound() {
  audioElement.volume = 0;
  showVolume.innerHTML = 0;
  currentVolume.value = 0;
  songVolumeIcon.classList.add("fa-volume-mute");
  songVolumeIcon.classList.remove("fa-volume-high");
}

function dblmuteSound() {
  showVolume.innerHTML = "";
  songVolumeIcon.classList.add("fa-volume-high");
  songVolumeIcon.classList.remove("fa-volume-mute");
}

//change volume for song

function changeSound() {
  showVolume.value = currentVolume.value;
  audioElement.volume = currentVolume.value / 100;
}

//serch
function serch() {
  let filter = document.getElementById("input-search").value.toUpperCase();
  let item = document.querySelectorAll(".card");
  let p = document.getElementsByTagName("p");

  for (var i = 0; i <= p.length; i++) {
    let a = item[i].getElementsByTagName("p")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
