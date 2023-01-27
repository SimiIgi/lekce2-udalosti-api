// tady je místo pro náš program

/* funkcia na zmenu farby */

function zacervenaj() {
    let cerveny_text = document.querySelector(".spicilev");
    cerveny_text.classList.add("cerveny");

}


/* funkcia zvacsi */

/* function zvacsi() {
    let zvacseny_text = document.querySelector(".spicilev");
    zvacseny_text.style.fontSize = "21px";

    
} */


let tlacidlo = document.querySelector(".zvascovanie");
let text = document.querySelector(".spicilev");
let fontSize = parseFloat(getComputedStyle(text).fontSize);

tlacidlo.addEventListener("click", function () {
    fontSize += 1;
    text.style.fontSize = fontSize + "px";
});



/* funkcie na radio */

let mojeradio = document.querySelector(".radio")

function zapni_hudbu() {
    mojeradio.play();
}

function od_zaciatku() {
    mojeradio.currentTime = 0;

}

function nastav_zvuk_0() {
    mojeradio.volume = 0;
    
}

function nastav_zvuk_05() {
    mojeradio.volume = 0.5;
    
}

function nastav_zvuk1() {
    mojeradio.volume = 1;

}

function pauzni() {
    mojeradio.pause();
}


