
# JavaScript für Einsteiger - Programmieren wie ein Videospiel 🎮

## Was ist JavaScript?

Stell dir vor, eine Webseite ist wie ein Haus:
- **HTML** ist das Gerüst (Wände, Türen, Fenster)
- **CSS** ist die Farbe und Dekoration
- **JavaScript** macht alles lebendig - wie Lichtschalter, Türklingel und alles was sich bewegt!

JavaScript ist die Sprache, die Webseiten zum Leben erweckt. Mit JavaScript kannst du:
- Buttons klickbar machen
- Spiele programmieren
- Formulare prüfen
- Animationen erstellen
- Und vieles mehr!

## Kapitel 1: Variablen - Deine Schatzkisten 📦

### Was sind Variablen?

Variablen sind wie Kisten, in die du Sachen reinpacken kannst. Jede Kiste hat einen Namen, damit du sie wiederfindest.

```javascript
// Eine Kiste namens "meinName" mit deinem Namen drin
let meinName = "Max";

// Eine Kiste für dein Alter
let meinAlter = 12;

// Eine Kiste für deine Lieblingszahl
let lieblingszahl = 7;
```

### Die drei Arten von Kisten

```javascript
// LET - Diese Kiste kannst du immer wieder neu befüllen
let punkte = 0;
punkte = 10;  // Jetzt sind 10 Punkte drin
punkte = 20;  // Jetzt sind 20 Punkte drin

// CONST - Diese Kiste ist versiegelt, einmal rein, immer drin
const geburtstag = "15. März";
// geburtstag = "16. März";  // FEHLER! Geht nicht!

// VAR - Die alte Art (benutzen wir nicht mehr, ist wie ein kaputter Karton)
var altmodisch = "nicht benutzen";
```

### Probier es aus!

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Meine erste Variable</h1>
    <button onclick="zeigeName()">Klick mich!</button>
    <p id="ausgabe"></p>
    
    <script>
        let meinName = "Dein Name hier";  // Ändere das!
        
        function zeigeName() {
            document.getElementById("ausgabe").innerHTML = 
                "Hallo, " + meinName + "! 👋";
        }
    </script>
</body>
</html>
```

## Kapitel 2: Datentypen - Was kann in die Kisten rein? 🎁

### Die verschiedenen Sachen, die du speichern kannst:

```javascript
// TEXT (String) - Alles was in Anführungszeichen steht
let nachricht = "Hallo Welt";
let emoji = "😊";

// ZAHLEN (Number) - Ohne Anführungszeichen
let ganzeZahl = 42;
let kommaZahl = 3.14;
let minusZahl = -10;

// WAHRHEITSWERTE (Boolean) - Nur Ja oder Nein
let binIchCool = true;   // ja!
let hausaufgabenGemacht = false;  // ups...

// LISTEN (Array) - Wie ein Regal mit mehreren Fächern
let meineLieblingsessen = ["Pizza", "Burger", "Eis"];
let zahlenListe = [1, 2, 3, 4, 5];

// OBJEKTE - Wie ein Steckbrief
let meinHaustier = {
    name: "Bello",
    art: "Hund",
    alter: 3,
    süß: true
};
```

### Der Typ-Detektiv

```javascript
// Mit typeof kannst du herausfinden, was etwas ist
let geheimnis = 42;
console.log(typeof geheimnis);  // "number"

let rätsel = "Hallo";
console.log(typeof rätsel);     // "string"
```

### Cooles Beispiel: Der Steckbrief-Generator

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Erstelle deinen Steckbrief!</h2>
    <input type="text" id="name" placeholder="Dein Name">
    <input type="number" id="alter" placeholder="Dein Alter">
    <input type="text" id="hobby" placeholder="Dein Hobby">
    <button onclick="erstelleSteckbrief()">Steckbrief erstellen</button>
    <div id="steckbrief"></div>
    
    <script>
        function erstelleSteckbrief() {
            // Wir holen uns die Werte aus den Eingabefeldern
            let person = {
                name: document.getElementById("name").value,
                alter: Number(document.getElementById("alter").value),
                hobby: document.getElementById("hobby").value,
                cool: true  // Natürlich bist du cool!
            };
            
            // Wir zeigen den Steckbrief an
            document.getElementById("steckbrief").innerHTML = `
                <h3>📋 Dein Steckbrief:</h3>
                <p>Name: ${person.name}</p>
                <p>Alter: ${person.alter} Jahre</p>
                <p>Hobby: ${person.hobby}</p>
                <p>Cool? ${person.cool ? "Ja! 😎" : "Hmm..."}</p>
            `;
        }
    </script>
</body>
</html>
```

