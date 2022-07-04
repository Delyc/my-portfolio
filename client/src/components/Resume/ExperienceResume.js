import React,{useEffect, useState} from "react";
import axiosBase from "../../api";
import ellipse from "../../assets/ellipse.png";

function ExperienceResume() {
  const [workHistory, setWorkHistory] = useState()
  useEffect(() => {
    const getWorkHistory = async () => {
      try {
        const res = await axiosBase.get("/work-history");
        setWorkHistory(res.data.data);
        console.log("work history", res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getWorkHistory()

  
  }, [])
  return (
    <div className="experience-roles">
      {workHistory ? (
      <div>
        {workHistory.map((work, index) => {
          return(
            <div key={index}>
              <div className="company-name">
         
         <img src={ellipse} alt="" />
         <h3>{work.companyName}</h3>
       </div>
       <div className="desc-role">
          <h3 className="role">
            {work.jobTitle} <span>{work.startDate} - {work.endDate}</span>
          </h3>
          
            <p>
              {work.jobDescription}
            </p>
            <h4>Technologies used:{work.technologies} </h4>
            </div>
            </div>
            )
          
        })}
          </div>
        ):(
          <p>no data</p>
        )}
 
        </div>

  );
}

export default ExperienceResume;
