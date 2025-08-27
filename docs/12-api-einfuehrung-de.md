# API für Anfänger - Die digitalen Kellner des Internets 🍕

## Was ist eine API? - Die Pizza-Bestellung erklärt

Stell dir vor, du bist in einem Restaurant:
- **Du** = Die App oder Website (der Kunde)
- **Die Speisekarte** = Die API-Dokumentation (was kannst du bestellen?)
- **Der Kellner** = Die API (nimmt deine Bestellung auf und bringt dir das Essen)
- **Die Küche** = Der Server (wo das Essen gemacht wird)

Eine **API** (Application Programming Interface) ist wie ein Kellner, der zwischen dir und der Küche vermittelt. Du musst nicht in die Küche gehen oder wissen, wie man kocht - du sagst dem Kellner einfach, was du willst!

## Ein ganz einfaches Beispiel

### Im echten Leben:
```
Du: "Ich hätte gerne eine Pizza Margherita!"
Kellner: "Kommt sofort!"
*Kellner geht zur Küche*
Kellner zur Küche: "Eine Margherita für Tisch 5!"
*Küche macht Pizza*
Kellner: "Hier ist Ihre Pizza!"
```

### Im Code:
```javascript
// Du fragst die API nach Wetter-Daten
fetch('https://api.wetter.de/berlin')
  .then(antwort => antwort.json())
  .then(daten => {
    console.log("Es sind " + daten.temperatur + "°C");
  });
```

## Die 5 wichtigsten Dinge über APIs

### 1. APIs sind überall! 🌍
Jedes Mal wenn du:
- Das Wetter auf deinem Handy checkst
- Ein YouTube-Video anschaust
- Dich bei einer App mit Google anmeldest
- Eine Nachricht auf WhatsApp schickst

...benutzt du APIs!

### 2. APIs sprechen in Anfragen und Antworten 💬

**Du fragst:** "Gib mir das Wetter für Berlin"
**API antwortet:** "Es sind 22°C und sonnig"

### 3. APIs haben Regeln 📋
Genau wie du nicht "Gib mir Essen!" sagst, sondern "Eine Pizza Margherita bitte", musst du APIs richtig fragen:

```javascript
// FALSCH ❌
fetch('gib-mir-wetter')

// RICHTIG ✅
fetch('https://api.openweathermap.org/data/2.5/weather?city=Berlin')
```

### 4. APIs brauchen oft einen Schlüssel 🔑
Manche APIs sind wie ein VIP-Club - du brauchst einen speziellen Schlüssel (API Key):

```javascript
// Mit API-Schlüssel
fetch('https://api.example.com/daten?key=DEIN_GEHEIMER_SCHLUESSEL')
```

### 5. APIs geben dir Daten zurück 📦
Meistens bekommst du JSON-Daten zurück (das ist wie ein digitaler Karton mit Infos):

```json
{
  "stadt": "Berlin",
  "temperatur": 22,
  "wetter": "sonnig",
  "luftfeuchtigkeit": 65
}
```

## Deine erste eigene API-Anfrage! 🚀

### Beispiel 1: Witz-API (Keine Anmeldung nötig!)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Witz-Generator</title>
</head>
<body>
    <h1>😂 Zufälliger Witz</h1>
    <button onclick="holeWitz()">Neuer Witz!</button>
    <div id="witz"></div>
    
    <script>
        function holeWitz() {
            // Wir fragen die API nach einem Witz
            fetch('https://official-joke-api.appspot.com/random_joke')
                .then(antwort => antwort.json())  // Antwort in JSON umwandeln
                .then(daten => {
                    // Den Witz anzeigen
                    document.getElementById('witz').innerHTML = 
                        `<p><strong>${daten.setup}</strong></p>
                         <p>${daten.punchline} 😄</p>`;
                })
                .catch(fehler => {
                    console.log('Ups, etwas ging schief:', fehler);
                });
        }
    </script>
