# Hands-On Exercises - Bringing It All Together

Now it's time to apply everything you've learned! These exercises will guide you through creating your own contribution to the Docker Foundation project.

## Prerequisites Checklist

Before starting, ensure you have:
- ✅ Git installed and working
- ✅ Docker Desktop installed and running
- ✅ A text editor (VS Code recommended)
- ✅ The repository cloned locally
- ✅ Read the previous guides

## Exercise 1: Setup and Exploration

### Step 1: Clone and Explore
```bash
# Clone the repository
git clone https://github.com/CloudHelden/DockerFoundation.git
cd DockerFoundation

# Explore the structure
ls -la
ls conf/
ls html/
```

### Step 2: Understand Existing Files
```bash
# Look at an example configuration
cat conf/andy.conf

# Look at an example HTML file
cat html/andy.html

# Check the Dockerfile
cat Dockerfile
```

**Questions to consider:**
- How are the conf files structured?
- What's the naming pattern?
- How do conf files connect to HTML files?

## Exercise 2: Create Your Branch

### Step 1: Create Feature Branch
```bash
# Make sure you're on main
git checkout main

# Create your branch
git checkout -b feature/yourname

# Verify you're on your branch
git branch
```

### Step 2: Plan Your Files
You'll need to create:
1. `conf/yourname.conf` - Nginx configuration
2. `html/yourname.html` - Your web page

## Exercise 3: Create Your Nginx Configuration

### Step 1: Create Your Config File
Create `conf/yourname.conf` with:

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

**Important:** Replace `yourname` with your actual name (lowercase, no spaces).

### Step 2: Verify Your Config
```bash
# Check your file was created
ls conf/
cat conf/yourname.conf
```

## Exercise 4: Create Your HTML Page

