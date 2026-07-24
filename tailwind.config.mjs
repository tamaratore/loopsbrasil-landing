/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['text-brand-purple', 'text-brand-red', 'text-brand-green'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          raised: '#17151A',
          line: '#2A2730',
        },
        paper: {
          DEFAULT: '#F7F4EE',
        },
        // paleta oficial da logo Rede Loops Brasil (infinito roxo->vermelho->verde)
        brand: {
          purple: '#4A39A2',
          red: '#D33D3F',
          green: '#327857',
        },
      },
      fontFamily: {
        // tipografia padrao da rede (sonaar.io/demos/?theme=Promote): Anton so
        // no titulo gigante do hero, Poppins nos titulos de secao, Lato no
        // corpo, Abel no menu/abas/botoes
        hero: ['"Anton"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif'],
        accent: ['"Abel"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
