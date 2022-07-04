import React, { useState } from "react";
import axiosBase from "../../api";
import Burger from "./Burger";
function Addskills() {
  const [skillName, setSkillName] = useState("");
  const onChangeName = (e) => {
    setSkillName(e.target.value);
  };
  const [percentage, setPercentage] = useState("");
  const onChangePercent = (e) => {
    setPercentage(e.target.value);
  };

  const addSkill = async (data) => {
    try {
      const res = await axiosBase.post("/skills", data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    setSkillName("");
    setPercentage("");
    e.preventDefault();
    const regData = {
      skillName: skillName,
      percentage: percentage,
    };
    addSkill(regData);
    console.log(regData);
  };

  return (
    <>
      <Burger />
      <div className="add-skills">
        <h1>ADD Skills</h1>
        <form action="">
          <input
            name="skillName"
            value={skillName}
            onChange={(e) => onChangeName(e)}
            type="text"
            placeholder="name"
          />
          <input
            name="percentage"
            value={percentage}
            onChange={(e) => onChangePercent(e)}
            type="number"
            placeholder="percentage"
          />

          <button onClick={(e) => onSubmit(e)} type="submit">
            Add skills
          </button>
        </form>
      </div>
    </>
  );
}

export default Addskills;
