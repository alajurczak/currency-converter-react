
export const Result = ({result}) => {
    if (result!=="") return (
        <p className="form__result">Wynik przeliczenia: {Number(result.targetAmount).toFixed(2)} </p>
    )
};