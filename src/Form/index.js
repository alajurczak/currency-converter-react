import "./style.css";
import { currencies } from "../Currencies";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walut</legend>
      <p>
        <label>
          <span className="form__labelText">
            Kwota w zł: *
          </span>
          <input className="form__field" name="amount" placeholder="Kwota w zł" type="number" min="0" step="0.01" required autoFocus />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Wybierz walutę: *
          </span>
          <select className="form__field" name="currencySelection">
            {currencies.map(currency => (
              <option key={currency.short} value={currency.name}>
                {currency.name}
              </option>
            ))};
          </select>
        </label>
      </p>
      <p className="form__result">Wynik przeliczenia: <strong>0</strong> </p>
      <p>
        <button className="form__button">Oblicz</button>
      </p>
      <p className="form__additionalInformation">*Pole obowiąznowe do wypełnienia</p>
      <p className="form__additionalInformation">Obliczenia wykonano dla kursu walut z dnia 3.11.2022.</p>
    </fieldset>
  </form>
);

export default Form;