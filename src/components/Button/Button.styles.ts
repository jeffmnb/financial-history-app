import { styled } from "styled-components"
import { ButtonProps } from "./Button.types"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { caseDevice } from "../../styles/GlobalStyle"

export const S = {
  Container: styled.button.withConfig({
    shouldForwardProp: (prop) => !prop.includes("fullWidth" || "variant"),
  })<Omit<ButtonProps, "text">>`
    min-height: 3.125rem;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border-radius: 0.375rem;
    color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.white : theme.colors["green-300"]};
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors["green-700"] : "transparent"};
    border: ${({ theme, variant }) =>
      variant === "secondary"
        ? `0.0625rem solid ${theme.colors["green-300"]}`
        : "transparent"};

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors["green-500"]};
      color: ${({ theme, variant }) =>
        variant === "secondary" && theme.colors.white};
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    transition: background-color 0.2s;

    ${caseDevice("mobile")} {
      height: 2.375rem;
    }
  `,
  Title: styled.p`
    font-size: 0.95rem;
    font-weight: 700;

    ${caseDevice("mobile")} {
      font-size: 1.2rem;
    }
  `,
  SearchIcon: styled(MagnifyingGlass).attrs({ size: 20, weight: "bold" })``,
}
