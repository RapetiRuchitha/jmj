import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/jmj/', // GitHub Pages base path
    server: {
        port: 2004
    }
})
