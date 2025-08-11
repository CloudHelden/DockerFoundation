# Docker Basics - Containerization Made Simple

Docker lets you package applications with everything they need to run, ensuring they work the same everywhere - on your laptop, your friend's computer, or a server.

## Why Docker?

### The Problem
"It works on my machine!" - Every developer ever

Different computers have:
- Different operating systems
- Different software versions
- Different configurations

### The Solution
Docker creates isolated "containers" that include:
- Your application
- All dependencies
- The exact environment needed

Think of it like shipping. Instead of shipping loose items (your code), you put everything in a standardized container that can be moved anywhere.

## Key Concepts

### Image
A blueprint for creating containers. Like a recipe or template.

### Container
A running instance of an image. Like a cake made from a recipe.

### Dockerfile
Instructions for building an image. The actual recipe.

### Docker Hub
Online library of images. Like a cookbook store.

## Understanding Our Project's Dockerfile

Let's examine our Dockerfile:

```dockerfile
FROM nginx:latest
COPY conf/* /etc/nginx/conf.d/
COPY html/* /usr/share/nginx/html/
```

This means:
1. **FROM nginx:latest** - Start with the official nginx image
2. **COPY conf/*** - Copy all config files to nginx's config directory
3. **COPY html/*** - Copy all HTML files to nginx's web root

## Essential Docker Commands

### Building Images
```bash
# Build an image from a Dockerfile
docker build -t imagename .

# For our project
docker build -t dockerfoundation .
```

The `-t` flag "tags" (names) your image.

### Running Containers
```bash
# Basic run
docker run imagename

# Run with port mapping
docker run -p 8080:80 dockerfoundation

# Run in background (detached)
docker run -d -p 8080:80 dockerfoundation

# Run with a name
docker run -d --name mycontainer -p 8080:80 dockerfoundation
```

### Managing Containers
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop container_id_or_name

# Remove a container
docker rm container_id_or_name

# View container logs
docker logs container_id_or_name
```

### Managing Images
```bash
# List images
docker images

# Remove an image
docker rmi imagename

# Pull an image from Docker Hub
docker pull nginx:latest
```

## How Docker Works in Our Project

### 1. The Base Image
We start with `nginx:latest` - a pre-built web server image.

### 2. Adding Our Files
We COPY our configurations and HTML files into specific locations:
- `/etc/nginx/conf.d/` - Where nginx looks for site configurations
- `/usr/share/nginx/html/` - Where nginx serves files from

### 3. The Build Process
When you run `docker build`:
1. Docker downloads the nginx image (if needed)
2. Creates a new layer with your conf files
3. Creates another layer with your HTML files
4. Tags the final image as "dockerfoundation"

### 4. Running the Container
When you run the container:
1. Docker creates an isolated environment
2. Starts nginx inside
3. Nginx loads all `.conf` files
4. Each conf file sets up a virtual host
5. Requests to different domains serve different HTML files

## Hands-On Practice

### Exercise 1: Build the Image
```bash
# Make sure you're in the project root
cd DockerFoundation

# Build the image
docker build -t dockerfoundation .

# Watch the output - you'll see each step
```

### Exercise 2: Run Your Container
```bash
# Run with port mapping
docker run -p 8080:80 dockerfoundation

# Open your browser to http://localhost:8080
# (You'll see the default nginx page for now)
```

### Exercise 3: Explore Running Containers
```bash
# In a new terminal, list containers
docker ps

# See the logs
docker logs <container_id>

# Stop the container
docker stop <container_id>
```

### Exercise 4: Run in Background
```bash
# Run detached with a name
docker run -d --name dockerfoundation -p 8080:80 dockerfoundation

# Check it's running
docker ps

# Stop and remove
docker stop dockerfoundation
docker rm dockerfoundation
```

## Understanding Port Mapping

```bash
docker run -p 8080:80 dockerfoundation
```

This means:
- `8080` - Port on your computer (host)
- `80` - Port inside the container
- Requests to `localhost:8080` go to the container's port 80

You can use any available host port:
- `-p 3000:80` → access at `localhost:3000`
- `-p 8888:80` → access at `localhost:8888`

## Docker Workflow for Development

1. **Make changes** to your files
2. **Rebuild** the image: `docker build -t dockerfoundation .`
3. **Stop** old container: `docker stop dockerfoundation`
4. **Remove** old container: `docker rm dockerfoundation`
5. **Run** new container: `docker run -d --name dockerfoundation -p 8080:80 dockerfoundation`
6. **Test** your changes

### Pro Tip: One-liner Rebuild
```bash
docker stop dockerfoundation && docker rm dockerfoundation && docker build -t dockerfoundation . && docker run -d --name dockerfoundation -p 8080:80 dockerfoundation
```

## Troubleshooting

### "Port already in use"
```bash
# Find what's using the port
lsof -i :8080  # On Mac/Linux

# Or just use a different port
docker run -p 3000:80 dockerfoundation
```

### "Cannot connect to Docker daemon"
Make sure Docker Desktop is running!

### "Container exits immediately"
```bash
# Check logs for errors
docker logs container_name

# Run interactively to debug
docker run -it dockerfoundation /bin/bash
```

### "Changes don't appear"
Remember to:
1. Save your files
2. Rebuild the image
3. Stop the old container
4. Start a new container

## Best Practices

1. **Use specific tags**: `nginx:latest` can change, `nginx:1.21` is stable
2. **One process per container**: Keep containers focused
3. **Don't store data in containers**: Containers should be disposable
4. **Use meaningful names**: `docker run --name projectname`
5. **Clean up**: Remove unused containers and images regularly

## How Virtual Hosts Work

In our project, nginx uses virtual hosts to serve different content based on the domain:

1. Request to `andy.docker.local` → serves `andy.html`
2. Request to `sebastian.docker.local` → serves `sebastian_b.html`

This is configured in the `.conf` files you'll create.

## Next Steps

Now you understand how Docker packages and runs applications. Next, learn how to create the HTML content that Docker will serve! Head to [HTML Basics](03-html-basics.md).

## Quick Reference

| Command | What it does |
|---------|--------------|
| `docker build -t name .` | Build an image |
| `docker run name` | Run a container |
| `docker run -p 8080:80 name` | Run with port mapping |
| `docker ps` | List running containers |
| `docker stop id/name` | Stop a container |
| `docker rm id/name` | Remove a container |
| `docker images` | List images |
| `docker logs id/name` | View container output |