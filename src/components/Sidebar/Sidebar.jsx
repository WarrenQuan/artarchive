// Sidebar.js
import {React} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {Mail, LinkedIn, Code} from '@mui/icons-material';


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="logo">
      <Link to="/">
        <img src={require("../../assets/selfPortrait.png")} alt="Logo" />
        </Link>
      </div>
      <div className="category">
        <Link to="/digital">Digital</Link>
      </div>
      {/* <div className="category">
        <Link to="/design">Design</Link>
      </div> */}

      <div className="category">
        <Link to="/traditional">Traditional</Link>
      </div>
      <div className="category">
        <Link to="/about">About</Link>
      </div>
      <div className="category icons">
      <a href='mailto:wquan@princeton.edu'>
          <Mail className='icon'/>
          </a>
        <a href='https://www.linkedin.com/in/warren-quan/'>
          <LinkedIn className='icon'/>
          </a>
        <a href='https://warren-quan-portfolio.onrender.com/'>
        <Code className='icon'/>
        </a>
      </div>
      <p className="category"  style={{fontSize: "8px"}}> © 2023 copyright warren quan</p>
    </div>
  );
};

export default Sidebar;
