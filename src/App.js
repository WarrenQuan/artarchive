// App.js
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar/Sidebar";
import Traditional from "./components/Traditional/Traditional";
import Design from "./components/Design/Design";
import Menu from "./components/Menu/Menu";
import Digital from "./components/Digital/Digital";
import About from "./components/About/About";
import PortfolioItem from "./components/PortfolioItem/PortfolioItem";
import All from "./components/All/All";
import "./App.css";
import { all_data } from "./components/data";
import ScrollToTop from "./components/ScrollToTop";

// future sections: archive for old art, ui/ux with more structure: https://uxdesign.cc/how-to-structure-your-ux-portfolio-4df6928a8242
const App = () => {
  const [logo, changeLogo] = useState("initial");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // Set the desired window size below which the component will disappear
  const thresholdWidth = 720;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <AnimatePresence mode="wait">
        <div className="container">
          {windowWidth > thresholdWidth && <Sidebar className="sidebar" />}
          <div className="content">
          {windowWidth <= thresholdWidth && (

            <div className="topbar">
              <h1 id="logo">warren quan.</h1>
                <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
              <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          )}
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <All
                    windowWidth={windowWidth}
                    thresholdWidth={thresholdWidth}
                  />
                }
              />
              <Route path="/traditional" element={<Traditional />} />
              {/* <Route path="/design" element={<Design />} /> */}
              <Route path="/digital" element={<Digital />} />
              <Route path="/about" element={<About />} />

              {/* mapping all itme */}
              {all_data.map((item) => (
                <Route
                  path={"/" + item.classification + "/" + item.page_link}
                  element={
                    <PortfolioItem
                      name={item.title}
                      color={item.color}
                      time={item.time}
                      materials={item.materials}
                      content={item.content}
                      text_color={item.text_color}
                      notes={item.notes}
                    />
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;
