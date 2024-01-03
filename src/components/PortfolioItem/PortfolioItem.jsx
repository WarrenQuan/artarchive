// Sculpture.js
import React from "react";
import Typewriter from "typewriter-effect";
import "./PortfolioItem.css";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const PortfolioItem = ({
  name,
  time,
  materials,
  content,
  notes,
  color,
  text_color,
}) => {
  document.body.style.backgroundColor = color;
  document.body.style.color = text_color;
  console.log(text_color);

  // old code for navigation
  // const history = useNavigate();

  // const goBack = () => {
  //   history(-1);
  // };

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <img id='back' src={require('../../assets/back_icon.png')} onClick={goBack}></img> */}
      {/* <div>  <PdfViewer pdfUrl={"https://drive.google.com/file/d/1_aM0FAMZ1MThdtdMNzG5v4LY2f8_qjVV/view"} /> </div> */}
      <div>
        <h1 style={{ color: color }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(name).start();
            }}
          ></Typewriter>
        </h1>
        <h3>
          {materials}, {time}
        </h3>{" "}
        <br></br>
        <p>{content}</p>
        {notes && (
          <div>
            <br></br>
            <h3>notes and acknowledgements:</h3>
            <p>{notes}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
