const SignUp = () => {
  return (
    <div className="signUp mt-14  flex items-center justify-center">

      <div className="container flex flex-col max-w-40 justify-center">
        <h2 className="text-bold mb-6">Sign Up</h2>
        <input type="text" className="name border-gray-700 border-1 mb-4"></input>
        <input type="email" className="email border-gray-700 border-1 mb-4"></input>
        <input
          type="password"
          className="pass border-gray-700 border-1"
        ></input>
      </div>
    </div>
  );
};

export default SignUp;
