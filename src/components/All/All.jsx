// Digital.js
import { React } from "react";
import { Link } from "react-router-dom";
import "./All.css";
import { all_data } from "../data.js";

const All = ({ windowWidth, thresholdWidth, menuOpen, setMenuOpen  }) => {
  document.body.style.backgroundColor = "#FFFFFF";
  return (
    <div className="all">
      {all_data.map((item) => (
        <div>
          <Link to={"/" + item.classification + "/" + item.page_link}>
            <div className={item.class_name}>
              <img
                src={require(`../../assets/${item.classification}/${item.image_link}`)}
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

export default All;
