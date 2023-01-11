import Form from "./Form";
import Container from "./Container";
import CurrentDate from "./Date";
import { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApi = () => {
    fetch("https://api.exchangerate.host/latest?base=PLN")
      .then((response) => {
        if (response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((dataRates) => {
        setRates(dataRates.rates);
        setDate(dataRates.date);
        setLoading(false);
      })
      .catch(() => setError(true));
  };
  useEffect(() => {
    setTimeout(fetchApi, 3000);
  }, []);

  if (loading) {
    return (
      <Container>
        <p>
          Ładowanie... Pobieram aktualne kursy z Banku Centralnego.
        </p>
        <CurrentDate />
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <p>
          Upss... Coś poszło nie tak! Sprawdź połączenie z internetem i spróbuj ponownie.
        </p>
        <CurrentDate />
      </Container>
    )
  }

  return (
    <Container>
      <Form date={date} />
      <CurrentDate />
    </Container>

  );
}

export default App;
