import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import achievements from "../../assets/achievements.png";
import education from "../../assets/education.png";
import experi from "../../assets/experi.png";
import interests from "../../assets/interests.png";
import takequiz from "../../assets/takequiz.png";
import ComingSoon from "../Resume/ComingSoon";
import Blog from "../Resume/Blog";
import Education from "../Resume/Education";
import ExperienceResume from "../Resume/ExperienceResume";
import Interest from "../Resume/Interest";
function Experience() {
  return (
    <>
      <div className="parent-experience" id="experience">
        <div className="list-exp">
          <ul className="resume-ul">
            <li className="one-grp">
              <NavLink className="one-grp-link" to="/experience">
                <img src={experi} alt="" />
                <h3>Experience</h3>
              </NavLink>
            </li>
            <li className="one-grp">
              <NavLink className="one-grp-link" to="/education">
                <img src={education} alt="" />
                <h3>Education</h3>
              </NavLink>
            </li>
            <li className="one-grp">
            <NavLink className="one-grp-link" to="/coming-soon">
            <img src={achievements} alt="" />
              <h3>Achievements</h3>
              </NavLink>
              
            </li>
            <li className="one-grp">
            <NavLink className="one-grp-link" to="/coming-soon">
            <img src={takequiz} alt="" />
              <h3>Blog/Store</h3>
              </NavLink>
              
            </li>
            <li className="one-grp">
            <NavLink className="one-grp-link" to="/coming-soon">
            <img src={interests} alt="" />
              <h3>Interest</h3>
              </NavLink>
              
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/experience" element={<ExperienceResume />} />
            <Route path="/education" element={<ExperienceResume />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Experience;
