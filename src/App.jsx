import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from './components/Layout';
import tailwindcss from '@tailwindcss/vite';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="flex items-center justify-center gap-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-6 transition-transform duration-300 hover:scale-105" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6 transition-transform duration-300 hover:rotate-6 hover:scale-105" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-semibold mt-4">Vite + React</h1>

      <div className="card">
        <button className="bg-sky-400 text-slate-900 px-4 py-2 rounded-md" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-slate-800 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="muted mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  );
}

export default App;
