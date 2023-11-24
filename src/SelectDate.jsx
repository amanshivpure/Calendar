import React, { useState } from "react";
function SelectDate()
{ const [sDate, setsDate] = useState(new Date());

        <div className = "selected-date">
           Selected Date: {sDate.toLocaleDateString()}
        </div>
    

}
export default SelectDate;