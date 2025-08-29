# HTTP-Methoden praktisch erklärt - PUT vs PATCH und mehr mit echten cURL Beispielen 🚀

## Der große Unterschied: PUT vs PATCH 🤔

Der wichtigste Unterschied, den viele verwechseln:

- **PUT** = Ersetze das KOMPLETTE Objekt (wie ein Haus abreißen und neu bauen)
- **PATCH** = Ändere NUR bestimmte Felder (wie ein Zimmer renovieren)

### Visualisiert mit einem Beispiel:

```javascript
// Original Objekt in der Datenbank:
{
  "id": 1,
  "name": "Max Mustermann",
  "email": "max@example.com",
  "age": 30,
  "city": "Berlin"
}

// PUT - Muss ALLES enthalten (sonst werden Felder gelöscht!)
{
  "name": "Max Mustermann",
  "email": "max.neu@example.com",  // Nur das wollten wir ändern
  "age": 30,                        // Muss trotzdem dabei sein!
  "city": "Berlin"                  // Muss trotzdem dabei sein!
}

// PATCH - Nur das was sich ändert
{
  "email": "max.neu@example.com"   // Nur das! Rest bleibt unverändert
}
```

## Alle HTTP-Methoden mit echten APIs testen 🛠️

Wir verwenden **JSONPlaceholder** - eine kostenlose Test-API, die du sofort ausprobieren kannst!

### cURL vs JavaScript - Beide Wege zum Ziel 🎯

Jede API-Operation kann sowohl mit cURL (Kommandozeile) als auch mit JavaScript (im Browser/Node.js) durchgeführt werden. Hier zeigen wir dir beide Wege!

### 1. GET - Daten abrufen 📥

#### Mit cURL:
```bash
# Alle Posts abrufen
curl https://jsonplaceholder.typicode.com/posts

# Einen bestimmten Post abrufen
curl https://jsonplaceholder.typicode.com/posts/1

# Mit schöner Formatierung (pipe zu jq)
curl https://jsonplaceholder.typicode.com/posts/1 | jq '.'

# Nur Headers anzeigen (-I)
curl -I https://jsonplaceholder.typicode.com/posts/1

# Mit Query-Parametern filtern
curl "https://jsonplaceholder.typicode.com/posts?userId=1"

# Verbose-Modus für Debugging (-v)
curl -v https://jsonplaceholder.typicode.com/posts/1
```

#### Mit JavaScript (fetch API):
```javascript
// Alle Posts abrufen
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts));

// Einen bestimmten Post abrufen
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => console.log(post));

// Mit Query-Parametern filtern
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(posts => console.log(posts));

// Mit async/await (moderner)
async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();
  console.log(post);
}

// Headers prüfen
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Data:', data));
```

**Antwort-Beispiel:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur..."
}
```

### 2. POST - Neues erstellen ✨

#### Mit cURL:
```bash
# Einfacher POST mit JSON-Daten
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mein neuer Post",
    "body": "Das ist der Inhalt meines Posts",
    "userId": 1
  }'

# POST mit Daten aus einer Datei
echo '{
  "title": "Post aus Datei",
  "body": "Inhalt aus der Datei",
  "userId": 1
}' > post.json

curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @post.json

# POST mit Form-Daten (application/x-www-form-urlencoded)
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "title=URL%20Encoded%20Post&body=Test%20Content&userId=1"
```

#### Mit JavaScript:
```javascript
// Einfacher POST mit JSON-Daten
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Mein neuer Post',
    body: 'Das ist der Inhalt meines Posts',
    userId: 1
  })
})
.then(response => response.json())
.then(newPost => console.log('Erstellt:', newPost));

// Mit async/await
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Post mit async/await',
      body: 'Moderner JavaScript Code',
      userId: 1
    })
  });
  
  const newPost = await response.json();
  console.log('Neuer Post:', newPost);
}

// POST mit FormData (für Formulare)
const formData = new FormData();
formData.append('title', 'Form Post');
formData.append('body', 'Posted via FormData');
formData.append('userId', '1');

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

