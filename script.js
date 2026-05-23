// script.js

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

const reveals = document.querySelectorAll(".reveal");

function revealScroll(){
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealScroll);
revealScroll();

function copyIP(){

    navigator.clipboard.writeText("play.fluxsmp.net");

    alert("Server IP copied!");
}
