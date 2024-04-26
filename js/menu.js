let boutton = document.querySelector(".hamburger");
let menu = document.querySelector(".navigation");

function explore(){
    menu.classList.toggle("display");
    console.log("je suis parvenu");
}

boutton.addEventListener('click', explore);