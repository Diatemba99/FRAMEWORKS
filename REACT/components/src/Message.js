import React from "react";


export function Message (props) 
{
   let theme = `bg-${props.theme} text-white text-center p-2`;
   return <h1 className={theme}>
       {props.text}
       </h1>;
}

