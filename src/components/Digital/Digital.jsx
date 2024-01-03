// Digital.js
import {React} from "react";
import { Link } from "react-router-dom";
import "./Digital.css";
import {digital_list} from "../data.js";

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
              />
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Digital;
