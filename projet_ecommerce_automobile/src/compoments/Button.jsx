import React from "react";

const Button = ({ type = "button", onClick, children, bgColor = "bg-blueCustom", textColor = "text-white", padding = "p-2"}) => {
  return (
    <button 
      className={`rounded ${bgColor} ${textColor} ${padding} hover:opacity-80 transition`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/*
const Button = (props) => {
  return (
    <button 
      className={"p-2"} 
      type={props.type || "button"}
      onClick={props.onClick}
      >
      {props.children}
    </button>
  );
}
*/
export default Button;
