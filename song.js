const playBtn = document.getElementById("play-song");
const audio = document.getElementById("love-audio");

if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸ stop song";
        } else {
            audio.pause();
            playBtn.textContent = "▶ play song 🤍";
        }
    });
}
