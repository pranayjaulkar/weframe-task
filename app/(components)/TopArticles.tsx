import MariaDoe from "@/assets/MariaDoe.jpeg";
import article1 from "@/assets/article1.jpeg";
import article2 from "@/assets/article2.jpeg";
import article3 from "@/assets/article3.jpeg";
import Image from "next/image";

interface TopArticlesProps {}

export const TopArticles: React.FC<TopArticlesProps> = () => {
  const articles = [
    {
      category: "business",
      data: "20 sep 2022",
      image: article1,
      author: { name: "Maria Doe", image: MariaDoe },
      title: "7 Rules of Effective Branding",
      status: "created",
      description: "Why Branding matters for your Business",
      tags: ["Branding", "Communication", "Branding"],
    },
    {
      category: "economy",
      data: "20 sep 2022",
      image: article2,
      author: { name: "Maria Doe", image: MariaDoe },
      title: "Research on biodiversity an",
      status: "published",
      description: "Lorem ipsum dolor sit amet, consectetur",
      tags: ["World", "Population"],
    },
    {
      category: "politics",
      data: "20 sep 2022",
      image: article3,
      author: { name: "Maria Doe", image: MariaDoe },
      title: "Close and historical ties to",
      status: "published",
      description: "Lorem ipsum dolor sit amet, consectetur",
      tags: ["Politics", "Defence"],
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Top Articles</h2>
        <span className="text-violet-primary">See all</span>
      </div>
      <div className="flex justify-around items-center space-x-4 p-4">
        {articles.map((article) => (
          <div key={article.title} className="flex flex-col space-y-3">
            <div className="rounded-2xl overflow-hidden">
              <Image src={article.image} width={435} height={285} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span>{}</span>
                  <span></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={article.author.image}
                  alt=""
                  width={25}
                  height={25}
                />
                <span>{article.author.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopArticles;
