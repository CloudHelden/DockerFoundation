# CSS und JavaScript Integration - How-To Guide

## Übersicht
Diese Anleitung zeigt, wie ihr eigenes CSS und JavaScript in eure HTML-Seiten einbindet und damit interaktive Elemente erstellt.

## 1. CSS einbinden

### Methode 1: Inline CSS (direkt im HTML-Tag)
```html
<p style="color: blue; font-size: 20px;">Blauer Text</p>
```

### Methode 2: Internes CSS (im `<head>` Bereich)
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .mein-stil {
            color: green;
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="mein-stil">Grüner Text auf gelbem Hintergrund</div>
</body>
</html>
```

### Methode 3: Externes CSS (empfohlen!)
**styles.css:**
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

.button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #45a049;
}
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button class="button">Klick mich!</button>
</body>
</html>
```

## 2. JavaScript einbinden

### Methode 1: Inline JavaScript
```html
<button onclick="alert('Hallo!')">Klick mich</button>
```

### Methode 2: Internes JavaScript (im `<script>` Tag)
```html
<!DOCTYPE html>
<html>
<body>
    <button id="meinButton">Klick mich</button>
    
    <script>
        document.getElementById('meinButton').addEventListener('click', function() {
            alert('Button wurde geklickt!');
        });
    </script>
</body>
</html>
```

### Methode 3: Externes JavaScript (empfohlen!)
**script.js:**
```javascript
// Warte bis die Seite geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Finde den Button
    const button = document.getElementById('meinButton');
    
    // Füge Event Listener hinzu
    button.addEventListener('click', function() {
        alert('Externes JavaScript funktioniert!');
    });
});
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Meine Seite</title>
</head>
<body>
    <button id="meinButton">Klick mich</button>
    
    <!-- JavaScript am Ende des body-Tags laden -->
    <script src="script.js"></script>
</body>
</html>
```

## 3. Praktisches Beispiel: Interaktiver Zähler

Lasst uns einen einfachen Zähler bauen, der CSS und JavaScript kombiniert!

### Dateistruktur:
```
projekt/
│   index.html
│   styles.css
│   script.js
```

### index.html:
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Zähler</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Zähler App</h1>
        <div class="counter-display" id="counterValue">0</div>
        <div class="button-group">
            <button class="btn btn-decrease" id="decreaseBtn">-</button>
            <button class="btn btn-reset" id="resetBtn">Reset</button>
            <button class="btn btn-increase" id="increaseBtn">+</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### styles.css:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    min-width: 300px;
}

h1 {
    color: #333;
    margin-bottom: 1.5rem;
}

.counter-display {
    font-size: 4rem;
    font-weight: bold;
    color: #667eea;
    margin: 2rem 0;
    transition: transform 0.2s;
}

.counter-display.animate {
    transform: scale(1.1);
}

.button-group {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.btn {
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-increase {
    background: #4CAF50;
    color: white;
}

.btn-decrease {
    background: #f44336;
    color: white;
}

.btn-reset {
    background: #2196F3;
    color: white;
}

.btn:active {
    transform: translateY(0);
}
```

### script.js:
```javascript
// Warte bis die Seite vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Variablen
    let counter = 0;
    
    // HTML Elemente finden
    const counterDisplay = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Funktion zum Aktualisieren der Anzeige
    function updateDisplay() {
        counterDisplay.textContent = counter;
        
        // Animation hinzufügen
        counterDisplay.classList.add('animate');
        setTimeout(() => {
            counterDisplay.classList.remove('animate');
        }, 200);
        
        // Farbe ändern basierend auf dem Wert
        if (counter > 0) {
            counterDisplay.style.color = '#4CAF50';
        } else if (counter < 0) {
            counterDisplay.style.color = '#f44336';
        } else {
            counterDisplay.style.color = '#667eea';
        }
    }
    
    // Event Listener für Buttons
    increaseBtn.addEventListener('click', function() {
        counter++;
        updateDisplay();
    });
    
    decreaseBtn.addEventListener('click', function() {
        counter--;
        updateDisplay();
    });
    
    resetBtn.addEventListener('click', function() {
        counter = 0;
        updateDisplay();
    });
});
```

## 4. Wichtige Tipps

### CSS Best Practices:
- **Externe Stylesheets verwenden**: Trennt Stil von Inhalt
- **Klassen statt IDs für Styling**: IDs nur für JavaScript
- **Mobile-First Design**: Denkt an verschiedene Bildschirmgrößen
- **CSS-Variablen nutzen**: Für wiederverwendbare Werte

### JavaScript Best Practices:
- **Script-Tags am Ende**: Lädt JavaScript nach dem HTML
- **Event Listener statt onclick**: Sauberer und flexibler
- **DOMContentLoaded verwenden**: Sicherstellen, dass HTML geladen ist
- **Variablen sinnvoll benennen**: Code lesbarer machen

## 5. Erweiterte Übungen

### Übung 1: Farben-Wechsler
Erstellt einen Button, der die Hintergrundfarbe der Seite zufällig ändert.

### Übung 2: Todo-Liste
Baut eine einfache Todo-Liste mit Hinzufügen und Löschen Funktionen.

### Übung 3: Bildergalerie
Erstellt eine Galerie mit Vorschaubildern und Vollbildansicht.

## 6. Debugging-Tipps

### Browser Developer Tools nutzen:
- **F12** oder Rechtsklick → "Untersuchen"
- **Console**: JavaScript-Fehler anzeigen
- **Elements**: HTML und CSS inspizieren
- **Network**: Geladene Dateien überprüfen

### Häufige Fehler:
1. **Falsche Dateipfade**: Überprüft relative Pfade
2. **Fehlende Semikolons**: In JavaScript optional, aber empfohlen
3. **Groß-/Kleinschreibung**: JavaScript ist case-sensitive
4. **Timing-Probleme**: Script lädt vor HTML → DOMContentLoaded nutzen

## 7. Nächste Schritte

- **Frameworks erkunden**: Bootstrap für CSS, jQuery für JavaScript
- **Build-Tools lernen**: npm, webpack
- **Moderne JavaScript**: ES6+ Features
- **CSS Preprocessors**: SASS oder LESS
- **Version Control**: Git für Code-Verwaltung

Viel Spaß beim Coden! 🚀