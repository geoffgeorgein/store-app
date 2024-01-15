import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(true);

  function logout() {
    localStorage.clear();
    setLoggedIn(false);
    setUserInfo(null);
  }

  const myObj = JSON.parse(localStorage.getItem("Profile"));
  // console.log("profilename", myObj);

  const username = userInfo?.username || myObj?.userInfo?.username;

  return (
    <div className="navbar w-full max-w-[1100px] mx-auto   absolute flex top-0 p-2 items-center justify-between mr-4 pr-8 z-10">
      <Link to={"/"}>
        <div className="logo"> Store</div>
      </Link>

      <div className="rightC">
        {username && (
          <>
            <h2>{username}</h2>
            <button onClick={logout}>Log Out</button>
          </>
        )}
        {!username && (
          <>
            <Link to={"/login"}>
              {" "}
              <button className="mr-1">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="mr-2">Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
