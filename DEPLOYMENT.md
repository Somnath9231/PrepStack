# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment.

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch:**
   - Every push to `main` will automatically build and deploy
   - The site will be available at: `https://yourusername.github.io/PrepStack/`

## Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   - Go to repository Settings → Pages
   - Select source: "Deploy from a branch"
   - Branch: `gh-pages` (or create it)
   - Folder: `/root` or `/dist`

3. **Or use gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```
   
   Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
   
   Then run:
   ```bash
   npm run deploy
   ```

## Important Notes

- The base path is set to `/PrepStack/` for GitHub Pages
- All image paths use `import.meta.env.BASE_URL` for proper routing
- The 404.html file handles SPA routing for GitHub Pages
- Make sure your repository name matches the base path in vite.config.js

## Troubleshooting

### White Page Issue
- Check browser console for errors
- Verify base path matches repository name
- Ensure all assets are in public folder

### Images Not Loading
- All images should be in `/public` folder
- Image paths use `import.meta.env.BASE_URL`
- Check network tab for 404 errors

### Routing Issues
- The 404.html file redirects all routes to index.html
- This is required for React Router to work on GitHub Pages
