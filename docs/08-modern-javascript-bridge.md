# Modernes JavaScript - Die Brücke zu Frameworks

## Für wen ist diese Übung?

Diese Übung ist perfekt für euch, wenn:
- ✅ Ihr JavaScript Grundlagen beherrscht
- ✅ Ihr mehr Structure in eure Projekte bringen wollt
- ⚠️ Next.js noch zu komplex erscheint
- 🎯 Ihr den nächsten Schritt machen wollt

## Teil 1: ES6+ Features verstehen

### 1.1 Template Literals - Bessere Strings

**Alt (was ihr kennt):**
```javascript
let name = "Max";
let alter = 15;
let text = "Hallo, ich bin " + name + " und bin " + alter + " Jahre alt.";
```

**Neu (Template Literals):**
```javascript
let name = "Max";
let alter = 15;
let text = `Hallo, ich bin ${name} und bin ${alter} Jahre alt.`;

// Mehrzeilig geht auch!
let html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Alter: ${alter}</p>
    </div>
`;
```

### 1.2 Arrow Functions - Kürzere Syntax

**Alt:**
```javascript
function addiere(a, b) {
    return a + b;
}

button.addEventListener("click", function() {
    console.log("Geklickt!");
});
```

**Neu:**
```javascript
const addiere = (a, b) => a + b;

button.addEventListener("click", () => {
    console.log("Geklickt!");
});

// Verschiedene Schreibweisen
const einParam = x => x * 2;           // Ein Parameter, keine Klammern nötig
const keinParam = () => console.log("Hi");  // Keine Parameter
const mehrZeilen = (a, b) => {         // Mehrere Zeilen
    let summe = a + b;
    return summe * 2;
};
```

### 1.3 Destructuring - Werte auspacken

**Alt:**
```javascript
let person = {name: "Lisa", alter: 16, stadt: "Berlin"};
let name = person.name;
let alter = person.alter;

let zahlen = [10, 20, 30];
let erste = zahlen[0];
let zweite = zahlen[1];
```

**Neu:**
```javascript
// Object Destructuring
let person = {name: "Lisa", alter: 16, stadt: "Berlin"};
let {name, alter} = person;

// Array Destructuring
let zahlen = [10, 20, 30];
let [erste, zweite] = zahlen;

// In Funktionen
function zeigePerson({name, alter}) {
    console.log(`${name} ist ${alter} Jahre alt`);
}
```

### 1.4 Spread Operator - Arrays und Objekte kopieren

```javascript
// Arrays kombinieren
let früchte = ["Apfel", "Banane"];
let gemüse = ["Karotte", "Brokkoli"];
let alles = [...früchte, ...gemüse];  // ["Apfel", "Banane", "Karotte", "Brokkoli"]

// Objekte erweitern
let basis = {name: "Max", alter: 15};
let erweitert = {...basis, stadt: "München", alter: 16};  // alter wird überschrieben

// In Funktionen
function summe(...zahlen) {
    return zahlen.reduce((a, b) => a + b, 0);
}
summe(1, 2, 3, 4);  // 10
```

### 1.5 Async/Await - Bessere Promises

**Alt (Callback Hell):**
```javascript
fetch('/api/user')
    .then(response => response.json())
    .then(user => {
        return fetch('/api/posts/' + user.id);
    })
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
    })
    .catch(error => console.error(error));
```

**Neu (Async/Await):**
```javascript
async function holeDaten() {
    try {
        let userResponse = await fetch('/api/user');
        let user = await userResponse.json();
        
        let postsResponse = await fetch(`/api/posts/${user.id}`);
        let posts = await postsResponse.json();
        
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}
```

## Teil 2: Module System - Code organisieren

### 2.1 Einzelne HTML-Datei (alt)
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <script src="helpers.js"></script>
    <script src="data.js"></script>
    <script src="main.js"></script>
</head>
<body>
    <!-- Alles in globalen Variablen -->
</body>
</html>
```

### 2.2 Module verwenden (neu)

**utils.js:**
```javascript
// Funktionen exportieren
export function formatDate(date) {
    return new Date(date).toLocaleDateString('de-DE');
}

export function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// Default Export
export default function greet(name) {
    return `Hallo ${name}!`;
}
```

**data.js:**
```javascript
// Daten exportieren
export const users = [
    {id: 1, name: "Max", age: 15},
    {id: 2, name: "Lisa", age: 16}
];

export const config = {
    apiUrl: "https://api.example.com",
    version: "1.0.0"
};
```

**main.js:**
```javascript
// Module importieren
import greet from './utils.js';  // Default Import
import { formatDate, calculateAge } from './utils.js';  // Named Imports
import { users, config } from './data.js';

// Alles aus einem Modul
import * as Utils from './utils.js';

console.log(greet("Welt"));
console.log(formatDate(new Date()));
console.log(users);
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <!-- type="module" ist wichtig! -->
    <script type="module" src="main.js"></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

## Teil 3: Projekt - Eigenes Mini-Framework bauen

Lasst uns ein kleines Framework bauen, das wie React funktioniert, aber einfacher ist!

### Dateistruktur:
```
mini-framework/
├── index.html
├── style.css
├── js/
│   ├── framework.js    # Unser Mini-Framework
│   ├── components.js    # Unsere Components
│   └── app.js          # Hauptanwendung
```

### framework.js - Unser Mini-Framework:
```javascript
// Ein einfaches reaktives System
export class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.state = {};
    }
    
    setState(newState) {
        this.state = {...this.state, ...newState};
        this.render();
    }
    
    render() {
        // Wird von Child-Klassen überschrieben
    }
    
    mount() {
        this.render();
    }
}

