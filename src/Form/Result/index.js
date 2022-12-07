import "./style.css";

export const Result = ({ result }) => {
    if (result !== "") return (
        <p className="result">
            Wynik przeliczenia:
            <strong> {result.sourceAmount} PLN = {(result.targetAmount).toFixed(2)} {result.currency}</strong>
        </p>
    )
};