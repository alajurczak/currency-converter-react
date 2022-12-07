import "./style.css";
import { currencies } from "../Currencies";
import { useState } from "react";
import { Result } from "./Result";

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
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w zł: *
            </span>
            <input
              className="form__field"
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
            <span className="form__labelText">
              Wybierz walutę: *
            </span>
            <select
              className="form__field"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map(currency => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))};
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Oblicz</button>
        </p>
        <Result result={result}/>
        <p className="form__additionalInformation">*Pole obowiąznowe do wypełnienia</p>
        <p className="form__additionalInformation">Obliczenia wykonano dla kursu walut z dnia 3.11.2022.</p>
      </fieldset>
    </form>
  )
}

export default Form;