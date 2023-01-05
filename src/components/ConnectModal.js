import React from "react";

function ConnectModal() {
  return (
    <>
      <div className="bg-backg h-8">
        <button className="font-medium text-gray-500 px-2 text-xl">
          {/* className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" */}
          S'inscrire
        </button>
        <button className="font-medium text-gray-500 px-2 text-xl">
          {/*  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" */}
          Se connecter
        </button>
      </div>
    </>
  );
}

export default ConnectModal;
