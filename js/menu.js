let boutton = document.querySelector(".menu");
let menu = document.querySelector(".navigation");

function explore(){
    menu.classList.toggle("display");
    console.log("Bienvenue dans le menu");
}

boutton.addEventListener('click', explore);