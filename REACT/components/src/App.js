import React from "react";

//import "node_modules/boostrap/dist/css/bootstrap.css"
export default function Message() 
{
    return(
        <div>
            <h1 className="bg-primary text-white text-center p-2">
                Components App running ...
            </h1>
            <Message text="UCAD">
        </div>
        
    );
}



export default function Header(props) {
  const { message } = props;
  return (
    <div className="bg-primary p-2 mb-2">
      <h1>i'm ASKIA</h1>
      <p className="text-white">{message} </p>
    </div>
  