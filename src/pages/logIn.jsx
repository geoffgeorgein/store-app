const LogIn = () => {
  return (
    <div className="signUp mt-14  flex items-center justify-center">
      <div className="container flex flex-col max-w-40 justify-center">
        <h2 className="text-bold mb-6">Sign In</h2>
      
        <input
          type="email"
          className="email border-gray-700 border-1 mb-4"
        ></input>
        <input
          type="password"
          className="pass border-gray-700 border-1 mb-5"
        ></input>
        <button className="bg-blue-500 rounded-md">LOG IN</button>
      </div>
    </div>
  );
};

export default LogIn;
