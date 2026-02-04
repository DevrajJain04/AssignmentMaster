# Deploy AssignmentMaster to the Internet 🚀

Your app is ready to deploy! Here are 3 free options:

---

## Option 1: Vercel (Recommended - Easiest) ⭐

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Click **Deploy** - that's it!

**Or use CLI:**
```bash
npm i -g vercel
vercel --prod
```

---

## Option 2: Netlify (Also Easy)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag & drop the `dist/` folder into the dashboard

**Or connect GitHub:**
- Link your repo → Build command: `npm run build` → Publish directory: `dist`

---

## Option 3: GitHub Pages (Free)

1. Push your code to GitHub
2. Go to Settings → Pages
3. Source: "GitHub Actions"
4. Add this workflow file:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Quick Local Test

Your production build is ready in `dist/`:
```bash
npx serve dist
```

---

## Already Built! ✅

The `dist/` folder contains your optimized production build:
- `index.html` - Entry point
- `assets/` - JS & CSS bundles (gzipped ~84KB)

Just upload `dist/` to any static hosting! 🎉
