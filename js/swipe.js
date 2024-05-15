let swipe = document.querySelector(".swipe");
let diapo = document.querySelector(".diapo");
diapo.addEventListener('scroll', function(){
    if("scroll"){
       swipe.style.display ="none"; 
    }
    else{
        swipe.style.display = "block";
    }
    
})
