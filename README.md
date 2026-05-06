# Enterprise AI Adoption Dashboard

A polished React demo page for an AI Steering Committee dashboard. It uses mock data only and is structured so the data layer can later be replaced with API, warehouse, or BI-platform feeds.

## Run Locally

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default. If that port is already busy, the dev server will try the next available port.

## Deploy With GitHub Pages

This demo is a static site, so it can be published directly from a GitHub repository.

1. Create a new GitHub repository.
2. Upload or push this folder's contents so `index.html` is at the repository root.
3. In the repository, go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
5. Select the `main` branch and the `/(root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The public URL will look like `https://YOUR-USER.github.io/REPOSITORY-NAME/`.

## Notes

- React, Recharts, and Lucide icons are loaded as browser ESM modules through the import map in `index.html`.
- Mock data lives in `src/data/mockData.js`.
- Core components live in `src/components`.
