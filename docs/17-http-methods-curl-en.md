# HTTP Methods Explained - PUT vs PATCH and More with Real cURL Examples 🚀

## The Big Difference: PUT vs PATCH 🤔

The most important difference that many people confuse:

- **PUT** = Replace the ENTIRE object (like tearing down a house and rebuilding)
- **PATCH** = Change ONLY specific fields (like renovating one room)

### Visualized with an Example:

```javascript
// Original object in database:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "city": "New York"
}

// PUT - Must contain EVERYTHING (or fields will be deleted!)
{
  "name": "John Doe",
  "email": "john.new@example.com",  // Only this we wanted to change
  "age": 30,                         // Must still be included!
  "city": "New York"                 // Must still be included!
}

// PATCH - Only what changes
{
  "email": "john.new@example.com"    // Just this! Rest stays unchanged
}
```

## Test All HTTP Methods with Real APIs 🛠️

We're using **JSONPlaceholder** - a free test API you can try immediately!

### cURL vs JavaScript - Both Ways to Success 🎯

Every API operation can be performed with both cURL (command line) and JavaScript (browser/Node.js). Here we show you both ways!

### 1. GET - Fetch Data 📥

#### With cURL:
```bash
# Get all posts
curl https://jsonplaceholder.typicode.com/posts

# Get a specific post
curl https://jsonplaceholder.typicode.com/posts/1

# With pretty formatting (pipe to jq)
curl https://jsonplaceholder.typicode.com/posts/1 | jq '.'

# Show only headers (-I)
curl -I https://jsonplaceholder.typicode.com/posts/1

# Filter with query parameters
curl "https://jsonplaceholder.typicode.com/posts?userId=1"

# Verbose mode for debugging (-v)
curl -v https://jsonplaceholder.typicode.com/posts/1
```

#### With JavaScript (fetch API):
```javascript
// Get all posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts));

// Get a specific post
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => console.log(post));

// Filter with query parameters
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(posts => console.log(posts));

// With async/await (modern approach)
async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();
  console.log(post);
}

// Check headers
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Data:', data));
```

**Example Response:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur..."
}
```

### 2. POST - Create New ✨

```bash
# Simple POST with JSON data
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My new post",
    "body": "This is the content of my post",
    "userId": 1
  }'

# POST with data from a file
echo '{
  "title": "Post from file",
  "body": "Content from file",
  "userId": 1
}' > post.json

curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @post.json

# POST with form data (application/x-www-form-urlencoded)
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "title=URL%20Encoded%20Post&body=Test%20Content&userId=1"
```

**Response shows the new object with ID:**
```json
{
  "title": "My new post",
  "body": "This is the content of my post",
  "userId": 1,
  "id": 101
}
```

### 3. PUT - Complete Replace 🔄

```bash
# PUT - ALL fields must be present!
curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "Completely new title",
    "body": "Completely new content",
    "userId": 1
  }'

# WARNING: If you forget a field, it will be set to null/undefined!
# Bad example (forgets userId):
curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "Only title",
    "body": "Only body"
  }'
# userId is now gone! 😱
```

### 4. PATCH - Partial Update ✏️

```bash
# PATCH - Only change what you want
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Only the title changes"
  }'

# Change multiple fields at once
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New title",
    "body": "New body"
  }'

# Change only nested field (if API supports it)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "address": {
      "city": "Los Angeles"
    }
  }'
```

### 5. DELETE - Remove 🗑️

```bash
# Simple DELETE
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1

# DELETE with confirmation header
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1 \
  -H "Confirm: true"

# DELETE and check response status
curl -X DELETE -w "\nHTTP Status: %{http_code}\n" \
  https://jsonplaceholder.typicode.com/posts/1
```

### 6. HEAD - Headers Only, No Body 📋

```bash
# HEAD - Check if resource exists without loading data
curl -I https://jsonplaceholder.typicode.com/posts/1

# Or with -X HEAD
curl -X HEAD -v https://jsonplaceholder.typicode.com/posts/1
```

**Typical Response (headers only):**
```
HTTP/2 200
content-type: application/json; charset=utf-8
cache-control: max-age=43200
expires: -1
pragma: no-cache
```

### 7. OPTIONS - What's Allowed? 🔍

```bash
# OPTIONS - Shows allowed methods
curl -X OPTIONS https://jsonplaceholder.typicode.com/posts \
  -H "Access-Control-Request-Method: POST" \
  -H "Origin: http://localhost:3000" \
  -v
```

## Real API Examples with Different Services 🌍

### GitHub API

```bash
# GET - Public repos of a user
curl https://api.github.com/users/torvalds/repos \
  | jq '.[0:3] | .[] | {name: .name, stars: .stargazers_count}'

# POST - Create an issue (needs token)
curl -X POST https://api.github.com/repos/OWNER/REPO/issues \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{
    "title": "Found a bug",
    "body": "Description of the bug",
    "labels": ["bug"]
  }'

