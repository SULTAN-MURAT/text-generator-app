import React from "react";
import Parser from 'html-react-parser';
import { useSelector } from "react-redux/es/exports";
import { textSelector } from "../redux/texts/textSlice";

function Paragraphs() {
  const text=useSelector(textSelector);
  return (
    <div className="paragraphs">
      {text.split("</p>").map((item,index)=><span key={index}>{(Parser(item))}</span> )}
    </div>
  );
}

export default Paragraphs;
