# Git Basics - Version Control for Collaboration

Git is a version control system that helps teams collaborate on code. Think of it as a time machine for your project that tracks every change and allows multiple people to work together.

## Why Git?

Imagine working on a group document where:
- Everyone can edit at the same time
- You can see who changed what and when
- You can go back to any previous version
- Changes don't overwrite each other

That's what Git does for code!

## Key Concepts

### Repository (Repo)
A project folder that Git tracks. Contains all your files and their history.

### Commit
A snapshot of your changes. Like saving a game - you can always come back to this point.

### Branch
A separate line of development. Like having multiple drafts of an essay.

### Pull Request (PR)
A request to merge your changes into the main project. Others can review before accepting.

## Essential Git Commands

### Getting Started
```bash
# Clone (download) a repository
git clone https://github.com/CloudHelden/DockerFoundation.git

# Enter the project directory
cd DockerFoundation
```

### Making Changes
```bash
# Check what's changed
git status

# Create a new branch for your work
git checkout -b feature/yourname

# Stage your changes (prepare to save)
git add conf/yourname.conf
git add html/yourname.html

# Or stage all changes
git add .

# Commit (save) your changes
git commit -m "Add configuration and page for yourname"
```

### Sharing Your Work
```bash
# Push your branch to GitHub
git push origin feature/yourname

# Then create a Pull Request on GitHub
```

### Staying Updated
```bash
# Switch to main branch
git checkout main

# Get latest changes
git pull origin main
```

## Hands-On Practice

### Exercise 1: Your First Clone
1. Open your terminal
2. Navigate to where you want to save projects
3. Run: `git clone https://github.com/CloudHelden/DockerFoundation.git`
4. Enter the directory: `cd DockerFoundation`
5. Explore: `ls -la`

### Exercise 2: Create Your Branch
1. Create your feature branch: `git checkout -b feature/yourname`
2. Verify you're on your branch: `git branch`
3. The asterisk (*) shows your current branch

### Exercise 3: Make a Change
1. Create a simple file: `echo "Hello from yourname" > test.txt`
2. Check status: `git status`
3. Stage the file: `git add test.txt`
4. Commit: `git commit -m "Add test file"`
5. Delete the test file: `rm test.txt`
6. Commit the deletion: `git add . && git commit -m "Remove test file"`

## Common Workflows

### Adding Your Configuration to the Project
```bash
# 1. Create your branch
git checkout -b feature/yourname

# 2. Create your files
# (you'll do this in the HTML section)

# 3. Stage and commit
git add conf/yourname.conf html/yourname.html
git commit -m "Add yourname's nginx config and webpage"

# 4. Push to GitHub
git push origin feature/yourname

# 5. Create Pull Request on GitHub
```

## Understanding Git History

```bash
# See commit history
git log --oneline

# See what changed in a commit
git show <commit-hash>

# See who changed what
git blame filename
```

## Troubleshooting

### "I'm on the wrong branch!"
```bash
# Check current branch
git branch

# Switch branches
git checkout main
git checkout feature/yourname
```

### "I made a mistake in my commit message!"
```bash
# Fix the last commit message
git commit --amend -m "New correct message"
```

### "I need to undo changes!"
```bash
# Undo uncommitted changes to a file
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### "There are conflicts!"
Don't panic! Conflicts happen when two people change the same thing.
1. Git will mark conflicts in files
2. Open the file and look for `<<<<<<<` markers
3. Choose which version to keep
4. Remove the conflict markers
5. Commit the resolution

## Best Practices

1. **Commit Often**: Small, frequent commits are better than large ones
2. **Write Clear Messages**: "Fix bug" ❌ vs "Fix nginx config path for yourname.conf" ✅
3. **Pull Before Push**: Always get latest changes before sharing yours
4. **One Feature Per Branch**: Keep branches focused on a single task
5. **Review Before Committing**: Use `git diff` to see what you're about to commit

## Git Workflow for This Project

1. **Clone** the repository
2. **Create** your feature branch
3. **Add** your configuration and HTML files
4. **Commit** your changes with a clear message
5. **Push** your branch to GitHub
6. **Create** a Pull Request
7. **Wait** for review and merge

## Next Steps

Now that you understand Git basics, you're ready to learn about Docker! Head to [Docker Basics](02-docker-basics.md) to continue.

## Quick Reference

| Command | What it does |
|---------|--------------|
| `git clone <url>` | Download a repository |
| `git status` | See what's changed |
| `git add <file>` | Stage changes |
| `git commit -m "message"` | Save changes |
| `git push` | Upload changes |
| `git pull` | Download changes |
| `git checkout -b <branch>` | Create new branch |
| `git log` | See history |