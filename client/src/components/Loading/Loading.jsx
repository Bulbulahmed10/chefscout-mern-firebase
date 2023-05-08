import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-[#000000f9] text-white flex items-center justify-center">
      <h2 className="text-5xl animate-spin border-4 w-20 h-20 rounded-xl"></h2>
    </div>
  );
};

export default Loading;
