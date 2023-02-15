import React from "react";

const Signup = () => {
  const registerEmail = React.useRef();
  const registerPassword = React.useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerEmail.current.value, registerPassword.current.value);
  };
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl text-white">S'inscrire</h3>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleRegister(e)}
        >
          <input
            className="rounded-xl border-2 border-gray-600  shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-transparent p-2 px-4 mt-3 text-xl text-white"
            placeholder="Pseudo"
            type="text"
            required
          />
          <input
            className="rounded-xl border-2 border-gray-600  shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-transparent p-2 px-4 mt-3 text-xl text-white"
            placeholder="Email"
            type="email"
            required
            ref={registerEmail}
          />
          <input
            className="rounded-xl border-2 border-gray-600  shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-transparent p-2 px-4 mt-3 text-xl text-white"
            placeholder="Mot de passe"
            type="password"
            required
            ref={registerPassword}
          />
          <input
            className="rounded-xl border-2 border-gray-600  shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-amber-600 p-2 px-4 mt-10 text-xl text-white"
            value="Valider inscription"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
