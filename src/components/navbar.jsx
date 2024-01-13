const Navbar = () => {
  return (
    <div className="navbar w-full absolute flex top-0 p-2 items-center justify-between mr-4 z-10">
      <div className="logo"> Store</div>
      <div className="rightC">
        <button className="mr-1">Login</button>
        <button className="mr-2">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
