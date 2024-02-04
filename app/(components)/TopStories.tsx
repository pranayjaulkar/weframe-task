import Image from "next/image";
import AnalyticsVioletIcon from "@/assets/analytics-violet.svg";
import { Eye, MoreHorizontal } from "lucide-react";

interface TopStoriesProps {}

export const TopStories: React.FC<TopStoriesProps> = () => {
  const stories = [
    {
      category: "business",
      date: "20 sep 2022",
      image: "/story1.jpeg",
      title: "How 7 lines code turned into $36 Billion Empire",
      status: "created",
      views: 428,
    },
    {
      category: "business",
      date: "20 sep 2022",
      image: "/story2.jpeg",
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      status: "published",
      views: 428,
    },
    {
      category: "business",
      date: "20 sep 2022",
      image: "/story3.jpeg",
      title: "Teknion wins Gold at 2022 International Design Awards",
      status: "published",
      views: 428,
    },
    {
      category: "business",
      date: "20 sep 2022",
      image: "/story4.jpeg",
      title: "How 7 lines code turned into $36 Billion Empire",
      status: "published",
      views: 428,
    },
    {
      category: "business",
      date: "20 sep 2022",
      image: "/story5.jpeg",
      title: "How 7 lines code turned into $36 Billion Empire",
      status: "created",
      views: 428,
    },
  ];
  return (
    <div className="flex flex-col pb-12">
      <div className="flex justify-between pb-8 items-center">
        <h2 className="text-2xl">Top Stories</h2>
        <span className="text-violet-primary">See all</span>
      </div>
      <div className="flex justify-around items-center space-x-4 p-4 ">
        {stories.map((story, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${story.image})`,
              backgroundSize: "cover",
            }}
            className="relative w-[300px] overflow-hidden h-[400px] rounded-lg"
          >
            <div
              className="absolute flex flex-col h-full space-y-3 justify-between items-center p-3"
              style={{
                background:
                  "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 100%, rgba(0,212,255,1) 100%)",
              }}
            >
              <div className="flex w-full space-x-2 justify-end items-center">
                <div className="flex items-center space-x-2 p-1 rounded-md bg-white">
                  <Eye className="w-4 text-violet-primary h-4" />
                  <span className="text-sm  text-violet-primary">
                    {story.views}
                  </span>
                </div>
                <div className="fill-violet-primary rounded-md p-[6px] bg-white">
                  <Image src={AnalyticsVioletIcon} alt="" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex flex-col justify-between items-center ">
                <h3 className="text-xl text-white overflow-hidden ">
                  {story.title}
                </h3>
                <div className="flex w-full items-center justify-between ">
                  <div className="flex items-center space-x-2">
                    <span className=" text-white text-xs font-semibold uppercase">
                      {story.category}
                    </span>
                    <span className=" text-gray-400 text-xs ">
                      &bull; {story.date}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden text-sm capitalize rounded-md py-2 px-4 ${
                      story.status === "created"
                        ? "text-violet-primary bg-violet-secondary"
                        : story.status === "published"
                        ? "text-junglegreen-primary bg-junglegreen-secondary"
                        : ""
                    }`}
                  >
                    {story.status}
                  </div>
                </div>
                <div className="w-full flex items-center pt-2 space-x-2">
                  <button className="h-full px-4 py-2 text-lg font-semibold bg-violet-secondary rounded-md text-violet-primary grow">
                    View
                  </button>
                  <div className="bg-white rounded-md p-2">
                    <MoreHorizontal className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopStories;
