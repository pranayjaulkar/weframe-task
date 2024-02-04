import TopArticles from "@/app/(components)/TopArticles";
import Advertisement from "@/app/(components)/Advertisement";
import TopStories from "@/app/(components)/TopStories";
import ArticlesIcon from "@/assets/articles.svg";
import CategoriesIcon from "@/assets/categories.svg";
import StoriesIcon from "@/assets/stories.svg";
import AdIcon from "@/assets/ad.svg";
import Image from "next/image";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const DashboardSections = [
    { name: "Articles", info: "4,950 New Updates", icon: ArticlesIcon },
    { name: "Categories", info: "10,275 New Updates", icon: CategoriesIcon },
    { name: "Stories", info: "4,193 New Updates", icon: StoriesIcon },
    { name: "Advertisements", info: "928 New Updates", icon: AdIcon },
  ];
  return (
    <div className="w-full h-full">
      <div className="py-8 px-4 flex justify-start items-center">
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-4xl">Hello Admin</h2>
          <span className="font-light">This is what we got you for today</span>
        </div>
      </div>
      <div className="flex w-full py-8 justify-around items-center">
        {DashboardSections.map((section) => (
          <div
            key={section.name}
            className="flex w-full px-4 mb-4 items-center  space-x-4"
          >
            <Image src={section.icon} alt="" width={80} height={80} />
            <div className="flex flex-col space-y-3">
              <h2 className="text-3xl">{section.name}</h2>
              <span className="text-sm font-light">{section.info}</span>
            </div>
          </div>
        ))}
      </div>
      <TopArticles />
      <TopStories />
      <Advertisement />
    </div>
  );
};
export default Dashboard;
