import { useState, useEffect } from "react";
import "./style.css";

const CurrentDate = () => {
    const [newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNewDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="date">
            Dzisiaj jest {" "}
            {newDate.toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long"
            })}
        </div>
    );
};

export default CurrentDate;