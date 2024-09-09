import React from "react";

import loadingPng from "../../public/loading.png";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <img src={loadingPng} alt="" />
    </div>
  );
};

export default Loading;
