const SM1 = document.getElementById("sm1");
const SM2 = document.getElementById("sm2");
const SM3 = document.getElementById("sm3");

const c1 = document.getElementById("card1");
const c2 = document.getElementById("card2");
const c3 = document.getElementById("card3");

SM1.addEventListener("click", HE1);
SM2.addEventListener("click", HE2);
SM3.addEventListener("click", HE3);

function HE1() {
    document.getElementById("card-img1").classList.toggle("change-card-img");
    document.getElementById("desc1").classList.toggle("change-card-desc");
    c1.classList.replace("card", "change-card");

    setTimeout(function(){ 
        document.getElementById("card-img1").classList.toggle("change-card-img");
        document.getElementById("desc1").classList.toggle("change-card-desc");
        c1.classList.replace("change-card", "card"); 
    }, 28000);
}


function HE2() {
    document.getElementById("card-img2").classList.toggle("change-card-img");
    document.getElementById("desc2").classList.toggle("change-card-desc");
    c2.classList.replace("card", "change-card");

    setTimeout(function(){ 
        document.getElementById("card-img2").classList.toggle("change-card-img");
        document.getElementById("desc2").classList.toggle("change-card-desc");
        c2.classList.replace("change-card", "card"); 
    }, 28000);
}

function HE3() {
    document.getElementById("card-img3").classList.toggle("change-card-img");
    document.getElementById("desc3").classList.toggle("change-card-desc");
    c3.classList.replace("card", "change-card");

    setTimeout(function(){
        document.getElementById("card-img3").classList.toggle("change-card-img");
        document.getElementById("desc3").classList.toggle("change-card-desc");
        c3.classList.replace("change-card", "card"); 
    }, 28000);
}