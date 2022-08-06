// Beim Klicken auf das Icon wird ein Graufilter angewandt

function filterFunction() {
    var gesamt = document.documentElement; // documentElement greift quasi auf den HTML-Tag zu
    if (gesamt.style.filter === "grayscale(1)") {  // Wenn vor dem Klicken der Filter aktiv ist... (filter: grayscale(1))
        gesamt.style.filter = "none"; // ...soll der Filter beim Klicken deaktiviert werden (filter: none;)
    } else {
        gesamt.style.filter = "grayscale(1)"; // Ist vor dem Klicken kein Filter aktiv, wird er beim Klicken aktiviert (filter: grayscale(1))
    }
}

// Navigationsleiste bekommt eine zusätzliche Klasse beim Scrollen + Back-to-top-button

window.onscroll = function () {scrollClass()}; // Beim Scrollen wird die Funktion scrollClass ausgelöst 

function scrollClass() {
    var navi = document.getElementById("navi"); // Es wird eine Variable für die Navigationsleiste definiert (navi)
    var backToTopBtn = document.querySelector(".back-to-top"); // Es wird eine Variable für den back-to-top-button definiert

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) { // Wenn die Scrollhöhe größer als 150px ist... 

        navi.classList.add("scrolled"); // ...wird der Navigationsleiste (navi) die Klasse .scrolled hinzugefügt 
    } else {
        navi.classList.remove("scrolled"); // Ist die Scrollhöhe geringer, wird die Klasse wieder entfernt
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.remove("hidden") //entferne ab einer Scrollhöhe von 300px die Klasse hidden, sodass der Button sichtbar wird
  } else {
    backToTopBtn.classList.add("hidden")
      }
}


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Schriftgröße größer/kleiner

let schriftgroesse = 20;

        function schriftgroesseAendern(richtung) {
            if (richtung == "groesser") {
                schriftgroesse++;
                document.querySelector("body").style.fontSize = schriftgroesse + "px";
            }
            if (richtung == "kleiner") {
                schriftgroesse--;
                document.querySelector("body").style.fontSize = schriftgroesse + "px";
            }
        }

        document.getElementById("groesser").addEventListener("click", function() {
            schriftgroesseAendern("groesser");
        });

        document.getElementById("kleiner").addEventListener("click", function() {
            schriftgroesseAendern("kleiner");
        });

