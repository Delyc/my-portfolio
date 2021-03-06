import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import axiosBase from '../../api';

function Skills() {
     
    const [skill, setSkill] = useState()


    const handleFilter = (term)=>{
        const skills = skill.filter((skill)=>skill?.category===term)
        setSkill(skills)
        }
    useEffect(() => {
        const getSkills = async () => {
            try{
                const res = await axiosBase.get("/skills")
                setSkill(res.data.data)
          
            console.log("skills", res.data.data)
            }catch(error){
                console.log(error)
            }

        }
        getSkills()
    }, [])

  return (
    <div className='parent-skills' id='skills'>
        <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-classification'>
            <ul>
                <li className='back'>
                    <button onClick={(e)=>{handleFilter("backend")}}  value="Backend">Backend</button>
                    
                </li>
                <li>
                <button onClick={(e)=>{handleFilter("frontend")}} value="Frontend">Frontend</button>
                </li>

                <li>
                <button onClick={(e)=>{handleFilter("frontend")}} value="Frontend">Other</button>
                </li>

                
      
            </ul>
        </div>
        <div className='skills-align'>
            {skill ? (
                <div className='test-skills'>
                    {skill.map((skl, index) => {
                        return (<div key={index} className="skills-comb">
                            <div className='skills-bar'> 
            <p>{skl.skillName} <span>{skl.percentage} %</span></p>
        <Line className='one-bar' percent={`${skl.percentage}`} strokeWidth="1" strokeColor="#3A89D1" />
        </div>
                            
                        </div>
                        )
                    })}
                    </div>
            ) : (
                <p> no skills</p>
            )}
        {/* <div className='skills-bar'>
            <p>Data structures & algorithm <span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>Nest <span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>Firebase <span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>Swagger documentation <span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>Strapi<span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>


        <div className='skills-bar'>
            <p>Nodejs<span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>FastAPI<span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>GraphQL<span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div>
        <div className='skills-bar'>
            <p>API testing <span>90%</span></p>
        <Line className='one-bar' percent="90" strokeWidth="1" strokeColor="#3A89D1" />
        </div> */}
        </div>
        </div>
       
        
  
        
        {/* <div className='skills-icons'>
            <div className='one-skill'> 
                  <img src={dsa} alt="" />
                  <p>Data structures & algorithm</p>
            </div>
            <div className='one-skill'> 
                  <img src={node} alt="" />
                  <p>Node</p>
            </div>
            <div className='one-skill'> 
                  <img src={nest} alt="" />
                  <p>nest</p>
            </div>
            <div className='one-skill'> 
                  <img src={firebase} alt="" />
                  <p>Firebase</p>
            </div>
         
          
        </div> */}
        
    </div>
  )
}

export default Skills