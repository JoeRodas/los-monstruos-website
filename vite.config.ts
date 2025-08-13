import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to your repo name when publishing to GitHub Pages, e.g. '/los-monstruos-site/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/LosMonstruos/' : '/',
})
