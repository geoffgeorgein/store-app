import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import CartContext from "../cartContext";

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

  const cartctx=useContext(CartContext);

    const numberofCartItems=cartctx.items.reduce((curnumber,item)=>{
        return curnumber+item.amount;
    },0);

    console.log("Number of Cart Items");
    console.log(numberofCartItems);

  return (
    <div className="navbar w-full max-w-[1100px] mx-auto   absolute flex top-0 p-2 items-center justify-between mr-4 pr-8 z-10">
      <Link to={"/"}>
        <div className="logo text-2xl text-blue-600 font-bold"> Store</div>
      </Link>

      <div className="rightC flex items-center">
        {username && (
          <>
            <h2 className="pr-1">{username.slice(0,6)}</h2>
            <button onClick={logout} className="p-1 px-2 border-2 border-slate-400 rounded-md mx-2">Log Out</button>
          </>
        )}
        {!username && (
          <>
            <Link to={"/login"}>
              {" "}
              <button className="mr-1 p-1 px-2 border-2 border-slate-400 rounded-md ">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="mr-2 p-1 px-2 border-2 border-slate-400 rounded-md mx-2">Signup</button>
            </Link>
          </>
        )}
        <div className="cart ">


        <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
      </svg>
      <span className="pl-2"> <span></span>{numberofCartItems >0 ? numberofCartItems :""}</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default Navbar;
