import React from "react";
const Button = ({ type = "button", onClick, children, bgColor = "bg-blueCustom", 
                  textColor = "text-white", width="w-fit", border=""}) => {
  return (
    <button 
      className={`rounded ${bgColor} ${textColor} ${width} ${border} py-2 hover:opacity-80 transition`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
