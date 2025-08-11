# Advanced Setup - Multi-File Website with Nginx

In this advanced exercise, you'll learn to configure Nginx to serve an entire directory structure, allowing you to create a complete website with multiple HTML pages, CSS files, JavaScript, and images.

## What You'll Build

Instead of a single HTML file, you'll create:
- A complete website structure with multiple pages
- External CSS stylesheets
- Image assets
- Proper directory organization
- Advanced Nginx configuration

## Project Structure

Your advanced setup will look like this:

```
DockerFoundation/
├── sites/                     # New directory for complete websites
│   └── yourname/             # Your personal website directory
│       ├── index.html        # Homepage
│       ├── about.html        # About page
│       ├── projects.html     # Projects page
│       ├── css/              # Stylesheets directory
│       │   ├── main.css      # Main stylesheet
│       │   └── responsive.css # Responsive design
│       ├── js/               # JavaScript directory
│       │   └── script.js     # Interactive features
│       └── images/           # Images directory
│           ├── profile.jpg   # Your profile picture
│           └── logo.png      # Site logo
└── conf/
    └── yourname-advanced.conf # Advanced Nginx configuration
```

## Step 1: Create Directory Structure

```bash
# Create your site directory structure
mkdir -p sites/yourname/css
mkdir -p sites/yourname/js
mkdir -p sites/yourname/images

# Verify the structure
tree sites/yourname/  # or use 'ls -la' if tree isn't installed
```

## Step 2: Create Advanced Nginx Configuration

Create `conf/yourname-advanced.conf`:

```nginx
server {
    listen 80;
    server_name yourname-advanced.docker.local;
    
    # Root directory points to your entire site folder
    root /usr/share/nginx/sites/yourname;
    
    # Default file to serve
    index index.html;
    
    # Main location block
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Custom 404 page
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript text/javascript text/plain text/xml application/json application/xml+rss;
}
```

## Step 3: Update Dockerfile

Create a new Dockerfile or modify the existing one to include the sites directory:

```dockerfile
FROM nginx:latest
COPY conf/* /etc/nginx/conf.d/
COPY html/* /usr/share/nginx/html/
# Add this line to copy entire sites directory
COPY sites/ /usr/share/nginx/sites/
```

## Step 4: Create Your Website Files

### Homepage - `sites/yourname/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YourName - Portfolio</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="images/logo.png" alt="Logo">
            </div>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm YourName, a developer learning Docker, Nginx, and web technologies.</p>
                <a href="about.html" class="cta-button">Learn More About Me</a>
            </div>
            <div class="hero-image">
                <img src="images/profile.jpg" alt="Profile Picture">
            </div>
        </section>
        
        <section class="features">
            <h2>What I'm Learning</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>Docker</h3>
                    <p>Containerization and deployment strategies</p>
                </div>
                <div class="feature-card">
                    <h3>Nginx</h3>
                    <p>Web server configuration and optimization</p>
                </div>
                <div class="feature-card">
                    <h3>Web Development</h3>
                    <p>HTML, CSS, and JavaScript fundamentals</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 YourName. Built with Docker & Nginx</p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### Main Stylesheet - `sites/yourname/css/main.css`

```css
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
}

/* Header and Navigation */
header {
    background-color: #2c3e50;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo img {
    height: 40px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #3498db;
}

/* Main Content */
main {
    margin-top: 80px;
    min-height: calc(100vh - 160px);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 2rem;
}

.hero-content {
    flex: 1;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #2980b9;
}

.hero-image {
    flex: 0 0 300px;
    margin-left: 2rem;
}

.hero-image img {
    width: 100%;
    border-radius: 50%;
    border: 5px solid white;
}

/* Features Section */
.features {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #3498db;
    margin-bottom: 1rem;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}

/* Page Specific Styles */
.content-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.content-page h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid #3498db;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    transition: box-shadow 0.3s;
}

.project-card:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.project-card h3 {
    color: #3498db;
    margin-bottom: 1rem;
}

.tech-stack {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.tech-tag {
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
}
```

