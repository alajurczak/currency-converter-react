import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNewDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return newDate;
};