## Kapitel 3: Rechnen und Vergleichen - Der Taschenrechner im Code 🧮

### Mathe ist einfach!

```javascript
// Plus und Minus - wie in der Schule
let summe = 5 + 3;      // 8
let differenz = 10 - 4;  // 6

// Mal und Geteilt
let produkt = 3 * 4;     // 12
let ergebnis = 20 / 5;   // 4

// Der Rest (Modulo) - Was bleibt übrig?
let rest = 10 % 3;      // 1 (10 geteilt durch 3 = 3, Rest 1)

// Klammern funktionieren auch!
let rechnung = (5 + 3) * 2;  // 16
```

### Vergleichen - Ist das gleich?

```javascript
// Ist gleich?
5 == 5    // true (ja!)
5 == 6    // false (nein!)

// Ist WIRKLICH gleich? (auch der Typ)
5 === "5"   // false (Zahl ist nicht gleich Text!)
5 === 5     // true (perfekt gleich!)

// Größer, kleiner?
10 > 5      // true (10 ist größer als 5)
3 < 7       // true (3 ist kleiner als 7)
5 >= 5      // true (5 ist größer oder gleich 5)

// Ungleich?
5 != 3      // true (5 ist nicht 3)
```

### Spiel: Rate die Zahl!

```html
<!DOCTYPE html>
<html>
<body>
    <h2>🎲 Rate meine Zahl (1-10)</h2>
    <input type="number" id="tipp" min="1" max="10">
    <button onclick="raten()">Raten!</button>
    <p id="ergebnis"></p>
    
    <script>
        // Der Computer denkt sich eine Zahl aus
        const geheimeZahl = Math.floor(Math.random() * 10) + 1;
        let versuche = 0;
        
        function raten() {
            versuche++;
            let tipp = Number(document.getElementById("tipp").value);
            let nachricht = "";
            
            if (tipp === geheimeZahl) {
                nachricht = `🎉 RICHTIG! Es war ${geheimeZahl}! Du hast ${versuche} Versuche gebraucht!`;
            } else if (tipp > geheimeZahl) {
                nachricht = "📉 Zu hoch! Versuch es nochmal!";
            } else {
                nachricht = "📈 Zu niedrig! Versuch es nochmal!";
            }
            
            document.getElementById("ergebnis").innerHTML = nachricht;
        }
    </script>
</body>
</html>
```

## Kapitel 4: Entscheidungen treffen - Wenn dies, dann das! 🤔

### IF-ELSE - Der Entscheider

Stell dir vor, du stehst vor einer Eisdiele:

```javascript
let geld = 5;
let eisPreis = 3;

if (geld >= eisPreis) {
    console.log("Juhu! Ich kann mir ein Eis kaufen! 🍦");
} else {
    console.log("Oh nein, nicht genug Geld... 😢");
}
```

### Mehrere Entscheidungen

```javascript
let note = 85;

if (note >= 90) {
    console.log("Sehr gut! ⭐");
} else if (note >= 80) {
    console.log("Gut! 👍");
} else if (note >= 70) {
    console.log("Okay! 🙂");
} else if (note >= 60) {
    console.log("Geht so... 😐");
} else {
    console.log("Mehr üben! 💪");
}
```

### UND / ODER - Kombinierte Bedingungen

```javascript
let alter = 12;
let erlaubnisVonEltern = true;

// && bedeutet UND - Beides muss stimmen
if (alter >= 12 && erlaubnisVonEltern) {
    console.log("Du darfst das Videospiel spielen!");
}

// || bedeutet ODER - Eines muss stimmen
let hatGeld = false;
let hatKreditkarte = true;

if (hatGeld || hatKreditkarte) {
    console.log("Du kannst bezahlen!");
}

// ! bedeutet NICHT - Dreht um
let regnet = false;
if (!regnet) {  // wenn es NICHT regnet
    console.log("Lass uns rausgehen!");
}
```

### Interaktiv: Der Türsteher-Simulator