# PATCH - Update issue
curl -X PATCH https://api.github.com/repos/OWNER/REPO/issues/1 \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -d '{
    "state": "closed"
  }'
```

### ReqRes.in (Test API)

```bash
# POST - Register user
curl -X POST https://reqres.in/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }'

# PUT - Completely update user
curl -X PUT https://reqres.in/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "job": "Software Developer"
  }'

# PATCH - Only change job
curl -X PATCH https://reqres.in/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{
    "job": "Senior Developer"
  }'

# DELETE - Delete user
curl -X DELETE https://reqres.in/api/users/2 \
  -w "\nStatus: %{http_code}\n"
```

### Httpbin.org (Echo Service for Testing)

```bash
# Test different methods - shows you back what you send
curl -X POST https://httpbin.org/post \
  -H "Content-Type: application/json" \
  -H "Custom-Header: MyValue" \
  -d '{"test": "data"}'

curl -X PUT https://httpbin.org/put \
  -d "test=data"

curl -X PATCH https://httpbin.org/patch \
  -d '{"partial": "update"}'

curl -X DELETE https://httpbin.org/delete
```

## PUT vs PATCH - Practical Scenario 💡

Imagine you have a user in your database:

```json
{
  "id": 123,
  "username": "johndoe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "city": "New York",
  "premium": false,
  "lastLogin": "2024-01-15T10:30:00Z"
}
```

### Scenario 1: Change Email

```bash
# ❌ WRONG with PUT (deletes all other fields!)
curl -X PUT https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.new@example.com"
  }'
# RESULT: All other fields are gone! 😱

# ✅ CORRECT with PUT (send all fields)
curl -X PUT https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 123,
    "username": "johndoe",
    "email": "john.new@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "city": "New York",
    "premium": false,
    "lastLogin": "2024-01-15T10:30:00Z"
  }'

# ✅ BETTER with PATCH (only email)
curl -X PATCH https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.new@example.com"
  }'
```

### Scenario 2: Upgrade User to Premium

```bash
# With PATCH - elegant and simple
curl -X PATCH https://api.example.com/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "premium": true
  }'
```

## Authentication in cURL 🔐

### API Key in Header

```bash
curl https://api.example.com/data \
  -H "X-API-Key: your-api-key"

# Or as Bearer Token
curl https://api.example.com/data \
  -H "Authorization: Bearer your-token-here"
```

### Basic Auth

```bash
# With -u flag
curl -u username:password https://api.example.com/secure

# Or in header
curl https://api.example.com/secure \
  -H "Authorization: Basic $(echo -n username:password | base64)"
```

### OAuth 2.0 Flow

```bash
# 1. Get token
TOKEN=$(curl -X POST https://auth.example.com/oauth/token \
  -d "grant_type=client_credentials" \
  -d "client_id=your-client-id" \
  -d "client_secret=your-secret" \
  | jq -r '.access_token')

# 2. Use token
curl https://api.example.com/protected \
  -H "Authorization: Bearer $TOKEN"
```

## Advanced cURL Tricks 🎩

### Measure Response Time

```bash
curl -w "\n\nTime Details:\n\
  DNS Lookup: %{time_namelookup}s\n\
  TCP Connect: %{time_connect}s\n\
  SSL Handshake: %{time_appconnect}s\n\
  First Byte: %{time_starttransfer}s\n\
  Total: %{time_total}s\n" \
  -o /dev/null -s \
  https://api.github.com
```

### Parallel Requests

```bash
# Multiple URLs simultaneously
curl -Z \
  https://jsonplaceholder.typicode.com/posts/1 \
  https://jsonplaceholder.typicode.com/posts/2 \
  https://jsonplaceholder.typicode.com/posts/3
```

### Save and Reuse Requests

```bash
# Save request to file
curl https://jsonplaceholder.typicode.com/posts/1 \
  --dump-header headers.txt \
  -o response.json

# Save and reuse cookies
curl -c cookies.txt -b cookies.txt \
  https://example.com/login \
  -d "user=john&pass=secret"
```

### Debugging with Trace

```bash
# Complete trace
curl --trace trace.txt https://api.example.com/data

# Trace only headers
curl --trace-ascii - https://api.example.com/data 2>&1 | grep "^[<>]"
```

## Practical Exercises 🏋️

### Exercise 1: Manage Todo List

```bash
# 1. Get all todos
curl https://jsonplaceholder.typicode.com/todos?userId=1

# 2. Create new todo
curl -X POST https://jsonplaceholder.typicode.com/todos \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "title": "Learn cURL",
    "completed": false
  }'

# 3. Mark todo as completed (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# 4. Delete todo
curl -X DELETE https://jsonplaceholder.typicode.com/todos/1
```

### Exercise 2: Edit User Profile

```bash
# Get user
curl https://jsonplaceholder.typicode.com/users/1 | jq '.'

