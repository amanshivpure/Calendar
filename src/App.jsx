import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import './index.css';
function App() {
   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   const [date, changeDate] = useState(new Date());
   let name;
   

   function changeValue(val) {
      changeDate(val);
   }

   return (<>
      <div className="body">
         
         <h3>
           {" "} <i>Calender </i> {" "}
         </h3>
         <center>
         <div className="main"><div>
         <Calendar onChange = {changeValue} value = {date} />
         </div>
         
         <div className="Select-date"><center>
         <p>Today</p>
         <div className="C-month">
            {name = month[date.getMonth()]}
         </div>
         <div className="Today-date">
            {date.getDate()}
         </div>
         <div className="Year">
            {date.getFullYear()}
         </div>
         </center>
         </div>
         </div></center>
      
      </div></>
   );
}
export default App;