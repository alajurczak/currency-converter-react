import { useState, useEffect } from "react";

export const useCurrentRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading"
    });

    const fetchApi = async () => {
        try {
            const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const { rates, date } = await response.json();

            setRatesData({
                state: "success",
                rates,
                date
            });
        }
        catch (error) {
            setRatesData({
                state: "error"
            });
        }
    };

    useEffect(() => {
        setTimeout(fetchApi, 1000);
    }, []);

    return ratesData;
};
