// Digital.js
// For Digital Art Section of the Website 

import {React} from "react";
import { Link } from "react-router-dom";
import "./Digital.css";
import { digital_list } from "../Data/DigitalListData";

const Digital = () => {
  document.body.style.backgroundColor = "#FFFFFF";
  return (

    <div className="digital">
      {digital_list.map((item) => (
        <div>
          <Link to={"/digital/" + item.page_link}>
          <div className={item.class_name}>
              <img
                src={require(`../../assets/digital/${item.image_link}`)}
                alt={item.id}
                loading="lazy"
              />
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Digital;
