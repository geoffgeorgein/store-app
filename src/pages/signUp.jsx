import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("https://store-api-i2qb.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
      navigate("/login");
    } else if (response.status === 511) {
      alert("User already exists");
    } else {
      alert("registration failed");
    }
  }
  return (
    <div className="signUp mt-14  flex items-center justify-center">
      <div className="container flex flex-col max-w-40 justify-center">
        <form onSubmit={register}>
          <h2 className="text-bold mb-6">Sign Up</h2>
          {/* <input
            type="text"
            className="name border-gray-700 border-1 mb-4"
          ></input> */}
          <input
            type="email"
            className="email border-gray-700 border-1 mb-4"
            onChange={(ev) => setUsername(ev.target.value)}
          ></input>
          <input
            type="password"
            className="pass border-gray-700 border-1"
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
           <button className="bg-blue-500 rounded-md p-2 px-2 mt-2 text-white" type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
