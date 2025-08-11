# Einfache Einführung - Docker Foundation Projekt

## Was machen wir hier?

Wir lernen drei wichtige Dinge:
1. **Git** - Wie mehrere Leute zusammen programmieren
2. **Docker** - Wie man Programme überall laufen lassen kann
3. **HTML** - Wie man Webseiten macht

## Was ist das Ziel?

Jeder von euch macht eine eigene Webseite. Diese Webseite läuft dann in Docker auf einem Webserver (Nginx).

## Die wichtigsten Begriffe

### Git
- **Repository**: Ein Ordner mit eurem Code
- **Clone**: Den Code herunterladen
- **Branch**: Eure eigene Version vom Code
- **Commit**: Änderungen speichern
- **Push**: Änderungen hochladen
- **Pull Request**: "Bitte fügt meine Änderungen hinzu"

### Docker
- **Image**: Eine Vorlage (wie ein Rezept)
- **Container**: Ein laufendes Programm (wie ein gekochtes Essen)
- **Dockerfile**: Die Anleitung zum Bauen

### HTML
- **Tag**: Ein Befehl in spitzen Klammern `<h1>Titel</h1>`
- **Element**: Alles zwischen Start und Ende Tag
- **Attribute**: Zusätzliche Informationen `<img src="bild.jpg">`

## Schritt für Schritt Anleitung

### 1. Git einrichten
```bash
# Repository klonen (herunterladen)
git clone https://github.com/CloudHelden/DockerFoundation.git

# In den Ordner wechseln
cd DockerFoundation

# Schauen was drin ist
ls
```

### 2. Eigenen Branch erstellen
```bash
# Branch erstellen (dein Name statt "max")
git checkout -b feature/max

# Prüfen ob es geklappt hat
git branch
```

### 3. Zwei Dateien erstellen

#### Datei 1: Nginx Konfiguration
Erstelle `conf/max.conf`:
```nginx
server {
    listen 80;
    server_name max.docker.local;
    
    location / {
        root /usr/share/nginx/html;
        index max.html;
    }
}
```

#### Datei 2: HTML Seite
Erstelle `html/max.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Max's Seite</title>
</head>
<body>
    <h1>Hallo, ich bin Max!</h1>
    <p>Das ist meine erste Docker-Webseite.</p>
    
    <h2>Was ich lerne:</h2>
    <ul>
        <li>Git</li>
        <li>Docker</li>
        <li>HTML</li>
    </ul>
</body>
</html>
```

### 4. Mit Git speichern
```bash
# Dateien hinzufügen
git add conf/max.conf html/max.html

# Speichern mit Nachricht
git commit -m "Max's Webseite hinzugefügt"

# Hochladen
git push origin feature/max
```

### 5. Docker testen
```bash
# Docker Image bauen
docker build -t dockerfoundation .

# Container starten
docker run -p 8080:80 dockerfoundation
```

### 6. Im Browser anschauen
Öffne: http://localhost:8080

## Häufige Probleme

### "Ich sehe meine Seite nicht"
1. Ist Docker gestartet?
2. Hast du den Container gestartet?
3. Stimmt der Dateiname? (max.conf und max.html)

### "Git funktioniert nicht"
1. Bist du im richtigen Ordner?
2. Hast du schon einen Branch erstellt?
3. Verwende `git status` um zu sehen was los ist

### "Docker Fehler"
1. Ist Docker Desktop geöffnet?
2. Läuft schon ein Container? (`docker ps`)
3. Stoppe alte Container: `docker stop $(docker ps -q)`

## Die wichtigsten Befehle

### Git Befehle
```bash
git clone [url]           # Code herunterladen
git checkout -b [name]    # Branch erstellen
git add .                 # Alle Änderungen vorbereiten
git commit -m "text"      # Änderungen speichern
git push                  # Hochladen
git status               # Was ist los?
```

### Docker Befehle
```bash
docker build -t [name] .  # Image bauen
docker run -p 8080:80 [name]  # Container starten
docker ps                 # Was läuft?
docker stop [id]         # Container stoppen
docker logs [id]         # Fehler anschauen
```

## Tipps für Anfänger

1. **Keine Angst vor Fehlern!** - Fehler sind normal
2. **Kopiere erst mal** - Verstehen kommt später
3. **Frag wenn du nicht weiterkommst** - Alle haben mal angefangen
4. **Mach kleine Schritte** - Ein Befehl nach dem anderen
5. **Teste oft** - Nach jeder Änderung prüfen

## Was machst du als nächstes?

1. ✅ Repository klonen
2. ✅ Branch erstellen  
3. ✅ Deine zwei Dateien machen
4. ✅ Mit Git speichern und hochladen
5. ✅ Mit Docker testen
6. ✅ Pull Request erstellen (auf GitHub)

## Geschafft! 🎉

Wenn deine Seite im Browser erscheint, hast du:
- Git benutzt
- Docker verstanden
- Eine Webseite gemacht

Super gemacht!