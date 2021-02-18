import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 py-6 ">
      <span className="font-serif text-xl font-extrabold">ShoeHub</span>
      <div className="flex items-center px-5 border-2 border-white rounded-full">
        <BiSearchAlt size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="p-1 px-3 placeholder-current bg-transparent focus:outline-none"
        />
      </div>
      <div className="flex space-x-3 text-lg font-medium">
        <span>Sumit Dey</span>
        <span>$105.00</span>
      </div>
    </div>
  );
};

export default Navbar;
