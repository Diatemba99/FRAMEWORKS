import react from "react";

export default function Header(props) {
  const { message } = props;
  return (
    <div className="bg-primary p-2 mb-2">
      <h1>i'm ASKIA</h1>
      <p className="text-white">{message} </p>
    </div>
