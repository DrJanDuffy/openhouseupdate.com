# Git Performance Optimization Script for Qwik Project
# Run this script to optimize git performance for this repository

Write-Host "🚀 Optimizing Git Performance..." -ForegroundColor Green

# Set compression to minimal for faster operations
git config core.compression 1
git config pack.compression 1

# Increase HTTP buffer sizes for large repositories
git config http.postBuffer 524288000
git config http.maxRequestBuffer 100M

# Disable speed limits to prevent timeouts
git config http.lowSpeedLimit 0
git config http.lowSpeedTime 999999

# Enable performance features
git config core.preloadindex true
git config core.fscache true
git config core.untrackedCache true
git config core.splitIndex true

# Set optimal thread count (adjust based on your CPU)
$cpuCount = (Get-WmiObject -Class Win32_Processor).NumberOfCores
git config core.threads $cpuCount

# Enable parallel operations
git config pack.threads $cpuCount
git config index.threads $cpuCount

# Optimize for Windows
git config core.autocrlf true
git config core.filemode false
git config core.symlinks false

# Disable unnecessary features that can slow down operations
git config core.checkstat minimal
git config core.trustctime false

# Set up efficient diff algorithm
git config diff.algorithm histogram

# Optimize pack files
git config pack.windowMemory 256m
git config pack.packSizeLimit 2g

Write-Host "✅ Git optimization complete!" -ForegroundColor Green
Write-Host "📊 Current git configuration:" -ForegroundColor Cyan
git config --list | Select-String -Pattern "(compression|threads|buffer|fscache|preload|split)" | Sort-Object

Write-Host "`n💡 Tips for better git performance:" -ForegroundColor Yellow
Write-Host "  • Use 'git add .' instead of 'git add -A' for faster staging"
Write-Host "  • Use 'git commit -m' instead of opening an editor"
Write-Host "  • Use 'git push --no-verify' to skip pre-push hooks if needed"
Write-Host "  • Consider using 'git gc --aggressive' periodically to clean up"