</body>
</html>
```

### Beispiel 2: Pokémon-Finder

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pokémon Finder</title>
    <style>
        #pokemon-karte {
            border: 3px solid #ffcb05;
            border-radius: 10px;
            padding: 20px;
            margin: 20px;
            background: linear-gradient(to bottom, #3d7dca, #003a70);
            color: white;
            max-width: 300px;
        }
        img { width: 200px; }
    </style>
</head>
<body>
    <h1>🔍 Pokémon Finder</h1>
    <input type="text" id="pokemon-name" placeholder="z.B. pikachu">
    <button onclick="suchePokemon()">Suchen!</button>
    
    <div id="ergebnis"></div>
    
    <script>
        function suchePokemon() {
            let name = document.getElementById('pokemon-name').value.toLowerCase();
            
            // Pokemon API aufrufen
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(antwort => antwort.json())
                .then(pokemon => {
                    document.getElementById('ergebnis').innerHTML = `
                        <div id="pokemon-karte">
                            <h2>${pokemon.name.toUpperCase()}</h2>
                            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                            <p>Größe: ${pokemon.height / 10} m</p>
                            <p>Gewicht: ${pokemon.weight / 10} kg</p>
                            <p>Typ: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
                        </div>
                    `;
                })
                .catch(fehler => {
                    document.getElementById('ergebnis').innerHTML = 
                        '<p>❌ Pokémon nicht gefunden!</p>';
                });
        }
    </script>
</body>
</html>
```

## Die 4 Haupt-Aktionen (CRUD) 🛠️

APIs können normalerweise 4 Dinge machen (wie bei einem Schrank):

1. **CREATE (POST)** - Etwas Neues reinlegen 📥
   ```javascript
   fetch('/api/todos', {
       method: 'POST',
       body: JSON.stringify({ aufgabe: 'Hausaufgaben machen' })
   })
   ```

2. **READ (GET)** - Etwas anschauen 👀
   ```javascript
   fetch('/api/todos')  // Alle Aufgaben holen
   ```

3. **UPDATE (PUT)** - Etwas ändern ✏️
   ```javascript
   fetch('/api/todos/1', {
       method: 'PUT',
       body: JSON.stringify({ erledigt: true })
   })
   ```

4. **DELETE (DELETE)** - Etwas löschen 🗑️
   ```javascript
   fetch('/api/todos/1', {
       method: 'DELETE'
   })
   ```

## Praktisches Beispiel: Eigene Todo-Liste mit JSON Server

### Schritt 1: JSON Server installieren (simuliert eine API)
```bash
npm install -g json-server
```

### Schritt 2: Daten-Datei erstellen (db.json)
```json
{
  "todos": [
    { "id": 1, "text": "JavaScript lernen", "erledigt": false },
    { "id": 2, "text": "API verstehen", "erledigt": true }
  ]
}
```

### Schritt 3: Server starten
```bash
json-server --watch db.json --port 3000
```

### Schritt 4: Mit der API arbeiten

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meine Todo-App mit API</title>
    <style>
        .erledigt { text-decoration: line-through; color: gray; }
        .todo-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
    </style>
</head>
<body>
    <h1>📝 Meine Todo-Liste (mit echter API!)</h1>
    
    <input type="text" id="neue-aufgabe" placeholder="Neue Aufgabe">
    <button onclick="aufgabeHinzufuegen()">Hinzufügen</button>
    
    <div id="todo-liste"></div>
    
    <script>
        const API_URL = 'http://localhost:3000/todos';
        
        // Todos laden
        function ladeTodos() {
            fetch(API_URL)
                .then(antwort => antwort.json())
                .then(todos => {
                    let html = '';
                    todos.forEach(todo => {
                        html += `
                            <div class="todo-item ${todo.erledigt ? 'erledigt' : ''}">
                                <input type="checkbox" 
                                       ${todo.erledigt ? 'checked' : ''} 
                                       onchange="toggleTodo(${todo.id}, this.checked)">
                                <span>${todo.text}</span>
                                <button onclick="loescheTodo(${todo.id})">❌</button>
                            </div>
                        `;
                    });
                    document.getElementById('todo-liste').innerHTML = html;
                });
        }
        
        // Neue Aufgabe hinzufügen
        function aufgabeHinzufuegen() {
            const text = document.getElementById('neue-aufgabe').value;
            if (!text) return;
            
            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: text,
                    erledigt: false
                })
            })
            .then(() => {
                document.getElementById('neue-aufgabe').value = '';
                ladeTodos();
            });
        }
        
        // Todo als erledigt markieren
        function toggleTodo(id, erledigt) {
            fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ erledigt: erledigt })
            })
            .then(() => ladeTodos());
        }
        
        // Todo löschen
        function loescheTodo(id) {
            fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            })
            .then(() => ladeTodos());
        }
        
        // Beim Start laden
        ladeTodos();
    </script>
