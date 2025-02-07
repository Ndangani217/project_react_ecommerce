import React from "react";

const Label = ({forHtml, children}) => {
    return (
      <label htmlFor={forHtml} className="font-amstelvar text-base">
        {children}
      </label>   
    )
  }

export default Label;