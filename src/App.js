import Form from "./Form";
import Container from "./Container";
import CurrentDate from "./Date";
import { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=PLN")
      .then((response) => response.json())
      .then((dataRates) => {
        setRates(dataRates.rates);
        setDate(dataRates.date);
      });
    console.log(rates);
  }, []);

  return (
    <Container>
      <Form date={date} />
      <CurrentDate />
    </Container>

  );
}

export default App;