# Only change email (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email": "newemail@example.com"}'

# Complete update (PUT) - all fields needed!
curl -X PUT https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "name": "New Name",
    "username": "newusername",
    "email": "new@example.com",
    "address": {
      "street": "New Street 1",
      "suite": "Apt. 1",
      "city": "New City",
      "zipcode": "12345"
    },
    "phone": "1-234-567-8900",
    "website": "example.com"
  }'
```

## Cheat Sheet: When to Use Which Method? 📝

| Method | Use Case | Idempotent* | Safe** | Body |
|---------|----------|-------------|--------|------|
| GET | Fetch data | ✅ | ✅ | ❌ |
| POST | Create new | ❌ | ❌ | ✅ |
| PUT | Complete replace | ✅ | ❌ | ✅ |
| PATCH | Partial update | ❌ | ❌ | ✅ |
| DELETE | Remove | ✅ | ❌ | ❌ |
| HEAD | Headers only | ✅ | ✅ | ❌ |
| OPTIONS | Query options | ✅ | ✅ | ❌ |

*Idempotent = Multiple calls have the same result
**Safe = Doesn't change data on server

## JavaScript vs cURL - Complete Example 🎭

Here's a complete example showing how to accomplish the same task with both cURL and JavaScript:

### Task: Complete User Management

#### With cURL (Command Line):
```bash
# 1. Get user
USER=$(curl -s https://jsonplaceholder.typicode.com/users/1)
echo $USER | jq '.'

# 2. Change only email (PATCH)
curl -X PATCH https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email": "new.email@example.com"}' \
  -s | jq '.'

# 3. Complete replace (PUT)
curl -X PUT https://jsonplaceholder.typicode.com/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "name": "New Name",
    "username": "newuser",
    "email": "new@example.com",
    "phone": "123-456-789"
  }' -s | jq '.'

# 4. Delete
curl -X DELETE https://jsonplaceholder.typicode.com/users/1 \
  -w "Status: %{http_code}\n"
```

#### With JavaScript (Browser/Node.js):
```html
<!DOCTYPE html>
<html>
<head>
    <title>User Management API Demo</title>
</head>
<body>
    <h1>User Management with JavaScript</h1>
    <div id="output"></div>
    
    <script>
    // Helper function for output
    function log(message, data) {
        const output = document.getElementById('output');
        output.innerHTML += `<h3>${message}</h3>`;
        if (data) {
            output.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }
    }
    
    // Async function for all operations
    async function userManagement() {
        try {
            // 1. Get user (GET)
            log('1. Get user (GET)');
            const getResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await getResponse.json();
            log('Received:', user);
            
            // 2. Change only email (PATCH)
            log('2. Change only email (PATCH)');
            const patchResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'new.email@example.com'
                })
            });
            const patched = await patchResponse.json();
            log('Partially updated:', patched);
            
            // 3. Complete replace (PUT)
            log('3. Complete replace (PUT)');
            const putResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'New Name',
                    username: 'newuser',
                    email: 'new@example.com',
                    phone: '123-456-789'
                })
            });
            const replaced = await putResponse.json();
            log('Completely replaced:', replaced);
            
            // 4. Delete (DELETE)
            log('4. Delete (DELETE)');
            const deleteResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'DELETE'
            });
            log(`Deleted! Status: ${deleteResponse.status}`);
            
        } catch (error) {
            log('Error:', error.message);
        }
    }
    
    // Execute
    userManagement();
    </script>
</body>
</html>
```

### Practical JavaScript Class for API Calls

```javascript
// Reusable API class
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

// Usage:
const api = new APIClient('https://jsonplaceholder.typicode.com');

// Examples
api.get('/users/1').then(user => console.log(user));
api.patch('/users/1', { email: 'new@example.com' });
api.delete('/posts/1').then(success => console.log('Deleted:', success));
```

### When to Use cURL vs JavaScript

| Use Case | cURL | JavaScript |
|----------|------|------------|
| Quick API testing | ✅ Best choice | ❌ Overkill |
| Command line scripts | ✅ Perfect | ❌ Not suitable |
| Web applications | ❌ Not possible | ✅ Only option |
| Browser automation | ❌ Limited | ✅ Full control |
| Server-side scripts | ✅ Works well | ✅ Works well |
| CI/CD pipelines | ✅ Standard | ✅ Also good |
| Debugging APIs | ✅ Great for testing | ✅ Browser DevTools |

## Summary 🎯

### The Golden Rules:

1. **GET** for reading, never for changes
2. **POST** for new resources (gets new ID)
3. **PUT** when you want to replace EVERYTHING
4. **PATCH** when you want to change ONLY PARTS
5. **DELETE** for deletion (obviously 😊)

### PUT vs PATCH Memory Aid:

- **PUT** = "Put the whole thing" (Replace everything)
- **PATCH** = "Patch it up" (Fix parts)

With this knowledge, you can now master any REST API! 💪