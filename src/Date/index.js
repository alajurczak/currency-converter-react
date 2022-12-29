import { useState, useEffect } from "react";
import { StyledDate } from "./styled";

const formattedDate = (newDate) => newDate.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

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
        <StyledDate>
            Dzisiaj jest {" "}
            {formattedDate(newDate)}
        </StyledDate>
    );
};

export default CurrentDate;