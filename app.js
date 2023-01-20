const APIKEY = 'ab2768d6397d9dc54a898a3b0595b30e';
const recuperation = document.getElementById('recuperation');
const envoi = document.getElementById('envoi');

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var ville = document.getElementById("in").value;
    // Afficher la valeur
    


var url = `https://api.openweathermap.org/data/2.5/weather?q=${ville},fr&APPID=${APIKEY}&units=metric&lang=fr`;





fetch(url).then(response =>
     response.json().then((data) => {
        console.log(data);
        
        var iconcode = data.weather[0].icon;
        var x = document.querySelector(".icon");
        x.setAttribute("src", "http://openweathermap.org/img/w/" + iconcode + ".png");
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".etat").innerHTML = data.weather[0].main;
        document.querySelector(".ville").innerHTML = data.name;
     })
);
};
