import { createGlobalStyle } from "styled-components"

const devices = {
  mobile: "@media (max-width: 770px)",
  tablet: "@media (min-width: 770px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1024px)",
}

export const caseDevice = (device: keyof typeof devices) => devices[device]

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors["gray-800"]};
        color: ${({ theme }) => theme.colors["gray-100"]};
    }

    body, input, textarea, button {
        font: 400 1rem ${({ theme }) => theme.fonts.roboto};
    }
`
