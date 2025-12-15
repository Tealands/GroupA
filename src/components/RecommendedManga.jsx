import { useState } from "react";

function RecommendedManga() {
  const [mangaList] = useState([
    {
      id: 1,
      title: "架空",
      author: "None",
      description: "架空の小説",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCYem1sZ1gFHyHvnaLVGuaul_C5TwMHXYDo53C_LQV41btPFFWeA7EP7q7BgoB3M7X7LC5kS3xiDVZ23UZqRl-X0yVMkXdC-cnCzDDk17Qknq_zCfc6OJ3FaMq1Ca5nl5N3h7bbTQffGzm/s800/animal_koutei_penguin_hina.png",
    },
  ]);

  return (
    <section className="my-8 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        おすすめの漫画
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mangaList.length > 0 ? (
          mangaList.map((manga) => (
            <article
              key={manga.id}
              className="bg-white rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <img
                className="w-full h-64 object-cover"
                src={manga.image}
                alt={manga.title}
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  {manga.title}
                </h3>
                <p className="text-sm text-gray-500">{manga.author}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {manga.description}
                </p>
              </div>
            </article>
          ))
        ) : (
          <p className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500 p-6">
            おすすめの漫画がまだ登録されていません
          </p>
        )}
      </div>
    </section>
  );
}

export default RecommendedManga;
