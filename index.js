"use strict";

const button = document.getElementById("button");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const effectiveFan = new Audio("./media/21歳.wav");
const congratulations = new Audio("./media/おめでとう.mp3");
const fanfare = new Audio("./media/F-ZEROGXfanfare.mp3");

button.addEventListener("click", (e) => {
    myConfetti();
    effectiveFan.play();
    effectiveFan.currentTime = 0;
});

const myConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 100,
        shapes: ["star", "square", "square"],
        colors: ["#00ffff", "#00bfff", "#0080ff", "#0040ff", "#00ffbf"]
    })
};

submit.addEventListener("click", (e) => {
    const value = input.value;
    document.getElementById("input").value = "";
    if (value !== "!") {
        return;
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    setTimeout(() => {
        const accent = document.querySelector(".accent");
        const blue = document.querySelector(".blue");
        const mainText = document.getElementById("mainText");
        mainText.classList.add("new");
        accent.style.visibility = "visible";
        setTimeout(() => {
            mainText.classList.add("neo");
            mainText.innerHTML = "お誕生日 おでめとう！！";
            mainText.prepend(blue);
            const subText = document.querySelector(".text-wrapper");
            const answer = document.querySelector(".answer");
            const buttonWrapper = document.querySelector(".button-wrapper");
            const special = document.querySelector(".special");
            subText.remove();
            answer.remove();
            buttonWrapper.style.display = "block";
            special.style.display = "block";
            fanfare.volume = 0.3
            fanfare.play();
        }, 1800);
    }, 1000);
});

const hiddenButton = document.getElementById("hiddenButton");
hiddenButton.addEventListener("click", (e) => {
    congratulations.play();
    congratulations.currentTime = 0;
});