```html
<!DOCTYPE html>
<html>
<body>
    <h2>🎭 Kommst du in den Club?</h2>
    <label>Alter: <input type="number" id="alter"></label><br>
    <label>VIP? <input type="checkbox" id="vip"></label><br>
    <label>Dresscode OK? <input type="checkbox" id="dresscode"></label><br>
    <button onclick="prüfeEinlass()">Einlass prüfen</button>
    <p id="entscheidung"></p>
    
    <script>
        function prüfeEinlass() {
            let alter = Number(document.getElementById("alter").value);
            let istVIP = document.getElementById("vip").checked;
            let dresscodeOK = document.getElementById("dresscode").checked;
            
            let nachricht = "";
            
            if (istVIP) {
                nachricht = "🌟 VIP! Komm rein!";
            } else if (alter < 16) {
                nachricht = "🚫 Zu jung, sorry!";
            } else if (alter >= 18 && dresscodeOK) {
                nachricht = "✅ Willkommen!";
            } else if (alter >= 16 && alter < 18 && dresscodeOK) {
                nachricht = "🎉 Teenie-Disco bis 22 Uhr!";
            } else if (!dresscodeOK) {
                nachricht = "👔 Bitte Dresscode beachten!";
            } else {
                nachricht = "❓ Computer sagt nein...";
            }
            
            document.getElementById("entscheidung").innerHTML = nachricht;
        }
    </script>
</body>
</html>
```

## Kapitel 5: Schleifen - Wiederhole dich nicht! 🔄

### FOR-Schleife - Wenn du weißt, wie oft

Stell dir vor, du musst 10 Liegestütze machen:

```javascript
// Statt das hier zu schreiben:
console.log("Liegestütz 1");
console.log("Liegestütz 2");
// ... und so weiter

// Schreibst du eine Schleife:
for (let i = 1; i <= 10; i++) {
    console.log("Liegestütz " + i);
}
```

### Die FOR-Schleife erklärt

```javascript
for (START; BEDINGUNG; VERÄNDERUNG) {
    // Code der wiederholt wird
}

// Beispiel:
for (let i = 0; i < 5; i++) {
    // i = 0: Start bei 0
    // i < 5: Mache weiter solange i kleiner als 5 ist
    // i++: Erhöhe i nach jedem Durchlauf um 1
    console.log("Runde " + i);
}
// Ausgabe: Runde 0, Runde 1, Runde 2, Runde 3, Runde 4
```

### WHILE-Schleife - Solange bis...

```javascript
let leben = 3;

while (leben > 0) {
    console.log("Du hast noch " + leben + " Leben!");
    leben--;  // Ein Leben verlieren
}
console.log("Game Over!");
```

### Arrays durchlaufen

```javascript
let freunde = ["Max", "Lisa", "Tom", "Emma"];

// Mit for-of (einfacher!)
for (let freund of freunde) {
    console.log("Hallo " + freund + "!");
}

// Mit klassischer for-Schleife
for (let i = 0; i < freunde.length; i++) {
    console.log("Freund Nr. " + (i+1) + ": " + freunde[i]);
}
```

### Spiel: Der Countdown-Timer

```html
<!DOCTYPE html>
<html>
<body>
    <h2>⏰ Countdown!</h2>
    <input type="number" id="startZeit" value="10" min="1" max="60">
    <button onclick="starteCountdown()">Start!</button>
    <div id="anzeige" style="font-size: 48px; margin: 20px;">⏱️</div>
    
    <script>
        let läuft = false;
        
        function starteCountdown() {
            if (läuft) return;  // Verhindert mehrfaches Starten
            läuft = true;
            
            let zeit = Number(document.getElementById("startZeit").value);
            let anzeige = document.getElementById("anzeige");
            
            let countdown = setInterval(function() {
                anzeige.innerHTML = zeit;
                
                if (zeit <= 3) {
                    anzeige.style.color = "red";
                }
                
                if (zeit === 0) {
                    anzeige.innerHTML = "💥 BOOM!";
                    clearInterval(countdown);
                    läuft = false;
                    
                    // Nach 2 Sekunden zurücksetzen
                    setTimeout(function() {
                        anzeige.innerHTML = "⏱️";
                        anzeige.style.color = "black";
                    }, 2000);
                }
                
                zeit--;
            }, 1000);  // Jede Sekunde (1000 Millisekunden)
        }
    </script>
</body>
</html>
```

