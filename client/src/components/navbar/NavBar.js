import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                Home
            </li>
        
            <li className="about">
                About
            </li>
        
            <li>
                Resume
            </li>
        
            <li>
                Projects
            </li>
     
            <li>
                Testimonial
            </li>
        
            <li>
                Contact me
            </li>
        </ul>

     
    </nav>
  );
};

export default NavBar;