**Antwort zeigt das neue Objekt mit ID:**
```json
{
  "title": "Mein neuer Post",
  "body": "Das ist der Inhalt meines Posts",
  "userId": 1,
  "id": 101
}
```

### 3. PUT - Komplett ersetzen 🔄

#### Mit cURL:
```bash
# PUT - ALLE Felder müssen vorhanden sein!
curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "Komplett neuer Titel",
    "body": "Komplett neuer Inhalt",
    "userId": 1
  }'

# ACHTUNG: Vergisst du ein Feld, wird es auf null/undefined gesetzt!
# Schlechtes Beispiel (vergisst userId):
curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "Nur Titel",
    "body": "Nur Body"
  }'
# userId ist jetzt weg! 😱
```

#### Mit JavaScript:
```javascript
// PUT - ALLE Felder müssen vorhanden sein!
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Komplett neuer Titel',
    body: 'Komplett neuer Inhalt',
    userId: 1
  })
})
.then(response => response.json())
.then(updatedPost => console.log('Komplett ersetzt:', updatedPost));

// ⚠️ VORSICHT: Unvollständiges PUT löscht Felder!
// Schlechtes Beispiel:
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Nur Titel',
    body: 'Nur Body'
    // userId fehlt - wird gelöscht! 😱
  })
});

// Besser: Erst alte Daten holen, dann alles senden
async function updatePostComplete() {
  // Erst aktuelle Daten holen
  const currentPost = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(r => r.json());
  
  // Dann mit allen Feldern updaten
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...currentPost,  // Alle alten Felder
      title: 'Neuer Titel'  // Nur das ändern
    })
  });
  
  const updated = await response.json();
  console.log('Sicher aktualisiert:', updated);
}
```

### 4. PATCH - Teilweise ändern ✏️

#### Mit cURL:
```bash
# PATCH - Nur das ändern, was du willst
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Nur der Titel ändert sich"
  }'

# Mehrere Felder gleichzeitig ändern
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Neuer Titel",
    "body": "Neuer Body"
  }'

# Nur ein verschachteltes Feld ändern (wenn die API es unterstützt)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "address": {
      "city": "München"
    }
  }'
```

#### Mit JavaScript:
```javascript
// PATCH - Nur das ändern, was du willst
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Nur der Titel ändert sich'
    // Andere Felder bleiben unverändert! ✅
  })
})
.then(response => response.json())
.then(updated => console.log('Teilweise aktualisiert:', updated));

// Mehrere Felder gleichzeitig ändern
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Neuer Titel',
    body: 'Neuer Body'
    // userId bleibt unverändert!
  })
})
.then(response => response.json())
.then(data => console.log(data));

// Praktisches Beispiel: Toggle-Funktion
async function togglePostStatus(postId, isPublished) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      published: isPublished
    })
  });
  
  return response.json();
}

// Verschachtelte Updates (wenn unterstützt)
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    address: {
      city: 'München'
      // Andere address-Felder bleiben erhalten
    }
  })
});
```

### 5. DELETE - Löschen 🗑️

#### Mit cURL:
```bash
# Einfaches DELETE
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1

# DELETE mit Bestätigung im Header
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1 \
  -H "Confirm: true"

# DELETE und Response-Status prüfen
curl -X DELETE -w "\nHTTP Status: %{http_code}\n" \
  https://jsonplaceholder.typicode.com/posts/1
```

#### Mit JavaScript:
```javascript
// Einfaches DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(response => {
  if (response.ok) {
    console.log('Erfolgreich gelöscht!');
  } else {
    console.log('Fehler beim Löschen:', response.status);
  }
});

// DELETE mit Bestätigung und Status-Check
async function deletePost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Confirm': 'true'  // Wenn die API das erwartet
    }
  });
  
  console.log('Status:', response.status);
  
  if (response.status === 200 || response.status === 204) {
    console.log(`Post ${postId} wurde gelöscht`);
    return true;
  } else {
    console.error('Löschen fehlgeschlagen');
    return false;
  }
}

// DELETE mit Benutzer-Bestätigung
async function deleteWithConfirmation(postId) {
  if (confirm('Wirklich löschen?')) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        alert('Erfolgreich gelöscht!');
        // UI aktualisieren, Element entfernen etc.
        document.getElementById(`post-${postId}`)?.remove();
      }
    } catch (error) {
      console.error('Netzwerkfehler:', error);
    }
  }
}
```

