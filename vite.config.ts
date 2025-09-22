import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      qwikCity(),
      qwikVite({
        // Enable faster builds with esbuild
        esbuild: {
          target: 'es2020',
          minify: isProduction,
        },
      }),
      tsconfigPaths(),
    ],

    // Build optimizations
    build: {
      target: 'es2020',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@builder.io/qwik', '@builder.io/qwik-city'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },

    // Development optimizations
    server: {
      fs: {
        strict: false,
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['@builder.io/qwik', '@builder.io/qwik-city', '@vercel/analytics'],
    },

    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },

    // Performance optimizations
    esbuild: {
      target: 'es2020',
      drop: isProduction ? ['console', 'debugger'] : [],
    },
  }
})
