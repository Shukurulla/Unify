import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MsgBox = ({ status, message }) => {
  const navigate = useNavigate();

  const navigateHandler = async () => {
    await navigate("/");
    window.location.reload();
  };

  return (
    <div
      className={`msg w-[100vw] absolute z-999 top-0 left-0 h-[100vh] bg-white flex items-center justify-center ${
        status == "success" ? "success" : "failure"
      }`}
    >
      <div className="msg-box text-center">
        <i
          className={`bi text-success text-[100px] ${
            status == "success" ? "bi-check2-circle" : "bi-x-circle text-danger"
          }`}
        ></i>
        <p className="text-center text-xl pb-3">{message}</p>
        <button
          onClick={() => navigateHandler()}
          className="bg-gradient-to-r px-4 from-[#8CD23C] to-[#417A00] rounded-full py-3 text-white font-semibold text-xl"
        >
          Bas menyug'a qaytiw
        </button>
      </div>
    </div>
  );
};

export default MsgBox;
