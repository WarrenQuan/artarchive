// About.js
// For About Section of the Website
import {React, useState} from 'react';
import "./About.css"
import Typewriter from 'typewriter-effect';
import headshot from "../../assets/warren_quan_portrait.png"
import rabbit from "../../assets/rabbit.png"

const About = () => {
  document.body.style.backgroundColor = "#472f9d";
  const [currentImage, setCurrentImage] = useState(headshot);

  const handleClick = () => {
    // Change the image when clicked
    console.log("CLICJED")
    setCurrentImage(currentImage === headshot ? rabbit : headshot);
    console.log(currentImage)
  };

  return (
    
    <div className='about'>
      <img id="image" src={currentImage} onClick={handleClick} alt="thumbnail_img"></img>
        <h1><Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("what is a warren:")
          .start();
      }}
      ></Typewriter></h1>
   
      <p>Warren Quan is a silly, goofy iPad baby based in San Francisco studying Computer Science and Visual Arts @ Princeton. A multi-disciplinary artist with roots in digital illustration, he celebrates and explores the complexity of human identity, intersectionality, and interpersonal connections through self-portraiture, personal work, and anecdotes. Recent pieces delve into the investigation of the "looking-glass self" – personal identity shaped through perceptions of the other. Simultaneously, he intersects his technological expertise to examine concepts encompassing the curated “cyber self” and algorithmic perceptions of individuals. As you immerse yourself in his portfolio, he hopes you experience the same joy and enthusiasm in his pieces that he felt while bringing each work to life :D!</p>
      <br></br>

      <p style={{fontSize: "10px"}}>a warren is also "a structure where rabbits are kept or bred" - merriam-webster <br></br>click my photo above!</p>
    </div>
  );
};

export default About;