## Kapitel 6: Funktionen - Deine eigenen Befehle! 🎯

### Was sind Funktionen?

Funktionen sind wie Rezepte oder Anleitungen. Du schreibst einmal auf, was gemacht werden soll, und kannst es dann immer wieder benutzen!

```javascript
// Eine einfache Funktion
function sagHallo() {
    console.log("Hallo!");
    console.log("Wie geht's?");
}

// Die Funktion aufrufen (benutzen)
sagHallo();  // Führt die Befehle aus
sagHallo();  // Kannst du so oft machen wie du willst!
```

### Funktionen mit Eingaben (Parameter)

```javascript
// Eine Funktion die Namen begrüßt
function begrüße(name) {
    console.log("Hallo " + name + "!");
}

begrüße("Max");    // "Hallo Max!"
begrüße("Lisa");   // "Hallo Lisa!"

// Mit mehreren Parametern
function stelleVor(name, alter, hobby) {
    console.log("Ich bin " + name);
    console.log("Ich bin " + alter + " Jahre alt");
    console.log("Ich mag " + hobby);
}

stelleVor("Tom", 12, "Gaming");
```

### Funktionen mit Rückgabe

```javascript
// Diese Funktion gibt ein Ergebnis zurück
function addiere(a, b) {
    return a + b;  // Gibt das Ergebnis zurück
}

let ergebnis = addiere(5, 3);  // ergebnis = 8
console.log(ergebnis);

// Praktisches Beispiel
function istVolljährig(alter) {
    if (alter >= 18) {
        return true;
    } else {
        return false;
    }
}

// Oder kürzer:
function istVolljährig(alter) {
    return alter >= 18;
}
```

### Funktionen-Baukasten

```html
<!DOCTYPE html>
<html>
<body>
    <h2>🛠️ Funktionen-Werkstatt</h2>
    <button onclick="würfeln()">🎲 Würfeln</button>
    <button onclick="münzeWerfen()">🪙 Münze werfen</button>
    <button onclick="zufallsName()">👤 Zufallsname</button>
    <button onclick="motivationsspruch()">💪 Motivation</button>
    <p id="resultat" style="font-size: 24px; margin: 20px;"></p>
    
    <script>
        function zeige(text) {
            document.getElementById("resultat").innerHTML = text;
        }
        
        function würfeln() {
            let zahl = Math.floor(Math.random() * 6) + 1;
            let würfel = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
            zeige(würfel[zahl - 1] + " Du hast eine " + zahl + " gewürfelt!");
        }
        
        function münzeWerfen() {
            let zufall = Math.random();
            if (zufall < 0.5) {
                zeige("👑 Kopf!");
            } else {
                zeige("🔢 Zahl!");
            }
        }
        
        function zufallsName() {
            let vornamen = ["Super", "Mega", "Ultra", "Hyper", "Giga"];
            let nachnamen = ["Held", "Ninja", "Pirat", "Ritter", "Zauberer"];
            
            let vorname = vornamen[Math.floor(Math.random() * vornamen.length)];
            let nachname = nachnamen[Math.floor(Math.random() * nachnamen.length)];
            
            zeige("Dein Held: " + vorname + "-" + nachname);
        }
        
        function motivationsspruch() {
            let sprüche = [
                "Du schaffst das! 💪",
                "Glaub an dich! ⭐",
                "Heute ist dein Tag! ☀️",
                "Niemals aufgeben! 🚀",
                "Du bist großartig! 🌟"
            ];
            
            let spruch = sprüche[Math.floor(Math.random() * sprüche.length)];
            zeige(spruch);
        }
    </script>
</body>
</html>
```

## Kapitel 7: Arrays - Deine Listen 📝

### Was sind Arrays?

Arrays sind wie eine Schublade mit nummerierten Fächern. Jedes Fach hat eine Nummer (Index), die bei 0 anfängt!

```javascript
// Ein Array erstellen
let früchte = ["Apfel", "Banane", "Orange", "Erdbeere"];

// Auf Elemente zugreifen (Start bei 0!)
console.log(früchte[0]);  // "Apfel" (erstes Element)
console.log(früchte[1]);  // "Banane" (zweites Element)
console.log(früchte[3]);  // "Erdbeere" (viertes Element)

// Die Anzahl der Elemente
console.log(früchte.length);  // 4
```

### Array-Superkräfte

