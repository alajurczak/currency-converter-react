import { useState } from "react";
import { Result } from "./Result";
import { Button, Field, LabelText, Legend, Fieldset, StyledForm, AdditionalInformation } from "./styled";

const Form = ({ date, rates }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const findCurrency = rates[currency];
  const calculateResult = (amount, currency) => {
    setResult({
      currency,
      targetAmount: amount * findCurrency,
      sourceAmount: +amount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <p>
          <label>
            <LabelText>
              Kwota w zł: *
            </LabelText>
            <Field
              placeholder="Kwota w zł"
              type="number" min="0"
              step={0.01}
              required
              value={amount}
              autoFocus
              onChange={({ target }) => setAmount(target.value)} />
          </label>
        </p>
        <p>
          <label>
            <LabelText>
              Wybierz walutę: *
            </LabelText>
            <Field
              as="select"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(rates).map((rateKey) => {
                return (
                  <option key={rateKey} value={rateKey}>
                    {rateKey} : {rates[rateKey]}
                  </option>
                );
                })};
            </Field>
          </label>
        </p>
        <p>
          <Button>Oblicz</Button>
        </p>
        <Result result={result} />
        <AdditionalInformation>*Pole obowiązkowe do wypełnienia</AdditionalInformation>
        <AdditionalInformation>Kurs pobrano z Narodowego Banku Polskiego z dnia: {date}</AdditionalInformation>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;