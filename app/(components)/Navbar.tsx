import { Calendar, ChevronDown, Search, User } from "lucide-react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full flex justify-between items-center px-20 py-6">
      <div className="flex items-center border border-gray-300 px-4 py-2 space-x-2">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center px-4 py-2 space-x-2">
        <div className="flex border p-2 border-gray-400 rounded-lg items-center space-x-2">
          <Calendar />
          <input
            className="focus:outline-none appearance-none"
            type="date"
            id="date"
            placeholder="Search"
            value={"2022-11-10"}
          />
          <span>or</span>
          <Calendar style={{ marginLeft: "3rem" }} />

          <input
            className="focus:outline-none appearance-none"
            type="date"
            placeholder="Search"
            value={"2022-11-10"}
          />
        </div>
        <div className="flex border p-1 border-gray-400 rounded-lg items-center space-x-2">
          <User className="w-8 h-8 p-1" />
          <div className="flex text-xs flex-col">
            <span>Welcome back</span>
            <h3 className="">Akshita Patel</h3>
          </div>
          <div className="">
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
