"use strict";

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
    const content = document.getElementById("main");
    content.style.visibility = "visible";
    setTimeout(() => {
        myConfetti();
    }, 300);
})

const button = document.getElementById("button");
const effectiveFan = new Audio("./media/21歳.wav");


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
