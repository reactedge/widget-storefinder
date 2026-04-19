import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from './package.json'
import { manifestPlugin } from './manifestPlugin'

export default defineConfig({
  plugins: [
    react(),
    manifestPlugin({ widgetName: 'storefinder' })
  ],
  define: {
    'process.env': {},
  },
  build: {
    outDir: "../www",
    cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: "src/widget.ts",
      name: "WidgetStoreFinder",
      fileName: () => `widget-storefinder@${pkg.version}.iife.js`,
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "widget-storefinder.[ext]",
      },
    },
    minify: true,
    sourcemap: false
  }
});