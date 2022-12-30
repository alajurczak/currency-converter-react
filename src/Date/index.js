import { StyledDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formattedDate = (newDate) => newDate.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

const CurrentDate = () => {
    const newDate = useCurrentDate();

    return (
        <StyledDate>
            Dzisiaj jest {" "}
            {formattedDate(newDate)}
        </StyledDate>
    );
};

export default CurrentDate;