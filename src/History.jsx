import React from 'react'; 
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './H.css'


function History() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
    <div className='history-container'>
    <h1 className='history' >HISTORY</h1>
    {/*used react date-picker and date-fns*/}
     <DatePicker className='date'
  selected={selectedDate}
  onChange={(date) => {
    console.log(date);
    setSelectedDate(date);
  }}
  placeholderText="Select a date"
  dateFormat="yyyy-MM-dd"
/>
</div>
    </>
  );
}

export default History;
