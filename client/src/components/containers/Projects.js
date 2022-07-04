import React, { useEffect, useState } from "react";
import blog from "../../assets/blog.jpg";
import git from "../../assets/git.png";
import view from "../../assets/view.png";
import axiosBase from "../../api";

function Projects() {
  const [projects, setProjects] = useState();
  const [visible, setVisible] = useState(3)
  const showMoreProjects=()=>{
    setVisible(prevValue => prevValue + 3)

  }
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axiosBase.get("/projects");
        setProjects(res.data.data);
        console.log("projects", res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="parent-project">
        <div className="project-title">
        <h1>Projects</h1>
        </div>
        
        <div className="projects-render">
          {projects ? (
            <div className="test-pro">
              {projects.slice(0, visible).map((prj, index) => {
                return (
                  <div className="project-card" key={index}>
                    <div className="project-links">
                      <a href={prj.liveLink} target="_blank">
                        <img src={view} alt="" />
                      </a>
                      <a href={prj.github} target="_blank">
                        <img src={git} alt="" />
                      </a>
                    </div>
                    <img src={prj.banner} alt="" />
                    <div className="parent-stack">
                      <h3 className="stack">{prj.title}</h3>
                    </div>
                    <p>{prj.description}</p>
                    <button>More</button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p> n projects </p>
          )}
        
         
        
       </div>
       <div className="view-all">
       <button onClick={showMoreProjects}>Load more </button>
        </div>
      </div>
   
  );
}

export default Projects;
