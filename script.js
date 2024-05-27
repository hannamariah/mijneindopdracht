const nameInput = document.getElementById("nameInput");

const button = document.getElementById("button");
const h2 = document.querySelector("h2");
let tamagotchiName;

function logInput() {
    tamagotchiName = nameInput.value;
    h2.textContent = "Hi, mijn naam is " + tamagotchiName;
}


button.addEventListener("click", logInput);
let tamagotchi  = {
    naam: "Tamagotchi",
    honger: 50,
    blijheid: 50,
    hygiëne: 50,
    
    toonStatus: function() {
        document.getElementById("naam").innerHTML = tamagotchi.naam;
        document.getElementById("status").innerHTML = `Trek: ${this.honger}<br>Blijheid: ${this.blijheid}<br>Hygiëne: ${this.hygiëne}`;
    },
    
    voer: function() {
        tamagotchi.honger -= 10;
        tamagotchi.blijheid += 0;
        tamagotchi.toonStatus();
        document.getElementById("huisdier").classList.add("stuiter");
        setTimeout(() => {
            document.getElementById("huisdier").classList.remove("stuiter");
        }, 600);
    },
    
    speel: function() {
        tamagotchi.honger += 5;
        tamagotchi.blijheid += 10;
        tamagotchi.hygiëne -= 5;
        tamagotchi.toonStatus();
        document.getElementById("huisdier").classList.add("stuiter");
        setTimeout(() => {
            document.getElementById("huisdier").classList.remove("stuiter");
        }, 600);
    },
    
    schoon: function() {
        tamagotchi.hygiëne += 10;
        tamagotchi.toonStatus();
        document.getElementById("huisdier").classList.add("stuiter");
        setTimeout(() => {
            document.getElementById("huisdier").classList.remove("stuiter");
        }, 600);
    }
};

document.getElementById("voer").addEventListener("click", function() {
    tamagotchi.voer();
});

document.getElementById("speel").addEventListener("click", function() {
    tamagotchi.speel();
});

document.getElementById("schoon").addEventListener("click", function() {
    tamagotchi.schoon();
});

tamagotchi.toonStatus();


document.getElementById('startKnop').addEventListener('click', function() {
    document.getElementById('mijnGif').src = 'gifs/mijnGif.gif'; // Herlaad de GIF om deze te herstarten
});

document.getElementById('stopKnop').addEventListener('click', function() {
    document.getElementById('mijnGif').src = ''; // Stop de GIF door de src leeg te maken
});

