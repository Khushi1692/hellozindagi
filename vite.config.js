import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Hello Zindagi | Australian Indian Community Organisation',
          description: 'Hello Zindagi connects Australian and Indian communities through culture, shared values, and support. Find events, news, and resources for Indians living in Australia.',
        }
      }
    })
  ],
})
