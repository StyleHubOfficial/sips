import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Use '.' instead of process.cwd() to prevent TS error about 'cwd' missing on Process type.
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Securely map the Vercel/System environment variable to the process.env.API_KEY expected by the code.
      // NOTE: This embeds the key in the build. Restrict usage in Google Cloud Console to your Vercel domain.
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
    },
    server: {
      host: true
    }
  };
});