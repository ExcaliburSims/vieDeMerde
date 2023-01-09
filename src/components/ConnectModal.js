import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function ConnectModal() {
  const [signUp, setsignUp] = React.useState(false);
  return (
    <>
      <div className="relative bottom-8">
        <button
          className="font-medium text-gray-300 px-2 text-xl bg-red-600 dark:bg-gray-800 rounded-t-md border border-transparent hover:bg-backg"
          style={{ background: signUp ? "rgb(51 65 85)" : "#7f8c8d" }}
          onClick={() => setsignUp(true)}
        >
          {/* className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" */}
          S'inscrire
        </button>
        <button
          className="font-medium text-gray-300 px-2 text-xl bg-red-600 dark:bg-gray-800 rounded-t-md border border-transparent hover:bg-backg"
          style={{ background: signUp ? "#7f8c8d" : "rgb(51 65 85)" }}
          onClick={() => setsignUp(false)}
        >
          {/*  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" */}
          Se connecter
        </button>
      </div>
      {signUp ? <Signup /> : <Login />}
    </>
  );
}

export default ConnectModal;
