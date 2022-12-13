import { useState } from "react";
import "./style.css";

const CurrentDate = () => {
    const [newDate, setNewDate] = useState(new Date());

    setInterval(() => {
        setNewDate(newDate => newDate = new Date());
    }, 1000);
    return (
        <div className="date">{newDate.toLocaleString()}</div>
    )
};

export default CurrentDate;