```javascript
let meineListe = ["Pizza", "Burger"];

// Am Ende hinzufügen
meineListe.push("Pommes");
// Jetzt: ["Pizza", "Burger", "Pommes"]

// Am Anfang hinzufügen
meineListe.unshift("Salat");
// Jetzt: ["Salat", "Pizza", "Burger", "Pommes"]

// Letztes Element entfernen
let letztes = meineListe.pop();
// letztes = "Pommes", Liste = ["Salat", "Pizza", "Burger"]

// Erstes Element entfernen
let erstes = meineListe.shift();
// erstes = "Salat", Liste = ["Pizza", "Burger"]

// Element ändern
meineListe[0] = "Spaghetti";
// Jetzt: ["Spaghetti", "Burger"]
```

### Durch Arrays wandern

```javascript
let spiele = ["Minecraft", "Fortnite", "Roblox", "Among Us"];

// Mit forEach (für jedes Element)
spiele.forEach(function(spiel) {
    console.log("Ich spiele gerne " + spiel);
});

// Mit for-of
for (let spiel of spiele) {
    console.log(spiel + " macht Spaß!");
}

// Mit Index
for (let i = 0; i < spiele.length; i++) {
    console.log((i + 1) + ". " + spiele[i]);
}
```

### Playlist-Manager

```html
<!DOCTYPE html>
<html>
<body>
    <h2>🎵 Meine Playlist</h2>
    <input type="text" id="neuerSong" placeholder="Song hinzufügen">
    <button onclick="songHinzufügen()">➕ Hinzufügen</button>
    <button onclick="zufallsSong()">🎲 Zufälliger Song</button>
    <button onclick="alleLöschen()">🗑️ Alle löschen</button>
    
    <div id="playlist"></div>
    <div id="jetztSpielt" style="margin-top: 20px; font-size: 20px;"></div>
    
    <script>
        let songs = ["Happy", "Shake it Off", "Thunder"];
        
        function zeigePlaylist() {
            let html = "<h3>Songs (" + songs.length + "):</h3><ul>";
            
            songs.forEach(function(song, index) {
                html += `<li>
                    ${song} 
                    <button onclick="songLöschen(${index})">❌</button>
                    <button onclick="spieleSong('${song}')">▶️</button>
                </li>`;
            });
            
            html += "</ul>";
            document.getElementById("playlist").innerHTML = html;
        }
        
        function songHinzufügen() {
            let neuerSong = document.getElementById("neuerSong").value;
            if (neuerSong) {
                songs.push(neuerSong);
                document.getElementById("neuerSong").value = "";
                zeigePlaylist();
            }
        }
        
        function songLöschen(index) {
            songs.splice(index, 1);  // Entfernt 1 Element an Position index
            zeigePlaylist();
        }
        
        function spieleSong(song) {
            document.getElementById("jetztSpielt").innerHTML = 
                "🎵 Spielt jetzt: " + song;
        }
        
        function zufallsSong() {
            if (songs.length > 0) {
                let zufall = Math.floor(Math.random() * songs.length);
                spieleSong(songs[zufall]);
            }
        }
        
        function alleLöschen() {
            if (confirm("Wirklich alle Songs löschen?")) {
                songs = [];
                zeigePlaylist();
                document.getElementById("jetztSpielt").innerHTML = "";
            }
        }
        
        // Playlist beim Start anzeigen
        zeigePlaylist();
    </script>
</body>
</html>
```

## Kapitel 8: Events - Wenn etwas passiert! 🎪

### Was sind Events?

Events sind Dinge, die passieren - wie wenn du auf einen Button klickst, eine Taste drückst oder die Maus bewegst. JavaScript kann darauf reagieren!

### Click-Events - Der Klassiker

```javascript
// HTML: <button id="meinButton">Klick mich!</button>

let button = document.getElementById("meinButton");

button.addEventListener("click", function() {
    alert("Du hast mich geklickt!");
});

// Oder direkt im HTML:
// <button onclick="machWas()">Klick!</button>
```

### Verschiedene Event-Typen

```javascript
let element = document.getElementById("meinElement");

// Maus-Events
element.addEventListener("mouseover", function() {
    console.log("Maus drüber!");
});

element.addEventListener("mouseout", function() {
    console.log("Maus weg!");
});

// Tastatur-Events
document.addEventListener("keydown", function(event) {
    console.log("Taste gedrückt: " + event.key);
    
    if (event.key === "Enter") {
        console.log("Enter wurde gedrückt!");
    }
});

// Input-Events
let eingabe = document.getElementById("eingabe");
eingabe.addEventListener("input", function() {
    console.log("Text geändert zu: " + this.value);
});
```

