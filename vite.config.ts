import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = { };

export default defineConfig(() => {
  return {
    base: "/addr-store",
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
  };
});