# PowerShell script for optimized builds
param(
    [switch]$Clean,
    [switch]$Analyze,
    [switch]$Fast,
    [switch]$Production
)

Write-Host "🚀 Starting optimized build process..." -ForegroundColor Green

# Clean build artifacts if requested
if ($Clean) {
    Write-Host "🧹 Cleaning build artifacts..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue dist, tmp, .tsbuildinfo
    pnpm cache:clear
}

# Set environment variables for faster builds
$env:NODE_ENV = if ($Production) { "production" } else { "development" }
$env:NODE_OPTIONS = "--max-old-space-size=4096"

# Choose build type
if ($Analyze) {
    Write-Host "📊 Building with bundle analysis..." -ForegroundColor Cyan
    pnpm build:analyze
} elseif ($Fast) {
    Write-Host "⚡ Fast build mode..." -ForegroundColor Cyan
    pnpm build:fast
} else {
    Write-Host "🔨 Standard build..." -ForegroundColor Cyan
    pnpm build
}

# Check build success
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    
    # Show build size if dist exists
    if (Test-Path "dist") {
        $size = (Get-ChildItem -Recurse dist | Measure-Object -Property Length -Sum).Sum
        $sizeMB = [math]::Round($size / 1MB, 2)
        Write-Host "📦 Build size: $sizeMB MB" -ForegroundColor Blue
    }
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}


