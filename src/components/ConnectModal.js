import React from "react";

function ConnectModal() {
  return (
    <>
      <div className="bg-red relative bottom-7">
        <button className="font-medium text-black-500 px-2 text-xl bg-red-600 dark:bg-gray-800 rounded-md border border-transparent">
          {/* className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" */}
          S'inscrire
        </button>
        <button className="font-medium text-black-500 px-2 text-xl">
          {/*  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" */}
          Se connecter
        </button>
      </div>
    </>
  );
}

export default ConnectModal;