// Helper für HTML-Erstellung
export function html(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += str;
        if (i < values.length) {
            result += values[i];
        }
    });
    return result;
}

// Event-Helper
export function on(selector, event, handler) {
    document.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
            handler(e);
        }
    });
}
```

### components.js - Unsere Components:
```javascript
import { Component, html, on } from './framework.js';

// Counter Component
export class Counter extends Component {
    constructor(selector) {
        super(selector);
        this.state = { count: 0 };
        
        // Events registrieren
        on(`${selector} .btn-plus`, 'click', () => {
            this.setState({ count: this.state.count + 1 });
        });
        
        on(`${selector} .btn-minus`, 'click', () => {
            this.setState({ count: this.state.count - 1 });
        });
    }
    
    render() {
        this.element.innerHTML = html`
            <div class="counter">
                <h2>Zähler: ${this.state.count}</h2>
                <button class="btn-plus">+</button>
                <button class="btn-minus">-</button>
            </div>
        `;
    }
}

// TodoList Component
export class TodoList extends Component {
    constructor(selector) {
        super(selector);
        this.state = { 
            todos: [],
            inputValue: ''
        };
        
        on(`${selector} .todo-input`, 'input', (e) => {
            this.state.inputValue = e.target.value;
        });
        
        on(`${selector} .add-btn`, 'click', () => {
            if (this.state.inputValue.trim()) {
                this.addTodo(this.state.inputValue);
            }
        });
        
        on(`${selector} .todo-item button`, 'click', (e) => {
            const index = parseInt(e.target.dataset.index);
            this.removeTodo(index);
        });
    }
    
    addTodo(text) {
        this.setState({
            todos: [...this.state.todos, { text, done: false }],
            inputValue: ''
        });
    }
    
    removeTodo(index) {
        this.setState({
            todos: this.state.todos.filter((_, i) => i !== index)
        });
    }
    
    render() {
        const todoItems = this.state.todos
            .map((todo, i) => `
                <li class="todo-item">
                    ${todo.text}
                    <button data-index="${i}">❌</button>
                </li>
            `)
            .join('');
        
        this.element.innerHTML = html`
            <div class="todo-list">
                <h2>Todo Liste</h2>
                <div class="todo-controls">
                    <input 
                        type="text" 
                        class="todo-input" 
                        value="${this.state.inputValue}"
                        placeholder="Was musst du tun?"
                    >
                    <button class="add-btn">Hinzufügen</button>
                </div>
                <ul>${todoItems}</ul>
                ${this.state.todos.length === 0 ? '<p>Keine Todos!</p>' : ''}
            </div>
        `;
    }
}
```

### app.js - Hauptanwendung:
```javascript
import { Counter, TodoList } from './components.js';
import { on } from './framework.js';

// App initialisieren
class App {
    constructor() {
        this.currentView = 'counter';
        this.components = {
            counter: new Counter('#app'),
            todos: new TodoList('#app')
        };
        
        this.setupNavigation();
        this.render();
    }
    
    setupNavigation() {
        on('.nav-btn', 'click', (e) => {
            this.currentView = e.target.dataset.view;
            this.render();
        });
    }
    
    render() {
        // Navigation updaten
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === this.currentView);
        });
        
        // Component anzeigen
        this.components[this.currentView].mount();
    }
}

