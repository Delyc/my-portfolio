import React, { useState } from "react";
import axiosBase from "../../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Burger from "./Burger";
function AddWorkHistory() {
  const [startDate, setStartDate] = useState(new Date());
  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const [endDate, setEndDate] = useState(new Date());
  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const [companyName, setCompanyName] = useState("");
  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const [jobTitle, setJobTitle] = useState("");
  const onChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };
  const [jobDescription, setJobDescription] = useState("");
  const onChangeJobDescription = (e) => {
    setJobDescription(e.target.value);
  };
  const [jobLocation, setJobLocation] = useState("");
  const onChangeJobLocation = (e) => {
    setJobLocation(e.target.value);
  };
  const [technologies, setTechnologies] = useState("");
  const onChangeTechnologies = (e) => {
    setTechnologies(e.target.value);
  };

  const addWorkHistory = async (data) => {
    try {
      const res = await axiosBase.post("/work-history", data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    setCompanyName("");
    setJobTitle("");
    setJobDescription("");
    setJobLocation("");
    setTechnologies("")
    e.preventDefault();
    const regData = {
      startDate: startDate,
      endDate: endDate,
      companyName: companyName,
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      jobLocation: jobLocation,
      technologies: technologies,
    };
    addWorkHistory(regData);
    console.log(regData);
  };

  return (
    <>
      <Burger />
      <div className="add-education">
        <h1>ADD WORK HISTORY</h1>
        <form action="">
          <input
            type="text"
            placeholder="company name"
            name="companyName"
            value={companyName}
            onChange={(e) => onChangeCompanyName(e)}
          />
          <input
            type="text"
            placeholder="position"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => onChangeJobTitle(e)}
          />
          <input
            type="text"
            placeholder="location"
            name="jobLocation"
            value={jobLocation}
            onChange={(e) => onChangeJobLocation(e)}
          />
          <div className="date-picker">
            <DatePicker
              className="date"
              selected={startDate}
              onChange={(date) => onChangeStartDate(date)}
            />
            <DatePicker
              className="date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <textarea
            className="add-education-textarea"
            id=""
            cols="30"
            rows="10"
            name="jobDescription"
            value={jobDescription}
            onChange={(e) => onChangeJobDescription(e)}
          >
            Description
          </textarea>
          <input
            type="text"
            placeholder="technologies"
            name="technologies"
            value={technologies}
            onChange={(e) => onChangeTechnologies(e)}
          />

          <button onClick={(e) => onSubmit(e)}>Add job</button>
        </form>
      </div>
    </>
  );
}

export default AddWorkHistory;
