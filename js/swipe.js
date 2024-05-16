let swipe = document.querySelectorAll("#projets .swipe");
let diapo = document.querySelectorAll("#projets .diapo");
diapo.addEventListener('scroll', function(){
    if("scroll"){
       swipe.style.display ="none"; 
    }
    else{
        swipe.style.display = "block";
    }
    
})


