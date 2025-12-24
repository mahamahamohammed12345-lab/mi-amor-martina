const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const giftScreen = document.querySelector(".gift-screen");
const loveScreen = document.querySelector(".love-screen");

const startBtn = document.querySelector(".start-btn");
const readyBtn = document.querySelector(".ready-btn");
const openGiftBtn = document.querySelector(".open-gift-btn");

const speech = document.getElementById("speech");
const answersBox = document.querySelector(".answers");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const dogImage = document.querySelector(".dog");
const music = document.getElementById("bg-music");

const dogImages = [
    "dog1.png",
    "dog2.png",
    "dog3.png",
    "dog4.png",
    "dog5.png"
];
const questions = [
    { q: "Cuál es mi color favorito?", a1: "rojo", a2: "amarillo", correct: 2 },
    { q: "Cómo sería tu vida sin que yo  entrara en ella?", a1: "muy mala", a2: "buana", correct: 1 },
    { q: "Cómo me habría llamado mi familia si no me hubieran llamado Maha?", a1: "lama", a2: "sara", correct: 1 },
    { q: "Cuál es mi tipo de maquillaje favorito?", a1: "latino", a2: "ahumado", correct: 2 },
    { q: "me elegirás todos los días y en cada momento?", a1: "siempre amor", a2: "no se", correct: 1 },
    { q: "te sentirías feliz si de repente te dijera que te amo?", a1: "por supuesto ", a2: "noop", correct: 1 },
    { q: "quién es la mujer más hermosa del mundo? ", a1: "jennie", a2: "maha", correct: 2 },
    { q: "me amarías incluso cuando estoy celosa?", a1: "menos", a2: "y maas", correct: 2 },
    { q: "quién de nosotras se enamoró primera?", a1: "yo", a2: "tu", correct: 1 },
    { q: "puedo ser tu esposa y el amor de tu vida hasta la muerte?🤍", a1: "sssiiiii", a2: "no", correct: 1 }
];
let currentQuestion = 0;
let hearts = 3;
const heartsDiv = document.getElementById("hearts");

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    music.play();
    updateHearts();
});

readyBtn.addEventListener("click", () => {
    readyBtn.classList.add("hidden");
    answersBox.classList.remove("hidden");
    showQuestion();
});
function showQuestion() {
    const q = questions[currentQuestion];
    speech.textContent = q.q;
    answer1.textContent = q.a1;
    answer2.textContent = q.a2;

    const randomDog = Math.floor(Math.random() * dogImages.length);
    dogImage.src = dogImages[randomDog];
}
answer1.addEventListener("click", () => checkAnswer(1));
answer2.addEventListener("click", () => checkAnswer(2));

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;

    if (selected !== correctAnswer) {
        hearts--;
        updateHearts();

        if (hearts === 0) {
            alert("perdiste todos tus corazones💔 juguemos de nuevo");
            location.reload();
            return;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        gameScreen.classList.add("hidden");
        giftScreen.classList.remove("hidden");
    }
}

openGiftBtn.addEventListener("click", () => {
    document.querySelector(".gift-img").style.animation = "none";
    giftScreen.classList.add("hidden");
    loveScreen.classList.remove("hidden");
});
const playSongBtn = document.getElementById("play-song");
function updateHearts() {
    heartsDiv.textContent = "❤️ ".repeat(hearts);
}
const goToSong = document.getElementById("goToSong");

if (goToSong) {
    goToSong.addEventListener("click", () => {
        window.location.href = "song.html";
    });
}