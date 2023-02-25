# Personal Portfolio

## How to install Tailwind CSS in a REACT App

* Install Tailwind with the Node Package Manager

```bash
npm install -D tailwindcss
npx tailwindcss init
```

* Configure your template paths
```javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

* Add the Tailwind Directives to your CSS File(in `./src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```