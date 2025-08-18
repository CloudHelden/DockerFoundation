# JavaScript Grundlagen - Die 10 wichtigsten Konzepte

## Einführung
JavaScript ist die Programmiersprache des Webs. Mit diesem Tutorial lernt ihr die 10 grundlegendsten Konzepte, die ihr braucht, um mit JavaScript zu programmieren.

## 1. Variablen - Daten speichern

Variablen sind wie Schubladen, in denen ihr Informationen speichern könnt.

```javascript
// Mit let können Werte geändert werden
let alter = 15;
alter = 16;  // Das geht!

// Mit const bleiben Werte konstant
const name = "Max";
// name = "Peter";  // Error! Kann nicht geändert werden

// var sollte vermieden werden (veraltet)
var alteSyntax = "nicht mehr verwenden";
```

**Übung:** Erstelle Variablen für deinen Namen, dein Alter und deine Lieblingsfarbe.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Meine Daten</h1>
    <p id="ausgabe"></p>
    
    <script>
        // Hier deine Variablen erstellen
        let meinName = "Dein Name";
        let meinAlter = 0;
        const lieblingsFarbe = "blau";
        
        document.getElementById("ausgabe").innerHTML = 
            "Ich heiße " + meinName + ", bin " + meinAlter + 
            " Jahre alt und mag " + lieblingsFarbe;
    </script>
</body>
</html>
```

## 2. Datentypen - Verschiedene Arten von Daten

JavaScript kennt verschiedene Arten von Daten:

```javascript
// String (Text)
let text = "Hallo Welt";
let auchText = 'Mit einfachen Anführungszeichen';

// Number (Zahlen)
let ganzeZahl = 42;
let kommaZahl = 3.14;

// Boolean (Wahr/Falsch)
let istWahr = true;
let istFalsch = false;

// Array (Liste)
let früchte = ["Apfel", "Banane", "Orange"];

// Object (Objekt mit Eigenschaften)
let person = {
    name: "Anna",
    alter: 25,
    stadt: "Berlin"
};

// Undefined und Null
let nochNichtDefiniert;  // undefined
let absichtlichLeer = null;
```

**Übung:** Welchen Datentyp haben diese Werte?

```javascript
// Was für ein Typ bin ich?
let a = 100;           // ?
let b = "100";         // ?
let c = true;          // ?
let d = [1, 2, 3];     // ?
let e = {x: 10};       // ?

// Mit typeof kannst du es herausfinden:
console.log(typeof a);  // "number"
```

## 3. Operatoren - Rechnen und Vergleichen

```javascript
// Mathematische Operatoren
let summe = 10 + 5;        // 15
let differenz = 10 - 5;    // 5
let produkt = 10 * 5;      // 50
let quotient = 10 / 5;     // 2
let rest = 10 % 3;         // 1 (Rest der Division)

// Vergleichsoperatoren
let gleich = (5 == "5");   // true (nur Wert)
let exaktGleich = (5 === "5");  // false (Wert UND Typ)
let ungleich = (5 != 3);   // true
let größer = (10 > 5);     // true
let kleinerGleich = (5 <= 5);  // true

// Logische Operatoren
let undBedingung = (true && false);  // false (beide müssen wahr sein)
let oderBedingung = (true || false); // true (eines muss wahr sein)
let nicht = !true;                   // false (umkehren)
```

**Interaktives Beispiel:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Taschenrechner</h2>
    <input type="number" id="zahl1" placeholder="Erste Zahl">
    <input type="number" id="zahl2" placeholder="Zweite Zahl">
    <button onclick="rechnen()">Berechnen</button>
    <p id="ergebnis"></p>
    
    <script>
        function rechnen() {
            let a = Number(document.getElementById("zahl1").value);
            let b = Number(document.getElementById("zahl2").value);
            
            let ergebnisse = `
                ${a} + ${b} = ${a + b}<br>
                ${a} - ${b} = ${a - b}<br>
                ${a} * ${b} = ${a * b}<br>
                ${a} / ${b} = ${a / b}<br>
                ${a} ist größer als ${b}: ${a > b}
            `;
            
            document.getElementById("ergebnis").innerHTML = ergebnisse;
        }
    </script>
</body>
</html>
```

