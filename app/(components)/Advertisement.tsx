import ad1 from "@/assets/ad1.jpeg";
import ad2 from "@/assets/ad2.png";
import ad3 from "@/assets/ad3.png";
import Image from "next/image";

interface AdvertisementProps {}

export const Advertisement: React.FC<AdvertisementProps> = () => {
  const advertisement = [
    {
      id: 1,
      image: ad1,
      title: "Build your business",
      description:
        "Why Branding matters for your Shopify has all the tools you need to start, sell, market, and manage.",
    },
    {
      id: 2,
      image: ad2,
      title: "Libre Coffee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 3,
      image: ad3,
      title: "KFC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Advertisment</h2>
        <span className="text-violet-primary">See all</span>
      </div>
      <div className="flex justify-around items-center space-x-4 p-4">
        {advertisement.map((advertisement) => (
          <div
            key={advertisement.id}
            className="w-[24rem] bg-[#FFFFFF] h-[9rem] rounded-md flex shadow-lg"
          >
            <Image
              src={advertisement.image}
              className="w-[40%] h-full rounded-tl-md rounded-bl-md"
              alt=""
            />
            <div className="mx-4">
              <h3 className="font-semibold text-24 leading-36 text-[#22285E] py-1">
                {advertisement.title}
              </h3>
              <p className="text-xs text-[#A0A3BD]">
                {advertisement.description}
              </p>
              <div className="flex items-center">
                <button className="text-violet-primary w-[60%] py-2 mr-3 rounded-md  my-3 bg-violet-secondary">
                  Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Advertisement;
