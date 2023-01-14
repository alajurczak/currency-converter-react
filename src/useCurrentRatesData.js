import { useState, useEffect } from "react";

export const useCurrentRatesData = () => {
    const [rates, setRates] = useState({});
    const [date, setDate] = useState("");
    const [status, setStatus] = useState({
        state: "loading"
    });

    const fetchApi = async () => {
        try {
            const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const { rates, date } = await response.json();
            setRates({ rates });
            setDate({ date });
            setStatus({
                state: "success"
            });
        }
        catch (error) {
            setStatus({
                state: "error"
            });
        }
    };

    useEffect(() => {
        setTimeout(fetchApi, 1000);
    }, []);

    return { rates, date, status };
};
