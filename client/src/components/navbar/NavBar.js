import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Hire from "../../modals/Hire";
import "./navbar.css";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [screen, setScreen] = useState(window.innerWidth);
  const toggleNav = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const user = localStorage.getItem("user") || null;
  const logout = () => {
    localStorage.clear();
    return (window.location.pathname = "/login");
  };

 

  return (
    <nav>
        <div className="upper-nav">
            <h1>Delyce</h1>
            <button onClick={() => {setOpenModal(true)}}>Hire me</button>
            
            {openModal && <Hire closeModal={setOpenModal}/>}
            
           
         

        </div>
        <ul className="list">
            <li>
              <Link className="list-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                 Home
              </Link>
               
            </li>
        
            <li className="about">
            <Link  className="list-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                 About
              </Link>
            </li>
        
            <li>
            <Link  className="list-link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Skills
              </Link>
            </li>
        
            <li>
            <Link  className="list-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Projects
              </Link>
            </li>

            <li>
            <Link  className="list-link"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Experience
              </Link>
            </li>
     
            <li>
            <Link  className="list-link"
              activeClass="active"
              to="testimony"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                 Testimonial
              </Link>
            </li>
        
            <li>
            <Link  className="list-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Contact me
              </Link>
            </li>
        </ul>

     
    </nav>
  );
};

export default NavBar;