### Step 1: Create a Basic Page
Create `html/yourname.html`:

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
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        .info-box {
            background-color: #e3f2fd;
            padding: 15px;
            border-left: 4px solid #2196f3;
            margin: 20px 0;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to YourName's Docker Foundation Page</h1>
        
        <div class="info-box">
            <p><strong>Achievement Unlocked!</strong> 🎉</p>
            <p>You've successfully created a web page served by Nginx in a Docker container!</p>
        </div>
        
        <h2>About Me</h2>
        <p>Hi! I'm YourName, and I'm learning DevOps fundamentals through hands-on practice.</p>
        
        <h2>What I've Learned</h2>
        <ul>
            <li><strong>Git:</strong> Version control, branching, and collaboration</li>
            <li><strong>Docker:</strong> Containerization and image management</li>
            <li><strong>HTML:</strong> Web page structure and content</li>
            <li><strong>Nginx:</strong> Web server configuration</li>
        </ul>
        
        <h2>Technical Details</h2>
        <p>This page is:</p>
        <ul>
            <li>Served by Nginx at <code>yourname.docker.local</code></li>
            <li>Running inside a Docker container</li>
            <li>Part of a collaborative Git repository</li>
        </ul>
        
        <h2>My Learning Journey</h2>
        <p>Through this project, I've gained practical experience with:</p>
        <ol>
            <li>Creating feature branches in Git</li>
            <li>Writing Nginx server configurations</li>
            <li>Building and running Docker containers</li>
            <li>Collaborating through pull requests</li>
        </ol>
        
        <footer>
            <hr>
            <p><em>Created by YourName | Docker Foundation Project | 2024</em></p>
        </footer>
    </div>
</body>
</html>
```

### Step 2: Personalize Your Page
Make it yours by:
- Adding your actual name
- Including your interests
- Adding your learning goals
- Using different colors in the CSS

## Exercise 5: Test Locally with Docker

### Step 1: Build the Docker Image
```bash
# Make sure you're in the project root
docker build -t dockerfoundation .
```

### Step 2: Run the Container
```bash
# Run in foreground first to see any errors
docker run -p 8080:80 dockerfoundation

# If it works, stop it (Ctrl+C) and run in background
docker run -d --name dockerfoundation -p 8080:80 dockerfoundation
```

### Step 3: Configure Local DNS
Add your domain to your hosts file:

**On Mac/Linux:**
```bash
sudo nano /etc/hosts
# Add this line:
127.0.0.1 yourname.docker.local
```

**On Windows (as Administrator):**
Edit `C:\Windows\System32\drivers\etc\hosts`

### Step 4: Test Your Page
1. Open browser to: http://yourname.docker.local:8080
2. You should see your page!
3. If not, check:
   - Docker logs: `docker logs dockerfoundation`
   - Your nginx config syntax
   - File names match exactly

## Exercise 6: Commit and Push Your Changes

### Step 1: Check Your Changes
```bash
# See what files you've changed
git status

# Review your changes
git diff
```

### Step 2: Stage and Commit
```bash
# Stage your files
git add conf/yourname.conf html/yourname.html

# Verify what's staged
git status

# Commit with a descriptive message
git commit -m "Add yourname's nginx config and personal page"
```

### Step 3: Push to GitHub
```bash
# Push your branch
git push origin feature/yourname
```

## Exercise 7: Create a Pull Request

1. Go to: https://github.com/CloudHelden/DockerFoundation
2. You'll see a banner: "Compare & pull request"
3. Click it and fill out:
   - **Title:** "Add yourname's configuration and page"
   - **Description:** Explain what you've added
4. Create the pull request
5. Wait for review and merge!

## Advanced Exercises

### Exercise A: Enhance Your Page
Add to your HTML:
- A navigation menu
- An image (use placeholder: `https://via.placeholder.com/300`)
- A contact form (just the HTML, won't actually work)
- CSS animations

### Exercise B: Multiple Pages
1. Create `html/yourname-about.html`
2. Update your nginx config to serve it at `/about`
3. Add navigation between pages

### Exercise C: Error Pages
1. Create `html/yourname-404.html`
2. Update nginx config to use it:
   ```nginx
   error_page 404 /yourname-404.html;
   location = /yourname-404.html {
       internal;
   }
   ```

## Troubleshooting Guide

### Page Not Loading

1. **Check Docker is running:**
   ```bash
   docker ps
   ```

2. **Check nginx logs:**
   ```bash
   docker logs dockerfoundation
   ```

3. **Verify file names match exactly:**
   - `conf/yourname.conf` references `yourname.html`
   - `html/yourname.html` exists

4. **Test nginx config:**
   ```bash
   docker exec dockerfoundation nginx -t
   ```

### Git Issues

**"Permission denied"**
- Make sure you've set up SSH keys or use HTTPS
- Check you have access to the repository

**"Merge conflicts"**
- Pull latest changes: `git pull origin main`
- Resolve conflicts in files
- Commit the resolution

### Docker Issues

**"Port already in use"**
```bash
# Find what's using port 8080
lsof -i :8080  # Mac/Linux
netstat -ano | findstr :8080  # Windows

# Or use a different port
docker run -p 3000:80 dockerfoundation
```

**"Cannot connect to Docker daemon"**
- Make sure Docker Desktop is running
- On Linux, ensure your user is in the docker group

## Final Checklist

Before submitting your PR, verify:
- ✅ Your branch has a descriptive name
- ✅ Both files are created and committed
- ✅ Your nginx config has the correct server_name
- ✅ Your HTML file validates (check at validator.w3.org)
- ✅ You've tested locally with Docker
- ✅ Your commit message is clear
- ✅ You've pushed to GitHub
- ✅ Pull request is created with description

## Congratulations! 🎉

You've successfully:
- Used Git for version control
- Built and run a Docker container
- Created a web page with HTML
- Configured Nginx
- Collaborated via pull requests

## What's Next?

Consider learning:
1. **CSS Frameworks:** Bootstrap, Tailwind CSS
2. **JavaScript:** Add interactivity to your pages
3. **Docker Compose:** Multi-container applications
4. **CI/CD:** Automated testing and deployment
5. **Cloud Deployment:** AWS, Azure, Google Cloud

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Docker Documentation](https://docs.docker.com/)
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Nginx Documentation](https://nginx.org/en/docs/)

Remember: The best way to learn is by doing. Experiment, break things, fix them, and have fun!