### 6. HEAD - Nur Headers, kein Body 📋

```bash
# HEAD - Prüft ob Ressource existiert ohne Daten zu laden
curl -I https://jsonplaceholder.typicode.com/posts/1

# Oder mit -X HEAD
curl -X HEAD -v https://jsonplaceholder.typicode.com/posts/1
```

**Typische Antwort (nur Headers):**
```
HTTP/2 200
content-type: application/json; charset=utf-8
cache-control: max-age=43200
expires: -1
pragma: no-cache
```

### 7. OPTIONS - Was ist erlaubt? 🔍

```bash
# OPTIONS - Zeigt erlaubte Methoden
curl -X OPTIONS https://jsonplaceholder.typicode.com/posts \
  -H "Access-Control-Request-Method: POST" \
  -H "Origin: http://localhost:3000" \
  -v
```

## Echte API Beispiele mit verschiedenen Services 🌍

### GitHub API

```bash
# GET - Öffentliche Repos eines Users
curl https://api.github.com/users/torvalds/repos \
  | jq '.[0:3] | .[] | {name: .name, stars: .stargazers_count}'

# POST - Ein Issue erstellen (braucht Token)
curl -X POST https://api.github.com/repos/OWNER/REPO/issues \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{
    "title": "Bug gefunden",
    "body": "Beschreibung des Bugs",
    "labels": ["bug"]
  }'

# PATCH - Issue updaten
curl -X PATCH https://api.github.com/repos/OWNER/REPO/issues/1 \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -d '{
    "state": "closed"
  }'
```

### ReqRes.in (Test-API)

```bash
# POST - User registrieren
curl -X POST https://reqres.in/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }'

# PUT - User komplett updaten
curl -X PUT https://reqres.in/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Max Mustermann",
    "job": "Software Developer"
  }'

# PATCH - Nur Job ändern
curl -X PATCH https://reqres.in/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{
    "job": "Senior Developer"
  }'

# DELETE - User löschen
curl -X DELETE https://reqres.in/api/users/2 \
  -w "\nStatus: %{http_code}\n"
```

### Httpbin.org (Echo-Service zum Testen)

```bash
# Teste verschiedene Methoden - zeigt dir zurück was du sendest
curl -X POST https://httpbin.org/post \
  -H "Content-Type: application/json" \
  -H "Custom-Header: MeinWert" \
  -d '{"test": "data"}'

curl -X PUT https://httpbin.org/put \
  -d "test=data"

curl -X PATCH https://httpbin.org/patch \
  -d '{"partial": "update"}'

curl -X DELETE https://httpbin.org/delete
```

## PUT vs PATCH - Praktisches Szenario 💡

Stell dir vor, du hast einen User in deiner Datenbank:

```json
{
  "id": 123,
  "username": "maxmuster",
  "email": "max@example.com",
  "firstName": "Max",
  "lastName": "Mustermann",
  "age": 30,
  "city": "Berlin",
  "premium": false,
  "lastLogin": "2024-01-15T10:30:00Z"
}
```

### Szenario 1: Email ändern

```bash
# ❌ FALSCH mit PUT (löscht alle anderen Felder!)
curl -X PUT https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "max.neu@example.com"
  }'
# RESULTAT: Alle anderen Felder sind weg! 😱

# ✅ RICHTIG mit PUT (alle Felder mitschicken)
curl -X PUT https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 123,
    "username": "maxmuster",
    "email": "max.neu@example.com",
    "firstName": "Max",
    "lastName": "Mustermann",
    "age": 30,
    "city": "Berlin",
    "premium": false,
    "lastLogin": "2024-01-15T10:30:00Z"
  }'

# ✅ BESSER mit PATCH (nur Email)
curl -X PATCH https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "max.neu@example.com"
  }'
```

### Szenario 2: User zu Premium upgraden

