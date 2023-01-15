import styled from "styled-components";

export const StyledForm = styled.form`
    flex-basis: 550px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.white};
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    border-radius: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin: 5px 5px 5px 0;
    padding: 5px 5px 5px 0;
`;

export const Field = styled.input`
    width: 100%;
    max-width: 250px;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.color.royalBlue};
    };

    &:active {
        background-color: ${({ theme }) => theme.color.denim};
    };
`;

export const AdditionalInformation = styled.p`
    margin: 5px;
    font-style: italic;
    color: ${({ theme }) => theme.color.doveGray};
    text-align: center;
`;

export const StyledParagraph = styled.p`
    text-align: center;
`;
