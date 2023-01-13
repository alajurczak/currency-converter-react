import { useState, useEffect } from "react";

export const useCurrentRatesData = () => {
    const [rates, setRates] = useState({});
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchApi = async () => {
        try {
            const myResponse = await fetch("https://api.exchangerate.host/latest?base=PLN");
            if (!myResponse.ok) {
                throw new Error(myResponse.statusText);
            }
            const dataRates = await myResponse.json();
            setRates(dataRates.rates);
            setDate(dataRates.date);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        setTimeout(fetchApi, 1000);
    }, []);

    return { rates, date, loading, error };
};
