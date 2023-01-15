import { useState } from "react";
import { useCurrentRatesData } from "../useCurrentRatesData";
import { Result } from "./Result";
import { Button, Field, LabelText, Legend, Fieldset, StyledForm, AdditionalInformation, Loading, Failure } from "./styled";
import loadingIcon from "./loadingIcon.gif";

const LoadingText = "Pobieram aktualne kursy z Narodowego Banku Polskiego...";
const ErrorText = "Upss... Coś poszło nie tak! 😓 Sprawdź połączenie z internetem i spróbuj ponownie.";

const Form = ({ date }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useCurrentRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      currency,
      targetAmount: amount * rate,
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
        {ratesData.state === "loading"
          ? (
            <Loading>
              {LoadingText}
              <img src={loadingIcon} alt="loading..." width="250px" />
            </Loading>
          )
          : (
            ratesData.state === "error" ? (
              <Failure>{ErrorText}</Failure>
            ) : (
              <>
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
                      {Object.keys(ratesData.rates).map((currency) => {
                        return (
                          <option key={currency} value={currency}>
                            {currency}
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
              </>
            ))}

      </Fieldset>
    </StyledForm>
  );
};

export default Form;