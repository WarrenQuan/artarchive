// Traditional.js
import {React, useState} from "react";
import { Link } from "react-router-dom";
import "./Traditional.css";
import {traditional_list} from "../data.js";

const Traditional = () => {
  document.body.style.backgroundColor = "#FFFFFF";
  return (

    <div className="traditional">
      {traditional_list.map((item) => (
        <div>
          <Link to={"/traditional/" + item.page_link}>
          <div className={item.class_name}>
              <img
                src={require(`../../assets/traditional/${item.image_link}`)}
                alt={item.id}
              />
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Traditional;
