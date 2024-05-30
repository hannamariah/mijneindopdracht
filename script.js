console.log("Hi puppy bliss");

// Constanten//
// Krijg elementen van de HTML door hun ID of tag//
const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const h2 = document.querySelector("h2");
const trekSpan = document.querySelector('#trek');
const blijdschapSpan = document.querySelector('#blijdschap');
const hygiëneSpan = document.querySelector('#hygiëne');
const voerButton = document.querySelector('#voer');
const speelButton = document.querySelector('#speel');
const schoonButton = document.querySelector('#schoon');
const speelGif = document.getElementById("mijnGif");
const schoonGif = document.getElementById("mijnGif");
const voerGif = document.getElementById("mijnGif");


// Variabelen (let) percentage begint bij 100//
let trek = 100;
let blijdschap = 100;
let hygiëne = 100;
let tamagotchiNaam;

// Functies
function logInput() {
    tamagotchiNaam = nameInput.value;
    h2.textContent = "Hi, mijn naam is " + tamagotchiNaam;
}

function updateStatus() {
    trekSpan.textContent = trek;
    blijdschapSpan.textContent = blijdschap;
    hygiëneSpan.textContent = hygiëne;
    checkPetStatus();
}

function checkPetStatus() {
    if (trek <= 0 || blijdschap <= 0 || hygiëne <= 0) {
        clearInterval(blijdschapInterval);
        clearInterval(hygiëneInterval);
        trek = 10;
        blijdschap = 10;
        hygiëne = 10;
        voerButton.disabled = true;
        speelButton.disabled = true;
        schoonButton.disabled = true;
        setTimeout(() => {
            alert("Helaas is je huisdier overleden");
        }, 100);
    }
}

function interactionFeed() {
    if (trek < 100) {
        trek += 10;
        if (trek > 100) {
            trek = 100;
        }
        if (blijdschap < 100) {
            blijdschap += 5;
        }
        updateStatus();
    }
}

function interactionPlay() {
    if (blijdschap < 100) {
        blijdschap += 10;
        if (blijdschap > 100) {
            blijdschap = 100;
        }
        if (trek > 0) {
            let randomDecrease = Math.floor(Math.random() * 10) + 1;
            trek -= randomDecrease;
            if (trek < 0) {
                trek = 0;
            }
        }
        updateStatus();
    }
}

function interactionClean() {
    if (hygiëne < 100) {
        hygiëne += 10;
        if (hygiëne > 100) {
            hygiëne = 100;
        }
        updateStatus();
    }
}

function decreaseBlijdschap() {
    if (blijdschap > 0) {
        blijdschap -= 10;
        if (blijdschap < 0) {
            blijdschap = 0;
        }
        updateStatus();
    }
}

function decreaseHygiëne() {
    if (hygiëne > 0) {
        hygiëne -= 10;
        if (hygiëne < 0) {
            hygiëne = 0;
        }
        updateStatus();
    }
}

function changeToPlayGif() {
    speelGif.src = "gifs/play.gif";
    speelGif.classList.add("stuiter"); // 
}

function changeToCleanGif() {
    schoonGif.src = "gifs/clean.gif";
    schoonGif.classList.add("stuiter"); // 
}

function changeToFeedGif() {
    voerGif.src = "gifs/feed.gif";
    voerGif.classList.add("stuiter"); // 
}

// Event listeners //
voerButton.addEventListener('click', interactionFeed);
speelButton.addEventListener('click', interactionPlay);
schoonButton.addEventListener('click', interactionClean);
nameButton.addEventListener("click", logInput);
speelButton.addEventListener("click", changeToPlayGif);
schoonButton.addEventListener("click", changeToCleanGif);
voerButton.addEventListener("click", changeToFeedGif);

const blijdschapInterval = setInterval(decreaseBlijdschap, 10000);
const hygiëneInterval = setInterval(decreaseHygiëne, 15000);

updateStatus();










