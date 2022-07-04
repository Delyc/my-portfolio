import React from 'react'
import './admin.css'
import Burger from './Burger'
import Login from './Login'
import Addproject from './Addproject'
import Addskills from './Addskills'
import Addeducation from './Addeducation'
import AddWorkHistory from './AddWorkHistory'
import Hire from './Hire'
import Link from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Admin() {
    

    return (
        <>
       
        <Routes>
            {/* <Route path="/" element={<Burger />} /> */}
    
          <Route path="login" element={<Login />} />
          <Route path="add-project" element={<Addproject/>} />
          <Route path="add-skills" element={<Addskills/>} />
          <Route path="add-education" element={<Addeducation/>} />
          <Route path="add-work-history" element={<AddWorkHistory/>} />
          <Route path="hire" element={<Hire/>} />
        </Routes>
      
      
  
          
        </>
    )
}