### Das Event-Objekt

```javascript
button.addEventListener("click", function(event) {
    // event enthält Infos über das Event
    console.log("Geklickt bei Position:", event.clientX, event.clientY);
    console.log("Welcher Button:", event.button);  // 0 = links, 1 = mitte, 2 = rechts
});
```

### Reaktionstest-Spiel

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #spielfeld {
            width: 500px;
            height: 300px;
            border: 3px solid black;
            position: relative;
            background: lightblue;
            margin: 20px auto;
        }
        
        #ziel {
            width: 50px;
            height: 50px;
            background: red;
            border-radius: 50%;
            position: absolute;
            cursor: pointer;
            display: none;
        }
        
        #statistik {
            text-align: center;
            font-size: 20px;
        }
        
        .bereit {
            background: yellow !important;
        }
        
        .los {
            background: green !important;
        }
    </style>
</head>
<body>
    <h2>⚡ Reaktionstest</h2>
    <div id="spielfeld">
        <div id="ziel"></div>
    </div>
    <div id="statistik">
        <button onclick="spielStarten()">Spiel starten!</button>
        <p id="zeit"></p>
        <p id="rekord">Rekord: ---</p>
    </div>
    
    <script>
        let startZeit;
        let rekord = Infinity;
        let warteTimer;
        
        function spielStarten() {
            let ziel = document.getElementById("ziel");
            let spielfeld = document.getElementById("spielfeld");
            
            // Ziel verstecken
            ziel.style.display = "none";
            spielfeld.className = "bereit";
            document.getElementById("zeit").innerHTML = "Warte...";
            
            // Zufällige Wartezeit (1-5 Sekunden)
            let wartezeit = Math.random() * 4000 + 1000;
            
            warteTimer = setTimeout(function() {
                // Ziel an zufälliger Position zeigen
                let x = Math.random() * 450;
                let y = Math.random() * 250;
                
                ziel.style.left = x + "px";
                ziel.style.top = y + "px";
                ziel.style.display = "block";
                
                spielfeld.className = "los";
                startZeit = Date.now();
                document.getElementById("zeit").innerHTML = "KLICK!";
            }, wartezeit);
        }
        
        document.getElementById("ziel").addEventListener("click", function() {
            if (startZeit) {
                let reaktionszeit = Date.now() - startZeit;
                document.getElementById("zeit").innerHTML = 
                    "Reaktionszeit: " + reaktionszeit + " ms";
                
                if (reaktionszeit < rekord) {
                    rekord = reaktionszeit;
                    document.getElementById("rekord").innerHTML = 
                        "🏆 Neuer Rekord: " + rekord + " ms";
                }
                
                this.style.display = "none";
                document.getElementById("spielfeld").className = "";
                startZeit = null;
            }
        });
        
        // Zu früh geklickt?
        document.getElementById("spielfeld").addEventListener("click", function(e) {
            if (e.target === this && this.className === "bereit") {
                clearTimeout(warteTimer);
                document.getElementById("zeit").innerHTML = 
                    "❌ Zu früh! Warte auf Grün!";
                this.className = "";
            }
        });
    </script>
