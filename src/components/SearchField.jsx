import React, { useState } from "react";

function SearchField({ onSearch = () => {} }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // onSearch にデフォルト no-op を設定しているため安心して呼び出せる
    onSearch(query);
  };

  return (
    //入力欄とボタンのコンポーネント
    <div className="flex items-center space-x-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="漫画を検索..."
        aria-label="漫画検索フィールド"
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        検索する
      </button>
    </div>
  );
}

export default SearchField;
