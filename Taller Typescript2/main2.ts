//NO COMPILAR EL ARCHIVO AL COMPILAR TIENE UN ERROR, LOS ERRORES FUERON ARREGLADOS A MANO EN EL JS
import { series } from './data.js';
var carta_1 = document.getElementById("1");
if (carta_1) {
    carta_1.addEventListener("click", function() { carta1(1); });
}
else {
    console.error("Elemento '1' no encontrado en el documento.");
}

var carta_2 = document.getElementById("2");
if (carta_2) {
    carta_2.addEventListener("click", function() { carta1(2); });
}
else {
    console.error("Elemento '2' no encontrado en el documento.");
}

var carta_3 = document.getElementById("3");
if (carta_3) {
    carta_3.addEventListener("click", function() { carta1(3); });
}
else {
    console.error("Elemento '3' no encontrado en el documento.");
}

var carta_4 = document.getElementById("4");
if (carta_4) {
    carta_4.addEventListener("click", function() { carta1(4); });
}
else {
    console.error("Elemento '4' no encontrado en el documento.");
}

var carta_5 = document.getElementById("5");
if (carta_5) {
    carta_5.addEventListener("click", function() { carta1(5); });
}
else {
    console.error("Elemento '5' no encontrado en el documento.");
}

var carta_6 = document.getElementById("6");
if (carta_6) {
    carta_6.addEventListener("click", function() { carta1(6); });
}
else {
    console.error("Elemento '5' no encontrado en el documento.");
}


var cartaActual;

function carta1(id) {
    if (cartaActual) {
        cartaActual.remove(); 
    }

    series.forEach(function (c) {
        if (c.id == id) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-4");
            cardDiv.classList.add("col-sm-12");
            cardDiv.classList.add("card");
            cardDiv.style.width = "18rem";
           
            var img = document.createElement("img");
            img.src = c.image; 
            img.classList.add("card-img-top");
            img.alt = "...";
            
            var cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body");
            
            var cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = c.name;
            
            var cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = c.description;
            
            
            var platformText = document.createElement("p");
            platformText.innerText = "Platform: ";

            
            var platformLink = document.createElement("a");
            platformLink.href = c.platform;
            platformLink.innerText = c.platform; 
            
            
            platformText.appendChild(platformLink);
            
            
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(platformText);

            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBodyDiv);
            
            var originalDiv = document.getElementById("div-original");
            if (originalDiv) {
                originalDiv.appendChild(cardDiv);
            } else {
                console.error("Elemento 'div-original' no encontrado en el documento.");
            }

            cartaActual = cardDiv;
        }
    });
}
