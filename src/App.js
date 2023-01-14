import Form from "./Form";
import Container from "./Container";
import CurrentDate from "./Date";
import { StyledParagraph } from "./Container/styled";
import { Fieldset, Legend } from "./Form/styled";
import { useCurrentRatesData } from "./useCurrentRatesData";

const LoadingText = "Pobieram aktualne kursy z Narodowego Banku Polskiego...";
const ErrorText = "Upss... Coś poszło nie tak! Sprawdź połączenie z internetem i spróbuj ponownie.";

function App() {
  const { rates, date, status } = useCurrentRatesData();

  const isReady = !status.state === "loading" && !status.state === "error";

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
            {status.state === "loading" && <StyledParagraph>{LoadingText}</StyledParagraph>}
            {status.state === "error" && <StyledParagraph>{ErrorText}</StyledParagraph>}
          </Fieldset>
          <CurrentDate />
        </>
      )}
    </Container>

  );
}

export default App;
