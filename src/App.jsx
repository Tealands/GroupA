import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecommendedManga from "./components/RecommendedManga";
import SearchField from "./components/SearchField";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (q) => {
    // 現時点ではデバッグ用にログを出す。後で RecommendedManga に渡してフィルタ実装する予定。
    console.log('search:', q);
    setSearchQuery(q);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
      <RecommendedManga searchQuery={searchQuery} />
      <SearchField onSearch={handleSearch} />
    </>
  );
}

export default App;
