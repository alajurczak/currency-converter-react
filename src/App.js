import Form from "./Form";
import Container from "./Container";
import CurrentDate from "./Date";
import { useState, useEffect } from "react";

const LoadingText = "Ładowanie... Pobieram aktualne kursy z Narodowego Banku Polskiego.";
const ErrorText = "Upss... Coś poszło nie tak! Sprawdź połączenie z internetem i spróbuj ponownie.";

function App() {
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

  const isReady = !error && !loading;

  return (
    <Container>
      {isReady ? (
        <>
          <Form date={date} rates={rates} />
          <CurrentDate />
        </>) : (
        <>
          {loading && <p>{LoadingText}</p>}
          {error && <p>{ErrorText}</p>}
        </>
      )}
    </Container>

  );
}

export default App;
