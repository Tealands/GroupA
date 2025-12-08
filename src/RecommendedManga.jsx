import { useState } from "react";
import "./RecommendedManga.css";

function RecommendedManga() {
  const [mangaList] = useState([
    // ここにおすすめの漫画データを追加
    {
      id: 1,
      title: "進撃の巨人",
      author: "諫山創",
      description: "人類と巨人の戦いを描くダークファンタジー。",
      image: "https://example.com/shingeki.jpg"
    }
  ]);

  return (
    <section className="recommended-manga">
      <h2>おすすめの漫画</h2>
      <div className="manga-grid">
        {mangaList.length > 0 ? (
          mangaList.map((manga) => (
            <div key={manga.id} className="manga-card">
              <img src={manga.image} alt={manga.title} />
              <h3>{manga.title}</h3>
              <p>{manga.author}</p>
              <p className="description">{manga.description}</p>
            </div>
          ))
        ) : (
          <p className="no-data">おすすめの漫画がまだ登録されていません</p>
        )}
      </div>
    </section>
  );
}

export default RecommendedManga;