</body>
</html>
```

## Kapitel 9: Das große Finale - Baue dein eigenes Spiel! 🎮

Jetzt wo du die Grundlagen kennst, lass uns alles zusammenbringen und ein kleines Spiel bauen!

### Snake Light - Das Sammler-Spiel

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Arial, sans-serif;
        }
        
        #spielbereich {
            width: 400px;
            height: 400px;
            border: 3px solid #333;
            position: relative;
            background: #111;
            margin: 20px;
        }
        
        .spieler {
            width: 20px;
            height: 20px;
            background: lime;
            position: absolute;
            border-radius: 3px;
        }
        
        .futter {
            width: 20px;
            height: 20px;
            background: red;
            position: absolute;
            border-radius: 50%;
        }
        
        .bonus {
            width: 20px;
            height: 20px;
            background: gold;
            position: absolute;
            border-radius: 50%;
            animation: pulse 0.5s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        #anzeige {
            display: flex;
            gap: 30px;
            font-size: 20px;
        }
        
        #gameOver {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>🐍 Snake Light</h1>
    <div id="anzeige">
        <span>Punkte: <span id="punkte">0</span></span>
        <span>Level: <span id="level">1</span></span>
        <span>Zeit: <span id="zeit">30</span></span>
    </div>
    
    <div id="spielbereich">
        <div class="spieler" id="spieler"></div>
        <div id="gameOver">
            <h2>Game Over!</h2>
            <p>Punkte: <span id="endpunkte"></span></p>
            <button onclick="neustart()">Nochmal spielen</button>
        </div>
    </div>
    
    <div>
        <button onclick="spielStart()">Start</button>
        <button onclick="pause()">Pause</button>
    </div>
    
    <p>Benutze die Pfeiltasten oder WASD zum Bewegen!</p>
    
    <script>
        // Spielvariablen
        let spieler = {
            x: 200,
            y: 200,
            geschwindigkeit: 20
        };
        
        let punkte = 0;
        let level = 1;
        let zeitÜbrig = 30;
        let spielLäuft = false;
        let richtung = null;
        let spielInterval;
        let zeitInterval;
        
        // Spieler-Element
        let spielerElement = document.getElementById("spieler");
        
        // Steuerung
        document.addEventListener("keydown", function(e) {
            if (!spielLäuft) return;
            
            switch(e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    richtung = "oben";
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    richtung = "unten";
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    richtung = "links";
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    richtung = "rechts";
                    break;
            }
        });
        
        function bewegeSpieler() {
            if (!richtung) return;
            
            let neueX = spieler.x;
            let neueY = spieler.y;
            
            switch(richtung) {
                case "oben":
                    neueY -= spieler.geschwindigkeit;
                    break;
                case "unten":
                    neueY += spieler.geschwindigkeit;
                    break;
                case "links":
                    neueX -= spieler.geschwindigkeit;
                    break;
                case "rechts":
                    neueX += spieler.geschwindigkeit;
                    break;
            }
            
            // Wände prüfen
            if (neueX >= 0 && neueX <= 380 && neueY >= 0 && neueY <= 380) {
                spieler.x = neueX;
                spieler.y = neueY;
                
                spielerElement.style.left = spieler.x + "px";
                spielerElement.style.top = spieler.y + "px";
                
                prüfeKollision();
            }
        }
        
        function erstelleFutter(typ = "normal") {
            let futter = document.createElement("div");
            futter.className = typ === "bonus" ? "bonus" : "futter";
            
            let x = Math.floor(Math.random() * 20) * 20;
            let y = Math.floor(Math.random() * 20) * 20;
            
            futter.style.left = x + "px";
            futter.style.top = y + "px";
            futter.dataset.x = x;
            futter.dataset.y = y;
            futter.dataset.typ = typ;
            
            document.getElementById("spielbereich").appendChild(futter);
            
            if (typ === "bonus") {
                // Bonus verschwindet nach 3 Sekunden
                setTimeout(function() {
                    if (futter.parentNode) {
                        futter.remove();
                    }
                }, 3000);
            }
        }
        
        function prüfeKollision() {
            let alleFutter = document.querySelectorAll(".futter, .bonus");
            
            alleFutter.forEach(function(futter) {
                let futterX = parseInt(futter.dataset.x);
                let futterY = parseInt(futter.dataset.y);
                
                if (Math.abs(spieler.x - futterX) < 20 && 
                    Math.abs(spieler.y - futterY) < 20) {
                    
                    if (futter.dataset.typ === "bonus") {
                        punkte += 5;
                        zeitÜbrig += 5;
                    } else {
                        punkte += 1;
                    }
                    
                    futter.remove();
                    aktualisiereAnzeige();
                    
                    // Neues Futter erstellen
                    erstelleFutter();
                    
                    // Level erhöhen?
                    if (punkte % 10 === 0) {
                        level++;
                        erstelleFutter("bonus");
                        aktualisiereAnzeige();
                    }
                }
            });
        }
        
        function aktualisiereAnzeige() {
            document.getElementById("punkte").textContent = punkte;
            document.getElementById("level").textContent = level;
            document.getElementById("zeit").textContent = zeitÜbrig;
        }
        
        function spielStart() {
            if (spielLäuft) return;
            
            spielLäuft = true;
            richtung = null;
            
            // Spielschleife
            spielInterval = setInterval(bewegeSpieler, 100);
            
            // Zeit-Countdown
            zeitInterval = setInterval(function() {
                zeitÜbrig--;
                aktualisiereAnzeige();
                
                if (zeitÜbrig <= 0) {
                    spielEnde();
                }
            }, 1000);
            
            // Erstes Futter
            erstelleFutter();
            erstelleFutter();
            erstelleFutter();
        }
        
        function pause() {
            spielLäuft = !spielLäuft;
            
            if (!spielLäuft) {
                clearInterval(spielInterval);
                clearInterval(zeitInterval);
            } else {
                spielInterval = setInterval(bewegeSpieler, 100);
                zeitInterval = setInterval(function() {
                    zeitÜbrig--;
                    aktualisiereAnzeige();
                    
                    if (zeitÜbrig <= 0) {
                        spielEnde();
                    }
                }, 1000);
            }
        }
        
        function spielEnde() {
            spielLäuft = false;
            clearInterval(spielInterval);
            clearInterval(zeitInterval);
            
            document.getElementById("endpunkte").textContent = punkte;
            document.getElementById("gameOver").style.display = "block";
        }
        
        function neustart() {
            // Alles zurücksetzen
            spieler.x = 200;
            spieler.y = 200;
            spielerElement.style.left = "200px";
            spielerElement.style.top = "200px";
            
            punkte = 0;
            level = 1;
            zeitÜbrig = 30;
            richtung = null;
            
            // Altes Futter entfernen
            document.querySelectorAll(".futter, .bonus").forEach(f => f.remove());
            
            document.getElementById("gameOver").style.display = "none";
            aktualisiereAnzeige();
            
            spielStart();
        }
    </script>
</body>
</html>
```

