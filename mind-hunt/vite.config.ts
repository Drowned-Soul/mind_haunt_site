import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: 'mind_haunt_site/mind-hunt/',
  base: '/',
  plugins: [react()],
})
