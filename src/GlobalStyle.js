import { createGlobalStyle } from "styled-components";
import bgimages from "./bgimages.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  background-image: url("${bgimages}");
  background-position: center;
  background-size: cover;
  min-height: 800px;
  justify-content: center;
  margin: 20px auto;
  padding: 0 20px;
  max-width: 700px;

}
`;