// Design.js
import {React} from "react";
import { Link } from "react-router-dom";
import "./Design.css";
import {design_list} from "../data.js";

const Design = () => {
  document.body.style.backgroundColor = "#FFFFFF";
  return (

    <div className="design">
      {design_list.map((item) => (
        <div>
          <Link to={"/design/" + item.page_link}>
          <div className={item.class_name}>
              <img
                src={require(`../../assets/design/${item.image_link}`)}
                alt={item.id}
              />
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Design;
