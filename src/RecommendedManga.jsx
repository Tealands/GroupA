import { useState } from "react";
import "./RecommendedManga.css";

function RecommendedManga() {
  const [mangaList] = useState([
    {
      id: 1,
      title: "架空",
      author: "None",
      description: "架空の小説",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCYem1sZ1gFHyHvnaLVGuaul_C5TwMHXYDo53C_LQV41btPFFWeA7EP7q7BgoB3M7X7LC5kS3xiDVZ23UZqRl-X0yVMkXdC-cnCzDDk17Qknq_zCfc6OJ3FaMq1Ca5nl5N3h7bbTQffGzm/s800/animal_koutei_penguin_hina.png"
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