// App starten wenn DOM bereit
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
```

### index.html:
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Framework App</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="js/app.js"></script>
</head>
<body>
    <header>
        <h1>Meine App mit Mini-Framework</h1>
        <nav>
            <button class="nav-btn active" data-view="counter">Zähler</button>
            <button class="nav-btn" data-view="todos">Todo Liste</button>
        </nav>
    </header>
    
    <main id="app">
        <!-- Hier werden Components gerendert -->
    </main>
</body>
</html>
```

### style.css:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

header {
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header h1 {
    color: #333;
    margin-bottom: 1rem;
}

nav {
    display: flex;
    gap: 1rem;
}

.nav-btn {
    padding: 0.5rem 1rem;
    border: none;
    background: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-btn.active {
    background: #667eea;
    color: white;
}

#app {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Counter Styles */
.counter {
    text-align: center;
}

.counter h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
}

.counter button {
    margin: 0 0.5rem;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

.counter .btn-plus {
    background: #4CAF50;
    color: white;
}

.counter .btn-minus {
    background: #f44336;
    color: white;
}

.counter button:hover {
    transform: scale(1.1);
}

/* Todo List Styles */
.todo-list h2 {
    margin-bottom: 1rem;
    color: #333;
}

.todo-controls {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.todo-input {
    flex: 1;
    padding: 0.5rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.add-btn {
    padding: 0.5rem 1rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.todo-list ul {
    list-style: none;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background: #f8f9fa;
    border-radius: 5px;
}

.todo-item button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
}
```

## Teil 4: Build Tools verstehen (Optional)

### Was sind Build Tools?

Build Tools bereiten euren Code für die Produktion vor:
- **Bundling**: Alle Dateien zu einer zusammenfassen
- **Minifying**: Code verkleinern
- **Transpiling**: Modernes JS für alte Browser

### Einfaches Beispiel mit Vite:

```bash
# Vite installieren (modernes Build Tool)
npm create vite@latest mein-projekt -- --template vanilla

cd mein-projekt
npm install
npm run dev
```

**Vorteile:**
- Hot Module Replacement (automatisches Neuladen)
- Schnellere Entwicklung
- Optimierter Production Build

## Teil 5: Web Components - Der native Weg

Web Components sind Browser-native Components (ohne Framework!):

```javascript
// Eine eigene HTML-Component erstellen
class MeinButton extends HTMLElement {
    constructor() {
        super();
        this.clicks = 0;
    }
    
    connectedCallback() {
        this.innerHTML = `
            <button>
                Clicked: <span>${this.clicks}</span> times
            </button>
        `;
        
        this.querySelector('button').addEventListener('click', () => {
            this.clicks++;
            this.querySelector('span').textContent = this.clicks;
        });
    }
}

// Component registrieren
customElements.define('mein-button', MeinButton);
```

**Verwendung in HTML:**
```html
<mein-button></mein-button>
<mein-button></mein-button>  <!-- Jeder Button ist unabhängig! -->
```

## Übungsprojekte

### Projekt 1: Wetter-App
Baut eine Wetter-App mit modernem JavaScript:
- Async/Await für API-Calls
- Module für Code-Organisation
- Template Literals für HTML-Generierung

### Projekt 2: Eigene Component Library
Erstellt wiederverwendbare Components:
- Card Component
- Modal Component
- Tabs Component

### Projekt 3: Mini-Spiel mit Klassen
Ein kleines Spiel mit ES6 Klassen:
```javascript
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.score = 0;
    }
    
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
    }
}

class Game {
    constructor() {
        this.player = new Player("Hero");
        this.enemies = [];
    }
    
    start() {
        // Spiellogik
    }
}
```

## Checkliste: Bin ich bereit für Frameworks?

### ✅ Ihr seid bereit wenn ihr:
- [ ] Template Literals nutzt
- [ ] Arrow Functions versteht
- [ ] Mit Promises/Async arbeiten könnt
- [ ] Module importieren/exportieren könnt
- [ ] Klassen schreiben könnt
- [ ] Destructuring verwendet

### 🎯 Nächste Schritte:
1. **Modernes JS meistern** (diese Übung)
2. **Mini-Framework bauen** (versteht Konzepte)
3. **React Basics lernen** (ohne Next.js)
4. **Next.js angehen** (wenn bereit)

## Zusammenfassung

Diese Zwischenstufe hilft euch:
- 🔧 Moderne JavaScript Features zu lernen
- 📦 Code besser zu organisieren
- 🏗️ Framework-Konzepte zu verstehen
- 🚀 Sanfter Übergang zu React/Next.js

**Wichtig:** Nehmt euch Zeit! Dieser Schritt ist wichtig für alles was danach kommt. Wenn ihr das hier versteht, werden Frameworks viel einfacher!