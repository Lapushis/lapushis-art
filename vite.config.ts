import preact from '@preact/preset-vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, Plugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 95,
      },
    }),
    preact(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }) as Plugin,
      ],
    },
    outDir: 'dist',
  },
})
