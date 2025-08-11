# HTML Basics - Creating Web Pages

HTML (HyperText Markup Language) is the foundation of web pages. It's like the skeleton of a website - it provides structure and meaning to content.

## What is HTML?

HTML uses "tags" to mark up content, telling browsers how to display it. Think of it like formatting a Word document, but with code.

```html
<p>This is a paragraph</p>
<h1>This is a heading</h1>
<strong>This is bold text</strong>
```

## HTML Structure

Every HTML document has the same basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title (shown in browser tab)</title>
</head>
<body>
    <!-- Your content goes here -->
    <h1>Welcome to My Page</h1>
    <p>This is where your content lives.</p>
</body>
</html>
```

### Understanding the Structure

- `<!DOCTYPE html>` - Tells the browser this is HTML5
- `<html>` - Root element, contains everything
- `<head>` - Metadata (not visible on page)
- `<title>` - Page title (browser tab)
- `<body>` - Visible content

## Essential HTML Tags

### Headings
```html
<h1>Main Heading (biggest)</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Even smaller</h4>
<h5>Smaller still</h5>
<h6>Smallest heading</h6>
```

### Text Content
```html
<p>This is a paragraph of text.</p>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule (line) -->
```

### Text Formatting
```html
<strong>Bold text</strong>
<em>Italic text</em>
<u>Underlined text</u>
<code>Code text</code>
```

### Lists
```html
<!-- Unordered (bullet) list -->
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<!-- Ordered (numbered) list -->
<ol>
    <li>Step one</li>
    <li>Step two</li>
    <li>Step three</li>
</ol>
```

### Links
```html
<a href="https://google.com">Link to Google</a>
<a href="another-page.html">Link to another page</a>
<a href="#section">Link to section on same page</a>
```

### Images
```html
<img src="image.jpg" alt="Description of image">
<img src="https://via.placeholder.com/150" alt="Placeholder">
```

### Containers
```html
<div>A generic container (block)</div>
<span>An inline container</span>

<section>A section of content</section>
<article>An independent piece of content</article>
<header>Header content</header>
<footer>Footer content</footer>
```

## Creating Your Personal Page

Let's create a personal page for the Docker Foundation project!

### Basic Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YourName - Docker Foundation</title>
</head>
<body>
    <h1>Welcome to YourName's Page</h1>
    <p>This is my personal page in the Docker Foundation project.</p>
    
    <h2>About Me</h2>
    <p>I'm learning Docker, Git, and HTML!</p>
    
    <h2>What I'm Learning</h2>
    <ul>
        <li>Git version control</li>
        <li>Docker containerization</li>
        <li>HTML web development</li>
        <li>Nginx web server</li>
    </ul>
    
    <h2>My Goals</h2>
    <ol>
        <li>Master Git workflows</li>
        <li>Understand Docker concepts</li>
        <li>Build web pages</li>
    </ol>
    
    <footer>
        <hr>
        <p>Created by YourName for Docker Foundation</p>
    </footer>
</body>
</html>
```

### Enhanced Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YourName - Docker Foundation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        code {
            background-color: #e9ecef;
            padding: 2px 4px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Welcome to YourName's Docker Foundation Page</h1>
    
    <div class="highlight">
        <p><strong>Status:</strong> Learning Docker, Git, and HTML! 🚀</p>
    </div>
    
    <h2>About This Project</h2>
    <p>This page is served by <strong>Nginx</strong> running in a <strong>Docker</strong> container.</p>
    <p>I created it as part of learning:</p>
    <ul>
        <li><code>git</code> - for version control</li>
        <li><code>docker</code> - for containerization</li>
        <li><code>html</code> - for web development</li>
    </ul>
    
    <h2>Technical Details</h2>
    <p>This page is accessible at: <code>yourname.docker.local</code></p>
    <p>The nginx configuration maps this domain to my HTML file.</p>
    
    <h2>What I've Learned</h2>
    <ol>
        <li>How to create and manage Git branches</li>
        <li>Building Docker images with Dockerfiles</li>
        <li>Configuring Nginx virtual hosts</li>
        <li>Writing structured HTML documents</li>
    </ol>
    
    <h2>Next Steps</h2>
    <p>After completing this project, I plan to:</p>
    <ul>
        <li>Learn CSS for better styling</li>
        <li>Explore JavaScript for interactivity</li>
        <li>Understand Docker Compose for multi-container apps</li>
    </ul>
    
    <footer>
        <hr>
        <p><em>Created by YourName | Docker Foundation Project</em></p>
        <p>Last updated: <time>2024-01-11</time></p>
    </footer>
</body>
</html>
```

## Adding Style with CSS

While not required, you can make your page look better with CSS:

### Inline Styles
```html
<p style="color: blue; font-size: 18px;">Blue text</p>
```

### Internal Styles
```html
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: navy;
        }
    </style>
</head>
```

## Creating Your Nginx Configuration

Along with your HTML file, you need a configuration file to tell Nginx how to serve it.

### Basic nginx.conf Template
```nginx
server {
    listen 80;
    server_name yourname.docker.local;
    
    location / {
        root /usr/share/nginx/html;
        index yourname.html;
    }
}
```

Replace `yourname` with your actual name throughout!

## Common HTML Mistakes

### 1. Forgetting Closing Tags
```html
<!-- Wrong -->
<p>This is a paragraph
<p>Another paragraph

<!-- Right -->
<p>This is a paragraph</p>
<p>Another paragraph</p>
```

### 2. Incorrect Nesting
```html
<!-- Wrong -->
<strong><em>Bold and italic</strong></em>

<!-- Right -->
<strong><em>Bold and italic</em></strong>
```

### 3. Missing Quotes
```html
<!-- Wrong -->
<img src=image.jpg alt=My Image>

<!-- Right -->
<img src="image.jpg" alt="My Image">
```

## Validation

Always validate your HTML:
1. Use online validators like validator.w3.org
2. Check in browser developer tools (F12)
3. Look for errors in the console

## Practice Exercises

### Exercise 1: Create Your Basic Page
1. Create `html/yourname.html`
2. Use the basic template above
3. Personalize the content
4. Save the file

### Exercise 2: Add More Content
Add to your page:
- A list of your hobbies
- A favorite quote in a blockquote
- A table with your schedule
- Links to resources you find helpful

### Exercise 3: Style Your Page
1. Add a `<style>` section
2. Change colors, fonts, spacing
3. Make it uniquely yours!

## HTML Best Practices

1. **Use semantic HTML**: Choose tags based on meaning, not appearance
2. **Always include alt text**: For images, provide descriptions
3. **Validate your code**: Use W3C validator
4. **Keep it simple**: Start basic, add complexity gradually
5. **Comment your code**: `<!-- This is a comment -->`

## Testing Your Page

### Local Testing
1. Open your HTML file directly in a browser
2. Make changes and refresh to see updates

### Docker Testing
1. Build the Docker image
2. Run the container
3. Add your domain to `/etc/hosts`:
   ```
   127.0.0.1 yourname.docker.local
   ```
4. Visit http://yourname.docker.local:8080

## Next Steps

You now have all the pieces! Time to put it all together. Head to [Hands-On Exercises](04-exercises.md) to complete your project.

## Quick Reference

| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings |
| `<p>` | Paragraph |
| `<a href="">` | Link |
| `<img src="">` | Image |
| `<ul>` + `<li>` | Bullet list |
| `<ol>` + `<li>` | Numbered list |
| `<strong>` | Bold |
| `<em>` | Italic |
| `<div>` | Container |
| `<br>` | Line break |
| `<hr>` | Horizontal line |