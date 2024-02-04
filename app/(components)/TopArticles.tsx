import MariaDoe from "@/assets/MariaDoe.jpeg";
import article1 from "@/assets/article1.jpeg";
import article2 from "@/assets/article2.jpeg";
import article3 from "@/assets/article3.jpeg";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopArticlesProps {}

export const TopArticles: React.FC<TopArticlesProps> = () => {
  const articles = [
    {
      category: "business",
      date: "20 sep 2022",
      image: article1,
      author: { name: "Maria Doe", image: MariaDoe },
      title: "7 Rules of Effective Branding asgasdftg",
      status: "created",
      description: "Why Branding matters for your Business",
      tags: ["Branding", "Communication", "Branding"],
    },
    {
      category: "economy",
      date: "20 sep 2022",
      image: article2,
      author: { name: "Maria Doe", image: MariaDoe },
      title: "Research on biodiversity an",
      status: "published",
      description: "Lorem ipsum dolor sit amet, consectetur",
      tags: ["World", "Population"],
    },
    {
      category: "politics",
      date: "20 sep 2022",
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
      <div className="flex justify-between pb-12 items-center">
        <h2 className="text-2xl">Top Articles</h2>
        <span className="text-violet-primary">See all</span>
      </div>
      <div className="flex justify-around items-center space-x-4 p-4">
        {articles.map((article) => (
          <div
            key={article.title}
            className="flex flex-col max-w-[435px] space-y-3"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image src={article.image} width={435} height={285} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <span className=" text-violet-primary font-semibold uppercase">
                      {article.category}
                    </span>
                    <span className=" text-gray-400">
                      &bull; {article.date}
                    </span>
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
            <div className="flex justify-between items-center space-x-2">
              <h3 className="text-2xl text-nowrap max-w-[75%] overflow-hidden ">
                {article.title}
              </h3>

              <div
                className={`overflow-hidden capitalize rounded-md py-2 px-4 ${
                  article.status === "created"
                    ? "text-violet-primary bg-violet-secondary"
                    : article.status === "published"
                    ? "text-junglegreen-primary bg-junglegreen-secondary"
                    : ""
                }`}
              >
                {article.status}
              </div>
            </div>
            <span className="text-gray-400 overflow-hidden">
              {article.description}
            </span>
            <div className="flex items-center space-x-8 p-4">
              {article.tags.map((tag) => (
                <span key={tag} className="text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center">
              <button className="p-4  text-lg font-semibold bg-violet-secondary rounded-md text-violet-primary grow">
                View
              </button>
              <div className="p-4">
                <MoreHorizontal className="w-8 h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopArticles;
