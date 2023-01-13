import Form from "./Form";
import Container from "./Container";
import CurrentDate from "./Date";
import { StyledParagraph } from "./Container/styled";
import { Fieldset, Legend } from "./Form/styled";
import { useCurrentRatesData } from "./useCurrentRatesData";

const LoadingText = "Pobieram aktualne kursy z Narodowego Banku Polskiego...";
const ErrorText = "Upss... Coś poszło nie tak! Sprawdź połączenie z internetem i spróbuj ponownie.";

function App() {
  const { rates, date, loading, error } = useCurrentRatesData();

  const isReady = !error && !loading;

  return (
    <Container>
      {isReady ? (
        <>
          <Form date={date} rates={rates} />
          <CurrentDate />
        </>) : (
        <>
          <Fieldset>
            <Legend>Kalkulator walut</Legend>
            {loading && <StyledParagraph>{LoadingText}</StyledParagraph>}
            {error && <StyledParagraph>{ErrorText}</StyledParagraph>}
          </Fieldset>
        </>
      )}
    </Container>

  );
}

export default App;
