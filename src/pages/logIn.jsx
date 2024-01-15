import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LogIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem("Profile", JSON.stringify({ userInfo }));
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="signUp mt-14  flex items-center justify-center">
      <div className="container flex flex-col max-w-40 justify-center">
        <form onSubmit={login}>
          <h2 className="text-bold mb-6">Sign In</h2>

          <input
            type="email"
            className="email border-gray-700 border-1 mb-4"
            onChange={(ev) => setUsername(ev.target.value)}
          ></input>
          <input
            type="password"
            className="pass border-gray-700 border-1 mb-5"
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <button className="bg-blue-500 rounded-md" type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
