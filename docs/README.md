# Docker Foundation Learning Guide

Welcome to the Docker Foundation project! This guide will help you learn the fundamentals of Git, Docker, and HTML through a practical, hands-on project.

## What You'll Learn

Through this project, you'll master:
- **Git**: Version control, branching, pull requests, and collaboration
- **Docker**: Containerization basics, Dockerfile creation, and running containers
- **HTML**: Basic web page structure and content
- **Nginx**: Web server configuration basics

## Project Overview

In this project, each student creates their own personalized web page served by Nginx running in a Docker container. You'll collaborate using Git to add your configuration to the shared repository.

## Learning Path

### 1. [Git Basics](01-git-basics.md)
Learn how to:
- Clone repositories
- Create branches
- Make commits
- Submit pull requests
- Resolve merge conflicts

### 2. [Docker Fundamentals](02-docker-basics.md)
Understand:
- What containers are and why we use them
- How to build Docker images
- Running and managing containers
- Understanding Dockerfiles

### 3. [HTML Essentials](03-html-basics.md)
Create:
- Basic HTML structure
- Adding content and formatting
- Creating your personal page

### 4. [Hands-On Exercises](04-exercises.md)
Complete the project by:
- Setting up your development environment
- Creating your personal web page
- Configuring Nginx
- Building and testing locally
- Submitting your work via Git

## Prerequisites

Before starting, ensure you have:
- Git installed on your computer
- Docker Desktop installed and running
- A text editor (VS Code recommended)
- A GitHub account

## Getting Started

1. Start with the [Git Basics](01-git-basics.md) guide
2. Work through each section in order
3. Complete the hands-on exercises
4. Ask questions when stuck!

## Project Structure

```
DockerFoundation/
├── Dockerfile          # Defines our Docker image
├── conf/              # Nginx configurations (one per student)
│   └── yourname.conf  # Your personal configuration
├── html/              # HTML files (one per student)
│   └── yourname.html  # Your personal web page
└── docs/              # This learning guide
```

## Success Criteria

You've successfully completed this project when:
- ✅ You've created your own branch
- ✅ You've added your personal `.conf` and `.html` files
- ✅ Your Docker container builds successfully
- ✅ Your web page is accessible when the container runs
- ✅ You've submitted a pull request
- ✅ Your changes are merged into the main branch

## Need Help?

- Check the troubleshooting section in each guide
- Ask your instructor or classmates
- Review the example files from other students
- Remember: making mistakes is part of learning!

Let's begin! Head to [Git Basics](01-git-basics.md) to start your journey.