## 4. If-Else - Entscheidungen treffen

```javascript
let alter = 18;

if (alter >= 18) {
    console.log("Du bist volljährig!");
} else if (alter >= 16) {
    console.log("Du darfst Moped fahren!");
} else {
    console.log("Du bist noch zu jung!");
}

// Kurzschreibweise (Ternary Operator)
let nachricht = (alter >= 18) ? "Erwachsen" : "Minderjährig";
```

**Interaktives Beispiel - Notenrechner:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Notenrechner</h2>
    <input type="number" id="punkte" placeholder="Punkte (0-100)">
    <button onclick="berechneNote()">Note berechnen</button>
    <p id="note"></p>
    
    <script>
        function berechneNote() {
            let punkte = Number(document.getElementById("punkte").value);
            let note;
            
            if (punkte >= 90) {
                note = "1 - Sehr gut! 🌟";
            } else if (punkte >= 80) {
                note = "2 - Gut! 👍";
            } else if (punkte >= 70) {
                note = "3 - Befriedigend 🙂";
            } else if (punkte >= 60) {
                note = "4 - Ausreichend 😐";
            } else if (punkte >= 50) {
                note = "5 - Mangelhaft 😕";
            } else {
                note = "6 - Ungenügend 😔";
            }
            
            document.getElementById("note").innerHTML = 
                `Mit ${punkte} Punkten bekommst du: ${note}`;
        }
    </script>
</body>
</html>
```

## 5. Schleifen - Wiederholungen

```javascript
// For-Schleife (wenn du weißt, wie oft)
for (let i = 0; i < 5; i++) {
    console.log("Durchlauf Nr. " + i);
}

// While-Schleife (solange Bedingung wahr ist)
let zähler = 0;
while (zähler < 5) {
    console.log("Zähler ist: " + zähler);
    zähler++;
}

// For-of-Schleife (für Arrays)
let tiere = ["Hund", "Katze", "Maus"];
for (let tier of tiere) {
    console.log("Tier: " + tier);
}
```

**Interaktives Beispiel - Multiplikationstabelle:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Einmaleins Generator</h2>
    <input type="number" id="zahl" placeholder="Welche Zahl?" min="1" max="10">
    <button onclick="erstelleTabelle()">Erstellen</button>
    <div id="tabelle"></div>
    
    <script>
        function erstelleTabelle() {
            let zahl = Number(document.getElementById("zahl").value);
            let html = "<h3>Das " + zahl + "er Einmaleins:</h3>";
            
            for (let i = 1; i <= 10; i++) {
                html += zahl + " × " + i + " = " + (zahl * i) + "<br>";
            }
            
            document.getElementById("tabelle").innerHTML = html;
        }
    </script>
</body>
</html>
```

## 6. Funktionen - Code wiederverwenden

```javascript
// Funktion ohne Parameter
function sagHallo() {
    console.log("Hallo!");
}

// Funktion mit Parametern
function begrüße(name) {
    console.log("Hallo " + name + "!");
}

// Funktion mit Rückgabewert
function addiere(a, b) {
    return a + b;
}

// Arrow Function (moderne Schreibweise)
const multipliziere = (a, b) => a * b;

// Funktionen aufrufen
sagHallo();                    // "Hallo!"
begrüße("Lisa");              // "Hallo Lisa!"
let summe = addiere(5, 3);    // summe = 8
let produkt = multipliziere(4, 5);  // produkt = 20
```

**Interaktives Beispiel - Funktionen-Playground:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Funktionen Tester</h2>
    <button onclick="zufallsZahl()">Zufallszahl (1-100)</button>
    <button onclick="istGerade()">Ist 7 gerade?</button>
    <button onclick="berechneAlter()">Alter berechnen</button>
    <p id="ausgabe"></p>
    
    <script>
        function zufallsZahl() {
            let zufall = Math.floor(Math.random() * 100) + 1;
            zeige("Zufallszahl: " + zufall);
        }
        
        function istGerade() {
            let zahl = 7;
            let gerade = (zahl % 2 === 0);
            zeige(zahl + " ist " + (gerade ? "gerade" : "ungerade"));
        }
        
        function berechneAlter() {
            let geburtsjahr = prompt("In welchem Jahr wurdest du geboren?");
            let alter = 2024 - geburtsjahr;
            zeige("Du bist ungefähr " + alter + " Jahre alt");
        }
        
        function zeige(text) {
            document.getElementById("ausgabe").innerHTML = text;
        }
    </script>
