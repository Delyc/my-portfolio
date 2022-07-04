import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Burger from './Burger';
function Addeducation() {
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date())
    
  return (
      <>
      <Burger />
    <div  className='add-education'>
        <h1>ADD EDUCATION</h1>
        <form action="">
        <input type="text" placeholder='school name'/>
        <div className='date-picker'>
        <DatePicker className='date'  selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker className='date' selected={endDate} onChange={(date) => setEndDate(date)}  />
        </div>
        <textarea className='add-education-textarea' name="" id="" cols="30" rows="10">Description</textarea>
        <input type="text" placeholder='relevant courses' />
        <button>Add education</button>
        </form>
         
    </div>
    </>
  )
}

export default Addeducation