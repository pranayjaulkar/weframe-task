import ad1 from "@/assets/ad1.png";
import ad2 from "@/assets/ad2.png";
import ad3 from "@/assets/ad3.png";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface AdvertisementProps {}

export const Advertisement: React.FC<AdvertisementProps> = () => {
  const advertisement = [
    {
      image: ad1,
      title: "Build your business",
      description:
        "Shopify has all the tools you need to start, sell, market, and manage.",
    },
    {
      image: ad2,
      title: "Libre Coffee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: ad3,
      title: "KFC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];
  return (
    <div className="flex flex-col pb-12">
      <div className="flex justify-between pb-8 items-center">
        <h2 className="text-2xl">Advertisment</h2>
        <span className="text-violet-primary">See all</span>
      </div>
      <div className="flex justify-around items-center space-x-4 p-4">
        {advertisement.map((advertisement, i) => (
          <div
            key={i}
            className="w-[500px] h-[250px] rounded-md flex shadow-xl"
          >
            <div className="h-full w-3/5 rounded-tl-md rounded-bl-md">
              <Image src={advertisement.image} alt="" className="h-full" />
            </div>
            <div className="p-4 w-2/5 space-y-2">
              <h3 className="font-semibold">{advertisement.title}</h3>
              <p className="text-gray-400">{advertisement.description}</p>
              <div className="flex items-center ">
                <button className="text-violet-primary w-1/2 py-4 mr-3 rounded-md  my-3 bg-violet-secondary text-lg font-semibold">
                  Visit
                </button>
                <div className="p-4">
                  <MoreHorizontal className=" w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Advertisement;
