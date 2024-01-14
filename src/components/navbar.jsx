import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full max-w-[1100px] mx-auto absolute flex top-0 p-2 items-center justify-between mr-4 pr-8 z-10">
      <div className="logo"> Store</div>
      <div className="rightC">
      <Link to={'/login'}> <button className="mr-1">Login</button></Link>
        <Link to={'/signup'}></Link>
        <button className="mr-2">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