```bash
# Mit PATCH - elegant und einfach
curl -X PATCH https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "premium": true
  }'
```

## Authentifizierung in cURL 🔐

### API Key im Header

```bash
curl https://api.example.com/data \
  -H "X-API-Key: dein-api-schluessel"

# Oder als Bearer Token
curl https://api.example.com/data \
  -H "Authorization: Bearer dein-token-hier"
```

### Basic Auth

```bash
# Mit -u flag
curl -u username:password https://api.example.com/secure

# Oder im Header
curl https://api.example.com/secure \
  -H "Authorization: Basic $(echo -n username:password | base64)"
```

### OAuth 2.0 Flow

```bash
# 1. Token holen
TOKEN=$(curl -X POST https://auth.example.com/oauth/token \
  -d "grant_type=client_credentials" \
  -d "client_id=your-client-id" \
  -d "client_secret=your-secret" \
  | jq -r '.access_token')

# 2. Token benutzen
curl https://api.example.com/protected \
  -H "Authorization: Bearer $TOKEN"
```

## Fortgeschrittene cURL Tricks 🎩

### Response Zeit messen

```bash
curl -w "\n\nZeit Details:\n\
  DNS Lookup: %{time_namelookup}s\n\
  TCP Connect: %{time_connect}s\n\
  SSL Handshake: %{time_appconnect}s\n\
  Erste Byte: %{time_starttransfer}s\n\
  Total: %{time_total}s\n" \
  -o /dev/null -s \
  https://api.github.com
```

### Parallele Requests

```bash
# Mehrere URLs gleichzeitig
curl -Z \
  https://jsonplaceholder.typicode.com/posts/1 \
  https://jsonplaceholder.typicode.com/posts/2 \
  https://jsonplaceholder.typicode.com/posts/3
```

### Request speichern und wiederverwenden

```bash
# Request in Datei speichern
curl https://jsonplaceholder.typicode.com/posts/1 \
  --dump-header headers.txt \
  -o response.json

# Cookies speichern und wiederverwenden
curl -c cookies.txt -b cookies.txt \
  https://example.com/login \
  -d "user=max&pass=secret"
```

### Debugging mit Trace

```bash
# Vollständiger Trace
curl --trace trace.txt https://api.example.com/data

# Nur Headers tracen
curl --trace-ascii - https://api.example.com/data 2>&1 | grep "^[<>]"
```

## Praktische Übungen 🏋️

### Übung 1: Todo-Liste verwalten

```bash
# 1. Alle Todos abrufen
curl https://jsonplaceholder.typicode.com/todos?userId=1

# 2. Neues Todo erstellen
curl -X POST https://jsonplaceholder.typicode.com/todos \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "title": "cURL lernen",
    "completed": false
  }'

# 3. Todo als erledigt markieren (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# 4. Todo löschen
curl -X DELETE https://jsonplaceholder.typicode.com/todos/1
```

### Übung 2: User-Profil bearbeiten

```bash
# User abrufen
curl https://jsonplaceholder.typicode.com/users/1 | jq '.'

# Nur Email ändern (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email": "newemail@example.com"}'

# Komplettes Update (PUT) - alle Felder nötig!
curl -X PUT https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "name": "Neuer Name",
    "username": "neuername",
    "email": "neu@example.com",
    "address": {
      "street": "Neue Straße 1",
      "suite": "Apt. 1",
      "city": "Neustadt",
      "zipcode": "12345"
    },
    "phone": "1-234-567-8900",
    "website": "example.com"
  }'
```

## Cheat Sheet: Wann welche Methode? 📝

| Methode | Verwendung | Idempotent* | Safe** | Body |
|---------|------------|-------------|--------|------|
| GET | Daten abrufen | ✅ | ✅ | ❌ |
| POST | Neu erstellen | ❌ | ❌ | ✅ |
| PUT | Komplett ersetzen | ✅ | ❌ | ✅ |
| PATCH | Teilweise ändern | ❌ | ❌ | ✅ |
| DELETE | Löschen | ✅ | ❌ | ❌ |
| HEAD | Nur Headers | ✅ | ✅ | ❌ |
| OPTIONS | Optionen abfragen | ✅ | ✅ | ❌ |

