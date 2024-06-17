## How to install react with router and tailwind css

```bash
yarn create react-app .
yarn add react-router-dom
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

### File changes

Open the tailwind.config.js file and customize the content array to specify the paths where Tailwind CSS should scan for classes it needs to generate (e.g., content: ["./src/**/*.{js,jsx,ts,tsx}"]).

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Integrate Tailwind CSS into your React project:
1. Create a CSS file (e.g., src/index.css) in your src directory.
2. Import the Tailwind directives in this file using the following syntax:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create a pages folder and instide that home.jsx file with react content 


### changing app.js file according to react router dom 

```bash
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
```