## Abschluss: Du bist jetzt ein JavaScript-Ninja! 🥷

### Was du gelernt hast:

✅ **Variablen** - Daten in Kisten speichern  
✅ **Datentypen** - Verschiedene Arten von Daten  
✅ **Operatoren** - Rechnen und vergleichen  
✅ **If-Else** - Entscheidungen treffen  
✅ **Schleifen** - Dinge wiederholen  
✅ **Funktionen** - Eigene Befehle erstellen  
✅ **Arrays** - Mit Listen arbeiten  
✅ **Events** - Auf Klicks und Tasten reagieren  
✅ **Spiele bauen** - Alles zusammenbringen!

### Deine nächsten Abenteuer:

1. **Ändere das Snake-Spiel:**
   - Füge neue Power-Ups hinzu
   - Ändere die Farben
   - Mache es schwieriger

2. **Baue eigene Projekte:**
   - Ein Quiz-Spiel
   - Einen Taschenrechner
   - Eine Todo-Liste
   - Ein Zeichenprogramm

3. **Lerne weiter:**
   - CSS-Animationen
   - Mehr über Objekte
   - APIs benutzen
   - Frameworks wie React

### Goldene Regeln für JavaScript-Helden:

1. **Fehler sind deine Freunde** - Jeder Fehler macht dich besser!
2. **console.log() ist dein bester Freund** - Nutze es zum Verstehen!
3. **Google ist erlaubt** - Auch Profis googeln ständig!
4. **Übung macht den Meister** - Code jeden Tag ein bisschen!
5. **Hab Spaß!** - Programmieren ist wie LEGO mit Superkräften!

### Geheime Tastenkombinationen:

- **F12** - Öffnet die Entwickler-Tools (deine Geheimwaffe!)
- **Strg + S** - Speichern (immer speichern!)
- **Strg + Z** - Rückgängig (Fehler? Kein Problem!)
- **Strg + Shift + I** - Console öffnen

### Letzte Worte

Du hast es geschafft! Du kannst jetzt JavaScript! 🎉

Denk daran: Jeder Programmierer hat mal klein angefangen. Auch die Leute, die Minecraft, Fortnite oder deine Lieblings-Apps gebaut haben, haben mit "Hello World" angefangen.

Jetzt bist du dran! Geh raus und baue coole Sachen! Die Welt wartet auf deine Ideen!

**Happy Coding! 🚀👾🎮**

---

*P.S. Wenn etwas nicht funktioniert, keine Panik! Schau in die Console (F12), lies die Fehlermeldung, und versuch's nochmal. Du schaffst das!*