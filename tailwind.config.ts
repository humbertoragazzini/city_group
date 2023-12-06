import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "CustomPaletBlackBlue":"",
        "text":"#dceefa",//	(220,238,250)
        "skin":"#e5c8c4",//	(229,200,196)
        "shirt":"#2a4758",//	(42,71,88)
        "coat":"#1e292c",//	(30,41,44)
        "boots":"#243b3c",//	(36,59,60)
      }
    },
  },
  plugins: [],
}
export default config
