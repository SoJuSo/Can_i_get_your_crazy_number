import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,body {
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;
