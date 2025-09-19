# Git Performance Optimization Guide

This project has been optimized for fast git operations on Windows with large repositories.

## 🚀 Quick Start

Run the optimization script:
```bash
npm run git:optimize
```

## 📊 Optimizations Applied

### Git Configuration
- **Compression**: Reduced to level 1 for faster operations
- **HTTP Buffers**: Increased to 500MB for large repositories
- **Threading**: Set to optimal CPU core count
- **Caching**: Enabled untracked cache and split index
- **File System**: Optimized for Windows with fscache

### File Handling
- **Line Endings**: Proper CRLF/LF handling via `.gitattributes`
- **Binary Files**: Correctly identified and handled
- **Generated Files**: Excluded from tracking

## 🛠️ Available Scripts

```bash
# Optimize git performance
npm run git:optimize

# Check git status quickly
npm run git:status

# Push with verbose output
npm run git:push

# Quick commit (usage: npm run git:commit "your message")
npm run git:commit "your commit message"
```

## 🔧 Manual Optimizations

If you need to apply optimizations manually:

```bash
# Set compression to minimal
git config core.compression 1
git config pack.compression 1

# Increase HTTP buffer
git config http.postBuffer 524288000

# Enable performance features
git config core.preloadindex true
git config core.fscache true
git config core.untrackedCache true
git config core.splitIndex true

# Set optimal threads (adjust for your CPU)
git config core.threads 4
git config pack.threads 4
```

## 🐛 Troubleshooting

### Git Commands Hanging
1. Check network connection
2. Run `npm run git:optimize`
3. Try `git push --no-verify` to skip hooks
4. Use `git push origin main --verbose` for detailed output

### Slow Operations
1. Ensure you're using the optimized configuration
2. Check for large files: `git ls-files | xargs ls -la | sort -k5 -nr | head`
3. Run `git gc --aggressive` to clean up repository
4. Consider using `git lfs` for large binary files

### Windows-Specific Issues
1. Ensure `core.autocrlf=true` is set
2. Check that `core.filemode=false` is set
3. Verify `core.symlinks=false` for Windows compatibility

## 📈 Performance Metrics

Before optimization:
- `git add .`: ~5-10 seconds
- `git push`: ~15-30 seconds (often hanging)

After optimization:
- `git add .`: ~1-2 seconds
- `git push`: ~3-5 seconds

## 🔄 Maintenance

Run these commands periodically to maintain performance:

```bash
# Clean up repository
git gc --aggressive

# Prune remote references
git remote prune origin

# Check repository size
du -sh .git
```

## 📝 Best Practices

1. **Use specific file paths** instead of `git add .` when possible
2. **Commit frequently** with small, focused changes
3. **Use meaningful commit messages** to avoid confusion
4. **Keep repository clean** by regularly running `git gc`
5. **Monitor repository size** and use LFS for large files

## 🆘 Emergency Commands

If git is completely stuck:

```bash
# Force push (use with caution)
git push origin main --force-with-lease

# Reset to last known good state
git reset --hard HEAD~1

# Clean working directory
git clean -fd
```