</body>
</html>
```

## Fehlerbehandlung - Wenn's mal nicht klappt 🚨

APIs können auch mal Fehler zurückgeben:

```javascript
fetch('https://api.example.com/daten')
    .then(antwort => {
        if (!antwort.ok) {
            throw new Error('Ups! Status: ' + antwort.status);
        }
        return antwort.json();
    })
    .then(daten => {
        // Alles gut, mach was mit den Daten
    })
    .catch(fehler => {
        console.error('Fehler:', fehler);
        // Zeige eine nette Fehlermeldung
        document.getElementById('fehler').innerHTML = 
            '😞 Sorry, etwas ist schiefgelaufen!';
    });
```

### Häufige Fehler-Codes:
- **200** ✅ = Alles super!
- **404** ❌ = Nicht gefunden (falsche URL?)
- **401** 🔒 = Nicht erlaubt (API-Schlüssel fehlt?)
- **500** 💥 = Server-Fehler (nicht deine Schuld!)

## Kostenlose APIs zum Ausprobieren 🎮

1. **Witze-API**: https://official-joke-api.appspot.com/random_joke
2. **Pokémon**: https://pokeapi.co
3. **Hunde-Bilder**: https://dog.ceo/api/breeds/image/random
4. **Katzen-Fakten**: https://catfact.ninja/fact
5. **Alter raten**: https://api.agify.io/?name=peter
6. **Länder-Info**: https://restcountries.com/v3.1/all
7. **Zufalls-User**: https://randomuser.me/api/

## API-Schlüssel bekommen - So geht's! 🔑

Viele APIs brauchen einen Schlüssel. So bekommst du einen:

1. **Registrieren** auf der API-Website
2. **Bestätigen** deiner E-Mail
3. **API-Schlüssel kopieren** aus deinem Account
4. **Benutzen** in deinem Code:

```javascript
const API_KEY = 'dein-geheimer-schluessel';
fetch(`https://api.example.com/data?key=${API_KEY}`)
```

**WICHTIG**: Zeige deinen API-Schlüssel niemals öffentlich (z.B. auf GitHub)!

## Die Zukunft mit APIs 🚀

### Was kannst du mit APIs bauen?

1. **Wetter-App** 🌤️
   - Zeige das aktuelle Wetter
   - 7-Tage-Vorhersage
   - Unwetter-Warnungen

2. **Film-Datenbank** 🎬
   - Suche nach Filmen
   - Zeige Bewertungen
   - Trailer ansehen

3. **Musik-Player** 🎵
   - Songs suchen
   - Playlists erstellen
   - Lyrics anzeigen

4. **Chat-Bot** 🤖
   - Mit KI chatten
   - Fragen beantworten
   - Witze erzählen

5. **Spiele-Highscore** 🎯
   - Punkte speichern
   - Rangliste anzeigen
   - Mit Freunden vergleichen

## Zusammenfassung - Das Wichtigste! 📚

✅ **API = Digitaler Kellner** zwischen deiner App und dem Server

✅ **Fetch()** ist dein Werkzeug um APIs anzusprechen

✅ **JSON** ist das Format für Daten

✅ **GET, POST, PUT, DELETE** sind die Aktionen

✅ **Fehler passieren** - plane sie ein!

✅ **Viele APIs sind kostenlos** - probiere sie aus!

✅ **API-Schlüssel** sind wie Passwörter - halte sie geheim!

## Deine API-Challenge! 🏆

Baue eine Mini-App die:
1. Zwei verschiedene APIs benutzt
2. Die Daten kombiniert anzeigt
3. Fehler abfängt

**Idee**: Kombiniere die Wetter-API mit der Aktivitäten-API:
- Wenn es regnet → Zeige Indoor-Aktivitäten
- Wenn es sonnig ist → Zeige Outdoor-Aktivitäten

Viel Spaß beim Experimentieren! APIs sind das Tor zur ganzen Welt der Daten! 🌍✨