### Responsive Styles - `sites/yourname/css/responsive.css`

```css
/* Tablet Styles */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-image {
        margin-left: 0;
        margin-top: 2rem;
        flex: 0 0 200px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    nav {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        gap: 1rem;
    }
}

/* Mobile Styles */
@media (max-width: 480px) {
    .hero {
        padding: 2rem 1rem;
    }
    
    .hero h1 {
        font-size: 1.5rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .features {
        padding: 2rem 1rem;
    }
    
    .features h2 {
        font-size: 1.75rem;
    }
    
    .nav-links {
        flex-direction: column;
        text-align: center;
    }
    
    main {
        margin-top: 120px;
    }
}
```

### JavaScript - `sites/yourname/js/script.js`

```javascript
// Simple interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Simple animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const cards = document.querySelectorAll('.feature-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});
```

### About Page - `sites/yourname/about.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - YourName</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="images/logo.png" alt="Logo">
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <div class="content-page">
            <h1>About Me</h1>
            
            <section>
                <h2>My Journey</h2>
                <p>I'm passionate about learning modern web technologies and DevOps practices. This Docker Foundation project has been an incredible learning experience, combining version control, containerization, and web development.</p>
            </section>
            
            <section>
                <h2>Skills I'm Developing</h2>
                <ul>
                    <li><strong>Version Control:</strong> Git workflows, branching strategies, and collaboration</li>
                    <li><strong>Containerization:</strong> Docker fundamentals, image creation, and container management</li>
                    <li><strong>Web Servers:</strong> Nginx configuration, virtual hosts, and performance optimization</li>
                    <li><strong>Frontend Development:</strong> HTML5, CSS3, responsive design, and JavaScript</li>
                </ul>
            </section>
            
            <section>
                <h2>Current Focus</h2>
                <p>I'm currently focused on understanding how modern web applications are deployed and served. This project demonstrates:</p>
                <ul>
                    <li>How to structure a multi-page website</li>
                    <li>Proper organization of assets (CSS, JS, images)</li>
                    <li>Server configuration for optimal performance</li>
                    <li>Security best practices in web serving</li>
                </ul>
            </section>
            
            <section>
                <h2>Future Goals</h2>
                <p>After mastering these fundamentals, I plan to explore:</p>
                <ul>
                    <li>Container orchestration with Kubernetes</li>
                    <li>CI/CD pipelines</li>
                    <li>Cloud deployment strategies</li>
                    <li>Full-stack application development</li>
                </ul>
            </section>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2024 YourName. Built with Docker & Nginx</p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### Projects Page - `sites/yourname/projects.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - YourName</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="images/logo.png" alt="Logo">
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html" class="active">Projects</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <div class="content-page">
            <h1>My Projects</h1>
            
            <div class="project-grid">
                <div class="project-card">
                    <h3>Docker Foundation Website</h3>
                    <p>A multi-page portfolio website served by Nginx in a Docker container, demonstrating modern DevOps practices.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">Nginx</span>
                        <span class="tech-tag">HTML/CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>Git Collaboration</h3>
                    <p>Successfully collaborated with team members using Git version control, managing branches and pull requests.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">Git</span>
                        <span class="tech-tag">GitHub</span>
                        <span class="tech-tag">Markdown</span>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>Responsive Design Implementation</h3>
                    <p>Created a fully responsive website that works seamlessly across desktop, tablet, and mobile devices.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">CSS Grid</span>
                        <span class="tech-tag">Flexbox</span>
                        <span class="tech-tag">Media Queries</span>
                    </div>
                </div>
            </div>
            
            <section>
                <h2>Learning Projects</h2>
                <p>These are projects I'm planning to work on next:</p>
                <ul>
                    <li>RESTful API with Node.js and Express</li>
                    <li>React-based single-page application</li>
                    <li>Microservices architecture with Docker Compose</li>
                    <li>Automated deployment pipeline</li>
                </ul>
            </section>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2024 YourName. Built with Docker & Nginx</p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### 404 Error Page - `sites/yourname/404.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <link rel="stylesheet" href="/css/main.css">
    <style>
        .error-page {
            text-align: center;
            padding: 4rem 2rem;
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .error-code {
            font-size: 6rem;
            color: #3498db;
            margin-bottom: 1rem;
        }
        .error-message {
            font-size: 1.5rem;
            color: #666;
            margin-bottom: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="/images/logo.png" alt="Logo">
            </div>
            <ul class="nav-links">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/projects.html">Projects</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <div class="error-page">
            <div class="error-code">404</div>
            <div class="error-message">Oops! Page not found.</div>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/index.html" class="cta-button">Go Home</a>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2024 YourName. Built with Docker & Nginx</p>
    </footer>
</body>
</html>
```

## Step 5: Create Placeholder Images

For now, create placeholder images:

```bash
# Create placeholder images using ImageMagick (if installed)
convert -size 300x300 xc:gray sites/yourname/images/profile.jpg
convert -size 100x40 xc:gray sites/yourname/images/logo.png

# Or download from placeholder service
curl -o sites/yourname/images/profile.jpg https://via.placeholder.com/300
curl -o sites/yourname/images/logo.png https://via.placeholder.com/100x40
```

## Step 6: Build and Test

```bash
# Build the Docker image
docker build -t dockerfoundation-advanced .

# Run the container
docker run -d --name dockerfoundation-advanced -p 8081:80 dockerfoundation-advanced

# Add to hosts file
echo "127.0.0.1 yourname-advanced.docker.local" | sudo tee -a /etc/hosts

# Test your site
open http://yourname-advanced.docker.local:8081
```

## Advanced Configuration Options

### Enable Directory Listing

To browse directories without index files:

```nginx
location /downloads/ {
    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;
}
```

### Password Protection

Add basic authentication to a directory:

```nginx
location /admin/ {
    auth_basic "Admin Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
```

### Custom MIME Types

For special file types:

```nginx
location ~ \.md$ {
    add_header Content-Type text/plain;
}
```

### Rate Limiting

Prevent abuse:

```nginx
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;

server {
    location /api/ {
        limit_req zone=one burst=5;
    }
}
```

## Testing Your Advanced Setup

### 1. Test All Pages
- Navigate to each page
- Verify navigation works
- Check that styles load
- Ensure images display

### 2. Test Responsive Design
- Resize browser window
- Use browser dev tools device mode
- Test on actual mobile device

### 3. Performance Testing
```bash
# Check response headers
curl -I http://yourname-advanced.docker.local:8081

# Test gzip compression
curl -H "Accept-Encoding: gzip" -I http://yourname-advanced.docker.local:8081/css/main.css
```

### 4. Security Headers
Verify security headers are present in response

## Troubleshooting

### CSS/JS Not Loading
- Check file paths in HTML
- Verify files exist in correct locations
- Check browser console for 404 errors

### Images Not Showing
- Verify image files exist
- Check file permissions
- Look for case sensitivity issues

### Nginx Config Errors
```bash
# Test configuration
docker exec dockerfoundation-advanced nginx -t

# View error logs
docker logs dockerfoundation-advanced
```

## Next Steps

1. **Add Dynamic Content**: Learn server-side languages
2. **Database Integration**: Store and retrieve data
3. **API Development**: Create RESTful services
4. **HTTPS/SSL**: Secure your site with certificates
5. **Load Balancing**: Scale with multiple containers
6. **Monitoring**: Add logging and metrics

## Additional Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Web Performance Optimization](https://web.dev/fast/)

Congratulations! You've now built a complete multi-page website served by Nginx in Docker, with proper structure, styling, and configuration!