</body>
</html>
```

## 7. Arrays - Listen von Daten

```javascript
// Array erstellen
let früchte = ["Apfel", "Banane", "Orange"];

// Zugriff auf Elemente (Index startet bei 0!)
console.log(früchte[0]);  // "Apfel"
console.log(früchte[2]);  // "Orange"

// Array-Methoden
früchte.push("Traube");     // Am Ende hinzufügen
früchte.pop();              // Letztes entfernen
früchte.unshift("Erdbeere"); // Am Anfang hinzufügen
früchte.shift();            // Erstes entfernen

// Array-Länge
console.log(früchte.length);  // 3

// Durch Array iterieren
früchte.forEach(function(frucht) {
    console.log("Ich mag " + frucht);
});
```

**Interaktives Beispiel - Todo-Liste:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Meine Todo-Liste</h2>
    <input type="text" id="neueAufgabe" placeholder="Neue Aufgabe">
    <button onclick="hinzufügen()">Hinzufügen</button>
    <button onclick="letzteEntfernen()">Letzte entfernen</button>
    <ul id="todoListe"></ul>
    
    <script>
        let todos = [];
        
        function hinzufügen() {
            let aufgabe = document.getElementById("neueAufgabe").value;
            if (aufgabe) {
                todos.push(aufgabe);
                document.getElementById("neueAufgabe").value = "";
                anzeigen();
            }
        }
        
        function letzteEntfernen() {
            todos.pop();
            anzeigen();
        }
        
        function anzeigen() {
            let html = "";
            todos.forEach(function(todo, index) {
                html += "<li>" + todo + "</li>";
            });
            document.getElementById("todoListe").innerHTML = html;
        }
    </script>
</body>
</html>
```

## 8. Objekte - Komplexe Datenstrukturen

```javascript
// Objekt erstellen
let person = {
    name: "Max",
    alter: 25,
    stadt: "München",
    hobbies: ["Lesen", "Sport", "Kochen"]
};

// Auf Eigenschaften zugreifen
console.log(person.name);        // "Max"
console.log(person["alter"]);    // 25

// Eigenschaften ändern
person.alter = 26;
person.beruf = "Entwickler";  // Neue Eigenschaft hinzufügen

// Methoden in Objekten
let auto = {
    marke: "BMW",
    baujahr: 2020,
    alter: function() {
        return 2024 - this.baujahr;
    }
};

console.log(auto.alter());  // 4
```

**Interaktives Beispiel - Charaktergenerator:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>RPG Charaktergenerator</h2>
    <input type="text" id="charName" placeholder="Name">
    <select id="charKlasse">
        <option>Krieger</option>
        <option>Magier</option>
        <option>Schurke</option>
    </select>
    <button onclick="erstelleCharakter()">Charakter erstellen</button>
    <div id="charakterInfo"></div>
    
    <script>
        function erstelleCharakter() {
            let charakter = {
                name: document.getElementById("charName").value,
                klasse: document.getElementById("charKlasse").value,
                level: 1,
                leben: 100,
                stärke: Math.floor(Math.random() * 20) + 10,
                magie: Math.floor(Math.random() * 20) + 10,
                geschick: Math.floor(Math.random() * 20) + 10,
                
                beschreibung: function() {
                    return `
                        <h3>${this.name} - Level ${this.level} ${this.klasse}</h3>
                        <p>❤️ Leben: ${this.leben}</p>
                        <p>💪 Stärke: ${this.stärke}</p>
                        <p>✨ Magie: ${this.magie}</p>
                        <p>🏃 Geschick: ${this.geschick}</p>
                    `;
                }
            };
            
            document.getElementById("charakterInfo").innerHTML = 
                charakter.beschreibung();
        }
    </script>
</body>
</html>
```

## 9. DOM Manipulation - HTML verändern

```javascript
// Elemente finden
let element = document.getElementById("meinDiv");
let klassen = document.getElementsByClassName("meinKlasse");
let tags = document.getElementsByTagName("p");

