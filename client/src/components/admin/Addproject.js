import React, { useState, useRef } from "react";
import axiosBase from "../../api";
import Burger from "./Burger";

function Addproject() {
  const [github, setGithub] = useState();
  const onChangeGithub = (e) => {
    setGithub(e.target.value);
  };

  const [liveLink, setLiveLink] = useState();
  const onChangeLiveLink = (e) => {
    setLiveLink(e.target.value);
  };

  const [banner, setBanner] = useState();
  const onChangeBanner = (e) => {
    setBanner(e.target.files[0].filename);
  };

  const [title, setTitle] = useState();
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [hook, setHook] = useState();
  const onChangeHook = (e) => {
    setHook(e.target.value);
  };

  const [description, setDescription] = useState();
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const formRef = useRef();

  const addProject = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const res = await axiosBase.post("/projects", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    setGithub("");
    setLiveLink("");
    setBanner("");
    setHook("");
    setTitle("");
    setDescription("");
    e.preventDefault();
    const regData = {
      github: github,
      liveLink: liveLink,
      banner: banner,
      title: title,
      hook: hook,
      description: description,
    };
    addProject(regData);
    console.log(regData);
  };

  return (
    <>
      <Burger />
      <div className="add-project">
        <h1>ADD PROJECT</h1>
        <form
          ref={formRef}
          action=""
          onSubmit={(e) => addProject(e)}
          encType="multipart/form-data"
        >
          <input
            name="github"
            value={github}
            onChange={(e) => onChangeGithub(e)}
            type="text"
            placeholder="live link"
          />
          <input
            name="liveLink"
            value={liveLink}
            onChange={(e) => onChangeLiveLink(e)}
            type="text"
            placeholder="github repo"
          />
          <input
            name="banner"
            type="file"
          />
          <input
            name="title"
            value={title}
            onChange={(e) => onChangeTitle(e)}
            type="text"
            placeholder="stack"
          />
          <textarea
            name="hook"
            value={hook}
            onChange={(e) => onChangeHook(e)}
            className="add-project-textarea"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <textarea
            name="description"
            value={description}
            onChange={(e) => onChangeDescription(e)}
            className="add-project-textarea"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Add Project</button>
        </form>
      </div>
    </>
  );
}

export default Addproject;
