import React from "react";

const Title = ({children}) => {
    return (
      <h1 className="font-openSans text-[40px] font-bold text-center text-black">
        {children}
      </h1>   
    )
  }

export default Title;