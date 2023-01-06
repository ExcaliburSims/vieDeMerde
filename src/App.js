import React from "react";
import ConnectModal from "./components/ConnectModal";

const App = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 max-w-2xl h-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ConnectModal />
      </div>
      <div className="container mx-auto mt-5 max-w-2xl pt-0 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        2
      </div>
    </div>
  );
};

export default App;
