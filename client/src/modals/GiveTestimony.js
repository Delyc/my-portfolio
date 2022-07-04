import React, { useState, useRef } from 'react'
import axiosBase from '../api'



function GiveTestimony({closeModal}) {
    const [empname, setEmpname] = useState()
    const onChangeEmpName=(e) =>{
        setEmpname(e.target.value)
    }
    const [banner, setBanner] = useState()
    const onChangeBanner=(e) =>{
        setBanner(e.target.files[0].filename)
    }
    const [position, setPosition] = useState()
    const onChangePosition=(e) =>{
        setEmpname(e.target.value)
    }
    const [message, setMessage] = useState()
    const onChangeMessage=(e) =>{
        setEmpname(e.target.value)
    }
    const formRef = useRef()
    const giveTestimony = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        try {
            const res = await axiosBase.post("/testimony", data, {
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
    }

    const onSubmit=(e)=>{
        setEmpname("")
        setBanner("")
        setPosition("")
        setMessage("")
        e.preventDefault()
        const regData ={
            empname:empname,
            banner:banner,
            position:position,
            message:message
        }
        giveTestimony(regData)
        console.log(regData)
    }
  return (
      <div className='modal-parent-testimony'>
          <div className='modal-testimony'>
              <button onClick={() => closeModal(false)}>X</button>
   
        <h1>Hire me</h1>
        <div className='give-testimony'>
        <p className='testimony-text'>
            WHY HIRE ME? <span>You should hire me for my passion and prven abilities in software develpment. I pride myself on my time management, professional skills and profiecinece in full stack development. Check what my clients say about me and my working projects</span>
        </p>
        <form ref={formRef}
          action=""
          onSubmit={(e) => giveTestimony(e)}
          encType="multipart/form-data">
            <input name='empname' value={empname} type="text" placeholder='Full name'/>
            <input name='position' value={position} type="text" placeholder='position' />
            <input name="banner" type="file" />
            <textarea value={message} name="message" id="" cols="30" rows="10" ></textarea>
            <button className='hire-send'>Send</button>
        </form>

        </div>
        
    </div>
      </div>
    
  )
}

export default GiveTestimony