// Modernes Finden (querySelector)
let erstesP = document.querySelector("p");
let allePs = document.querySelectorAll("p");

// Inhalt ändern
element.innerHTML = "<strong>Neuer HTML Inhalt</strong>";
element.textContent = "Nur Text, kein HTML";

// Styling ändern
element.style.color = "red";
element.style.backgroundColor = "yellow";

// Klassen manipulieren
element.classList.add("neu");
element.classList.remove("alt");
element.classList.toggle("aktiv");

// Neue Elemente erstellen
let neuesDiv = document.createElement("div");
neuesDiv.textContent = "Ich bin neu!";
document.body.appendChild(neuesDiv);
```

**Interaktives Beispiel - Farbwechsler:**

```html
<!DOCTYPE html>
<html>
<body>
    <h2>DOM Manipulation Playground</h2>
    <div id="box" style="width: 200px; height: 200px; background: lightblue; margin: 20px;">
        Klick mich!
    </div>
    <button onclick="ändereGröße()">Größe ändern</button>
    <button onclick="ändereFarbe()">Farbe ändern</button>
    <button onclick="fügeTextHinzu()">Text hinzufügen</button>
    
    <script>
        let box = document.getElementById("box");
        
        box.addEventListener("click", function() {
            this.style.borderRadius = this.style.borderRadius === "50%" ? "0" : "50%";
        });
        
        function ändereGröße() {
            let aktuelleGröße = parseInt(box.style.width);
            let neueGröße = aktuelleGröße === 200 ? 300 : 200;
            box.style.width = neueGröße + "px";
            box.style.height = neueGröße + "px";
        }
        
        function ändereFarbe() {
            let farben = ["red", "green", "blue", "yellow", "purple", "orange"];
            let zufallsFarbe = farben[Math.floor(Math.random() * farben.length)];
            box.style.backgroundColor = zufallsFarbe;
        }
        
        function fügeTextHinzu() {
            let p = document.createElement("p");
            p.textContent = "Neuer Text! " + new Date().toLocaleTimeString();
            box.appendChild(p);
        }
    </script>
</body>
</html>
```

## 10. Events - Auf Benutzeraktionen reagieren

```javascript
// Click Event
button.addEventListener("click", function() {
    console.log("Button wurde geklickt!");
});

// Mehrere Event-Typen
element.addEventListener("mouseenter", function() {
    console.log("Maus ist über dem Element");
});

element.addEventListener("keydown", function(event) {
    console.log("Taste gedrückt: " + event.key);
});

// Event mit Parameter
function klickHandler(event) {
    console.log("Geklickt bei Position:", event.clientX, event.clientY);
}
button.addEventListener("click", klickHandler);

