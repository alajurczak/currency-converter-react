import { currencies } from "../Currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Button, Field, LabelText, Legend, Fieldset, StyledForm, AdditionalInformation } from "./styled";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const findCurrency = () => currencies.find(({ short }) => short === currency);
  const calculateResult = () => {
    setResult({
      currency,
      targetAmount: amount / findCurrency().rate,
      rate: findCurrency().rate,
      sourceAmount: +amount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
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
              {currencies.map(currency => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))};
            </Field>
          </label>
        </p>
        <p>
          <Button>Oblicz</Button>
        </p>
        <Result result={result} />
        <AdditionalInformation>*Pole obowiązkowe do wypełnienia</AdditionalInformation>
        <AdditionalInformation>Obliczenia wykonano dla kursu walut z dnia 3.11.2022.</AdditionalInformation>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;