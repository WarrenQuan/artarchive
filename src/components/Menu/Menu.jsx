// Menu.jsx
// Menu Hamburger for Mobile Version of Site
import "./Menu.css";
import {Mail, LinkedIn, Code} from '@mui/icons-material';


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {/* onClick is for closing menu after clicking on an option */}
        <a href="/">
          <li onClick={() => setMenuOpen(!menuOpen)}>All Works</li>
        </a>
        <a href="/traditional">
          <li onClick={() => setMenuOpen(!menuOpen)}>Traditional</li>
        </a>
        <a href="/digital">
          <li onClick={() => setMenuOpen(!menuOpen)}>Digital</li>
        </a>
        <a href="/about">
          <li onClick={() => setMenuOpen(!menuOpen)}>About</li>
        </a>
        <div className="icons">
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
        <p>© 2023 copyright warren quan</p>
      </ul>
    </div>
  );
}
