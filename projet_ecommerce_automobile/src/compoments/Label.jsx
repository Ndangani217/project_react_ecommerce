import React from "react";

const Label = ({forHtml, children}) => {
    return (
      <label htmlFor={forHtml} className="font-openSans text-base">
        {children}
      </label>   
    )
  }

export default Label;