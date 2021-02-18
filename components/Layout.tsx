import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="px-10 text-white bg-dark-c">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