*Idempotent = Mehrfache Aufrufe haben das gleiche Ergebnis
**Safe = Ändert keine Daten auf dem Server

## JavaScript vs cURL - Vollständiges Beispiel 🎭

Hier ein komplettes Beispiel, das zeigt, wie die gleiche Aufgabe mit cURL und JavaScript gelöst wird:

### Aufgabe: User-Verwaltung komplett

#### Mit cURL (Kommandozeile):
```bash
# 1. User abrufen
USER=$(curl -s https://jsonplaceholder.typicode.com/users/1)
echo $USER | jq '.'

# 2. Nur Email ändern (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email": "neue.email@example.com"}' \
  -s | jq '.'

# 3. Komplett ersetzen (PUT)
curl -X PUT https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "name": "Neuer Name",
    "username": "neueruser",
    "email": "neu@example.com",
    "phone": "123-456-789"
  }' -s | jq '.'

# 4. Löschen
curl -X DELETE https://jsonplaceholder.typicode.com/users/1 \
  -w "Status: %{http_code}\n"
```

#### Mit JavaScript (Browser/Node.js):
```html
<!DOCTYPE html>
<html>
<head>
    <title>User Management API Demo</title>
</head>
<body>
    <h1>User Management mit JavaScript</h1>
    <div id="output"></div>
    
    <script>
    // Hilfsfunktion für Ausgabe
    function log(message, data) {
        const output = document.getElementById('output');
        output.innerHTML += `<h3>${message}</h3>`;
        if (data) {
            output.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }
    }
    
    // Async Funktion für alle Operationen
    async function userManagement() {
        try {
            // 1. User abrufen (GET)
            log('1. User abrufen (GET)');
            const getResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await getResponse.json();
            log('Erhalten:', user);
            
            // 2. Nur Email ändern (PATCH)
            log('2. Nur Email ändern (PATCH)');
            const patchResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'neue.email@example.com'
                })
            });
            const patched = await patchResponse.json();
            log('Teilweise aktualisiert:', patched);
            
            // 3. Komplett ersetzen (PUT)
            log('3. Komplett ersetzen (PUT)');
            const putResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'Neuer Name',
                    username: 'neueruser',
                    email: 'neu@example.com',
                    phone: '123-456-789'
                })
            });
            const replaced = await putResponse.json();
            log('Komplett ersetzt:', replaced);
            
            // 4. Löschen (DELETE)
            log('4. Löschen (DELETE)');
            const deleteResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'DELETE'
            });
            log(`Gelöscht! Status: ${deleteResponse.status}`);
            
        } catch (error) {
            log('Fehler:', error.message);
        }
    }
    
    // Ausführen
    userManagement();
    </script>
</body>
</html>
```

### Praktische JavaScript Klasse für API-Calls

```javascript
// Wiederverwendbare API-Klasse
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    // GET
    async get(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        return response.json();
    }
    
    // POST
    async post(endpoint, data) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    
    // PUT
    async put(endpoint, data) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    
    // PATCH
    async patch(endpoint, data) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    
    // DELETE
    async delete(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}

// Verwendung:
const api = new APIClient('https://jsonplaceholder.typicode.com');

// Beispiele
api.get('/users/1').then(user => console.log(user));
api.patch('/users/1', { email: 'new@example.com' });
api.delete('/posts/1').then(success => console.log('Gelöscht:', success));
```

## Zusammenfassung 🎯

### Die goldenen Regeln:

1. **GET** für's Lesen, niemals für Änderungen
2. **POST** für neue Ressourcen (bekommt neue ID)
3. **PUT** wenn du ALLES ersetzen willst
4. **PATCH** wenn du NUR TEILE ändern willst
5. **DELETE** zum Löschen (offensichtlich 😊)

### PUT vs PATCH Eselsbrücke:

- **PUT** = "Put the whole thing" (Leg das ganze Ding hin)
- **PATCH** = "Patch it up" (Flicke es)

Mit diesem Wissen kannst du jetzt jede REST API meistern! 💪