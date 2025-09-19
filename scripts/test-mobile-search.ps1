# Mobile Search Button Test Script
# This script tests the mobile search button implementation

Write-Host "🔍 Testing Mobile Search Button Implementation" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# Test 1: Check if TypeScript compiles without errors
Write-Host "`n📝 Test 1: TypeScript Compilation" -ForegroundColor Yellow
try {
    $tsResult = npx tsc --noEmit 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ TypeScript compilation successful" -ForegroundColor Green
    } else {
        Write-Host "❌ TypeScript compilation failed:" -ForegroundColor Red
        Write-Host $tsResult -ForegroundColor Red
    }
} catch {
    Write-Host "❌ TypeScript check failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 2: Check if mobile search button component exists
Write-Host "`n📁 Test 2: Component Files" -ForegroundColor Yellow
$componentFile = "src/components/modals/mobile-search-button.tsx"
if (Test-Path $componentFile) {
    Write-Host "✅ Mobile search button component exists" -ForegroundColor Green
} else {
    Write-Host "❌ Mobile search button component not found" -ForegroundColor Red
}

# Test 3: Check if analytics component exists
Write-Host "`n📊 Test 3: Analytics Component" -ForegroundColor Yellow
$analyticsFile = "src/components/analytics/mobile-search-analytics.tsx"
if (Test-Path $analyticsFile) {
    Write-Host "✅ Mobile search analytics component exists" -ForegroundColor Green
} else {
    Write-Host "❌ Mobile search analytics component not found" -ForegroundColor Red
}

# Test 4: Check if demo page exists
Write-Host "`n🎯 Test 4: Demo Page" -ForegroundColor Yellow
$demoFile = "src/routes/demo/mobile-search/index.tsx"
if (Test-Path $demoFile) {
    Write-Host "✅ Mobile search demo page exists" -ForegroundColor Green
} else {
    Write-Host "❌ Mobile search demo page not found" -ForegroundColor Red
}

# Test 5: Check if component is exported from modals index
Write-Host "`n📦 Test 5: Component Export" -ForegroundColor Yellow
$modalsIndex = "src/components/modals/index.ts"
if (Test-Path $modalsIndex) {
    $content = Get-Content $modalsIndex -Raw
    if ($content -match "MobileSearchButton") {
        Write-Host "✅ MobileSearchButton is exported from modals index" -ForegroundColor Green
    } else {
        Write-Host "❌ MobileSearchButton not found in modals index" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Modals index file not found" -ForegroundColor Red
}

# Test 6: Check if component is imported in layout
Write-Host "`n🏗️ Test 6: Layout Integration" -ForegroundColor Yellow
$layoutFile = "src/routes/layout.tsx"
if (Test-Path $layoutFile) {
    $content = Get-Content $layoutFile -Raw
    if ($content -match "MobileSearchButton") {
        Write-Host "✅ MobileSearchButton is integrated in layout" -ForegroundColor Green
    } else {
        Write-Host "❌ MobileSearchButton not found in layout" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Layout file not found" -ForegroundColor Red
}

# Test 7: Check if CSS classes are added to global CSS
Write-Host "`n🎨 Test 7: CSS Integration" -ForegroundColor Yellow
$globalCss = "src/global.css"
if (Test-Path $globalCss) {
    $content = Get-Content $globalCss -Raw
    if ($content -match "mobile-search-trigger") {
        Write-Host "✅ Mobile search CSS classes added to global CSS" -ForegroundColor Green
    } else {
        Write-Host "❌ Mobile search CSS classes not found in global CSS" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Global CSS file not found" -ForegroundColor Red
}

# Test 8: Check documentation
Write-Host "`n📚 Test 8: Documentation" -ForegroundColor Yellow
$docFile = "docs/MOBILE_SEARCH_BUTTON.md"
if (Test-Path $docFile) {
    Write-Host "✅ Mobile search documentation exists" -ForegroundColor Green
} else {
    Write-Host "❌ Mobile search documentation not found" -ForegroundColor Red
}

Write-Host "`n🎉 Mobile Search Button Implementation Test Complete!" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "`n📱 To test the mobile search button:" -ForegroundColor White
Write-Host "1. Open http://localhost:5175/ in your browser" -ForegroundColor White
Write-Host "2. Resize browser window to mobile size (≤768px width)" -ForegroundColor White
Write-Host "3. Look for floating button in bottom-right corner" -ForegroundColor White
Write-Host "4. Click button to open advanced search modal" -ForegroundColor White
Write-Host "5. Test demo page at http://localhost:5175/demo/mobile-search" -ForegroundColor White
Write-Host "`n🔧 Development server should be running on port 5175" -ForegroundColor White
