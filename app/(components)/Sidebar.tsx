import {
  Home as HomeIcon,
  User,
  Users as TeamIcon,
  MonitorSmartphone,
  PlaySquare,
  Bell,
  Settings,
  Headphones,
} from "lucide-react";
import ContactIcon from "@/assets/contact.svg";
import AnalyticsIcon from "@/assets/analytics.svg";
import Image from "next/image";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const sidebarSections = [
    { icon: AnalyticsIcon, name: "Analytics" },
    { icon: TeamIcon, name: "Team" },
    { icon: User, name: "User" },
    { icon: MonitorSmartphone, name: "App/Web" },
    { icon: PlaySquare, name: "Media" },
    { icon: Bell, name: "Notification" },
    { icon: Settings, name: "Settings" },
  ];
  return (
    <div className="lg:w-[15%] pt-16 px-8 flex justify-center flex-col h-full">
      <div className="flex w-full  p-4 mb-8 items-center space-x-2">
        <HomeIcon />
        <span>Dashboard</span>
      </div>
      <div className="flex w-full p-4 mb-4 text-white bg-violet rounded-xl   items-center space-x-2">
        <Image src={ContactIcon} alt="" width={25} height={25} />
        <span>Contact</span>
      </div>
      {sidebarSections.map((section) =>
        section.name === "Analytics" ? (
          <div
            key={section.name}
            className="flex w-full py-2 px-4 mb-4 items-center  space-x-2"
          >
            <Image src={section.icon} alt="" width={25} height={25} />
            <span>{section.name}</span>
          </div>
        ) : (
          <div
            key={section.name}
            className="flex w-full py-2 px-4 mb-4 items-center  space-x-2"
          >
            <section.icon />
            <span>{section.name}</span>
          </div>
        )
      )}
      <div className="flex w-full bg-violet-secondary text-black rounded-xl  p-4 mt-32 mb-8 items-center space-x-2">
        <Headphones />
        <span>Contact Support</span>
      </div>
    </div>
  );
};
export default Sidebar;
