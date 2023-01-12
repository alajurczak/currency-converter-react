import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: auto 20px;
    padding: 20px;
    display: grid;
`;

export const StyledParagraph = styled.p`
    background-color: ${({theme}) => theme.color.cornflowerBlue};
`;