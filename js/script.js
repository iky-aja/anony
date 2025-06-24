// Ambil tombol No
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = 'absolute'; // pastikan posisi absolute supaya bisa pindah
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Ambil tombol Yes dan video container
const yesBtn = document.getElementById("yesBtn");
const videoContainer = document.getElementById("videoContainer");

yesBtn.addEventListener("click", function() {
  videoContainer.style.display = "block";
  videoContainer.classList.add("video-animate");
});

// Tunggu 2 detik, lalu tampilkan video
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("videoContainer").style.display = "flex";
    document.body.style.flexDirection = "column";
  }, 2000);
  