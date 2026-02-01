# GitHub Pages Deployment - Quick Guide

## ✅ Fixed Issues

1. **Image Paths**: All images now use `import.meta.env.BASE_URL` for proper routing
2. **Router Configuration**: Added basename to BrowserRouter for GitHub Pages
3. **404 Handling**: Added 404.html for SPA routing on GitHub Pages
4. **Build Configuration**: Optimized for both localhost and production

## 🚀 Deployment Steps

### Option 1: Automatic (GitHub Actions) - RECOMMENDED

1. **Enable GitHub Actions:**
   - Go to repository → Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push to main:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Check Actions tab in GitHub
   - Site will be live at: `https://somnath9231.github.io/PrepStack/`

### Option 2: Manual Deployment

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

3. **Or manually:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Folder: `/dist`

## 🔧 Localhost Testing

The site works on localhost with:
```bash
npm run dev
```

Images should load correctly at `http://localhost:3000`

## 📝 Important Notes

- **Base Path**: `/PrepStack/` for GitHub Pages, `/` for localhost
- **Image Paths**: All use `${import.meta.env.BASE_URL}filename.png`
- **Router**: Configured with basename for proper routing
- **404.html**: Handles SPA routing on GitHub Pages

## ✅ Verification Checklist

- [x] Images load on localhost
- [x] Images load on GitHub Pages
- [x] Router works correctly
- [x] All routes accessible
- [x] Build completes successfully
- [x] 404.html included in dist

## 🐛 Troubleshooting

**White Page:**
- Check browser console
- Verify base path matches repo name
- Clear browser cache

**Images Not Loading:**
- Check network tab for 404s
- Verify images in `/public` folder
- Check BASE_URL is correct

**Routing Issues:**
- Ensure 404.html is in dist
- Check basename in Router
- Verify all routes are defined
