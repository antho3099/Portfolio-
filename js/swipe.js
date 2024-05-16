let swipe = document.querySelectorAll(".swipe");
let diapo = document.querySelectorAll(".diapo");
diapo.addEventListener('scroll', function(){
    if("scroll"){
       swipe.style.display ="none"; 
    }
    else{
        swipe.style.display = "block";
    }
    
})


