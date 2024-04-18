/** @type {import('tailwindcss').Config} */
module.exports = {
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
          black_gsd : "url('/german_shepherd_dark.jpg')",
          nerd: "url('/nerdy_retriever.jpg')",
          dope: "url('/posing_dog.jpg')",
          vet: "url('/clinic_dog.jpg')",
          home: "url('/dog_hero_section1.jpg')",
          surprise: "url('/surprised_dog.svg')",
          retriever: "url('/golden_retriever.svg')",
          retriever_mobile: "url('/Retriever_mobile.svg')",
          nose_mouth: "url('/nose_mouth2.jpg')",
          nose_mouth2: "url('/nose_mouth.svg')",
          left_ear: "url('/left_ear.svg')",
          right_ear: "url('/right_ear.svg')",
          doggo: "url('/doggo.svg')",
      },
    },
  },
  plugins: [],
}
