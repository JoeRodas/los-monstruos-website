# GitHub Pages Deployment Guide

This guide will help you deploy the Los Monstruos website to GitHub Pages for free hosting.

## 🚀 Quick Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `los-monstruos-website`
5. Make it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Your Local Repository

```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/los-monstruos-website.git

# Push your code to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Configure for SPA Routing

Since this is a React SPA, you need to handle client-side routing:

1. Create a `404.html` file in the `public` folder
2. Add this content:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Los Monstruos</title>
    <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // https://github.com/rafgraph/spa-github-pages
        var pathSegmentsToKeep = 0;
        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
            l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
    </script>
</head>
<body>
    <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // https://github.com/rafgraph/spa-github-pages
        (function(l) {
            if (l.search[1] === '/' ) {
                var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                }).join('?');
                window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                );
            }
        }(window.location))
    </script>
</body>
</html>
```

### 5. Update Vite Configuration

Update your `vite.config.ts` to include the base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/los-monstruos-website/', // Replace with your repo name
})
```

### 6. Build and Deploy

```bash
# Build the project
npm run build

# Add the build files
git add dist -f

# Commit the build
git commit -m "Add build files for GitHub Pages"

# Push to GitHub
git push origin main
```

## 🔧 Alternative: GitHub Actions (Recommended)

For automatic deployment on every push:

### 1. Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. Enable GitHub Actions

1. Go to your repository
2. Click "Actions" tab
3. Click "New workflow"
4. Choose "set up a workflow yourself"
5. Copy the YAML content above
6. Commit the file

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. In repository Settings > Pages
2. Add your custom domain
3. Create a `CNAME` file in the `public` folder with your domain
4. Update your DNS settings

## 📱 Testing Your Deployment

After deployment:

1. Wait a few minutes for GitHub Pages to build
2. Visit: `https://YOUR_USERNAME.github.io/los-monstruos-website/`
3. Test all functionality
4. Check mobile responsiveness

## 🚨 Troubleshooting

### Common Issues:

1. **404 Errors**: Make sure you have the `404.html` file for SPA routing
2. **Build Failures**: Check GitHub Actions logs
3. **Styling Issues**: Verify base path in Vite config
4. **Routing Problems**: Ensure SPA fallback is configured

### Debug Commands:

```bash
# Check build output
npm run build
npm run preview

# Check git status
git status
git remote -v

# Force push if needed
git push -f origin main
```

## 🎯 Next Steps After Deployment

1. **Test thoroughly** on different devices
2. **Add analytics** (Google Analytics, etc.)
3. **Optimize SEO** with meta tags
4. **Monitor performance** with Lighthouse
5. **Set up monitoring** for uptime

## 📞 Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Review GitHub Actions logs
3. Verify your configuration files
4. Test locally before deploying

Your website will be live at: `https://YOUR_USERNAME.github.io/los-monstruos-website/`
