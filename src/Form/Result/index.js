import { StyledResult } from "./styled";

export const Result = ({ result }) => {
    if (result !== "") return (
        <StyledResult>
            Wynik przeliczenia:
            <strong> {result.sourceAmount} PLN = {(result.targetAmount).toFixed(2)} {result.currency}</strong>
        </StyledResult>
    )
};