// Event entfernen
button.removeEventListener("click", klickHandler);
```

**Großes Interaktives Beispiel - Mini-Spiel:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #spielfeld {
            width: 400px;
            height: 400px;
            border: 2px solid black;
            position: relative;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        #spieler {
            width: 50px;
            height: 50px;
            background: yellow;
            position: absolute;
            border-radius: 50%;
            top: 175px;
            left: 175px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
        }
        
        .punkt {
            width: 20px;
            height: 20px;
            background: gold;
            position: absolute;
            border-radius: 50%;
        }
        
        #punkte {
            font-size: 24px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h2>Event-Spiel: Sammle die Punkte!</h2>
    <div id="punkte">Punkte: 0</div>
    <div id="spielfeld">
        <div id="spieler">😀</div>
    </div>
    <p>Nutze die Pfeiltasten oder WASD zum Bewegen!</p>
    
    <script>
        let spieler = document.getElementById("spieler");
        let spielfeld = document.getElementById("spielfeld");
        let punkteAnzeige = document.getElementById("punkte");
        let punkte = 0;
        let x = 175;
        let y = 175;
        
        // Spieler-Bewegung
        document.addEventListener("keydown", function(event) {
            let geschwindigkeit = 25;
            
            switch(event.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    y = Math.max(0, y - geschwindigkeit);
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    y = Math.min(350, y + geschwindigkeit);
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    x = Math.max(0, x - geschwindigkeit);
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    x = Math.min(350, x + geschwindigkeit);
                    break;
            }
            
            spieler.style.left = x + "px";
            spieler.style.top = y + "px";
            
            prüfeKollision();
        });
        
        // Zufällige Punkte erstellen
        function erstellePunkt() {
            let punkt = document.createElement("div");
            punkt.className = "punkt";
            punkt.style.left = Math.random() * 380 + "px";
            punkt.style.top = Math.random() * 380 + "px";
            spielfeld.appendChild(punkt);
        }
        
        // Kollision prüfen
        function prüfeKollision() {
            let allePunkte = document.querySelectorAll(".punkt");
            allePunkte.forEach(function(punkt) {
                let punktX = parseInt(punkt.style.left);
                let punktY = parseInt(punkt.style.top);
                
                if (Math.abs(x - punktX) < 30 && Math.abs(y - punktY) < 30) {
                    punkt.remove();
                    punkte++;
                    punkteAnzeige.textContent = "Punkte: " + punkte;
                    
                    // Spieler wird glücklicher
                    if (punkte < 5) {
                        spieler.textContent = "😀";
                    } else if (punkte < 10) {
                        spieler.textContent = "😃";
                    } else {
                        spieler.textContent = "🤩";
                    }
                }
            });
            
            // Neuen Punkt erstellen wenn alle gesammelt
            if (document.querySelectorAll(".punkt").length === 0) {
                setTimeout(erstellePunkt, 500);
            }
        }
        
        // Spiel starten
        for (let i = 0; i < 3; i++) {
            erstellePunkt();
        }
        
        // Mausklick-Event für Spielfeld
        spielfeld.addEventListener("click", function(event) {
            if (event.target === spielfeld) {
                x = event.offsetX - 25;
                y = event.offsetY - 25;
                spieler.style.left = x + "px";
                spieler.style.top = y + "px";
                prüfeKollision();
            }
        });
    </script>
</body>
</html>
```

## Zusammenfassung & Nächste Schritte

### Was du gelernt hast:
1. **Variablen** - Daten speichern
2. **Datentypen** - Verschiedene Arten von Daten
3. **Operatoren** - Rechnen und vergleichen
4. **If-Else** - Entscheidungen treffen
5. **Schleifen** - Code wiederholen
6. **Funktionen** - Code organisieren
7. **Arrays** - Listen verwalten
8. **Objekte** - Komplexe Daten strukturieren
9. **DOM** - HTML manipulieren
10. **Events** - Auf Benutzer reagieren

### Übungsprojekte für Anfänger:

#### Projekt 1: Würfelspiel
Erstelle ein Spiel, wo zwei Spieler würfeln und der höhere gewinnt.

#### Projekt 2: Quiz-App
Baue ein Quiz mit Fragen und Multiple-Choice-Antworten.

#### Projekt 3: Einkaufsliste
Eine interaktive Liste mit Hinzufügen, Löschen und Markieren.

#### Projekt 4: Taschenrechner
Ein voll funktionsfähiger Taschenrechner mit allen Grundrechenarten.

#### Projekt 5: Memory-Spiel
Klassisches Karten-Memory mit JavaScript.

### Hilfreiche Ressourcen:

- **Console nutzen**: Drücke F12 im Browser für die Entwicklertools
- **console.log()**: Dein bester Freund beim Debuggen
- **MDN Web Docs**: Die beste JavaScript-Referenz
- **W3Schools**: Gute Tutorials mit Try-it-Editor

### Tipps zum Lernen:

1. **Übung macht den Meister** - Code jeden Tag ein bisschen
2. **Fehler sind normal** - Jeder Fehler ist eine Lernchance
3. **Klein anfangen** - Erst einfache Projekte, dann komplexere
4. **Code lesen** - Schau dir Code von anderen an
5. **Experimentieren** - Probiere Dinge aus und schau was passiert

### Debugging-Tipps:

```javascript
// Nutze console.log zum Debuggen
console.log("Hier bin ich im Code");
console.log("Wert von x:", x);

// Nutze den Debugger
debugger;  // Code pausiert hier

// Nutze try-catch für Fehlerbehandlung
try {
    // Code der fehlschlagen könnte
    let result = riskyFunction();
} catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
}
```

Viel Erfolg beim JavaScript lernen! 🚀 

Remember: Der beste Weg zu lernen ist, einfach anzufangen und Dinge auszuprobieren!