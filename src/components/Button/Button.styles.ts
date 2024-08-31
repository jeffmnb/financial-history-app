import { styled } from "styled-components"
import { ButtonTypes } from "./Button.types"
import { MagnifyingGlass } from "@phosphor-icons/react"

export const S = {
  Container: styled.div<Omit<ButtonTypes, "text">>`
    height: 3.125rem;
    width: ${({ fullWidth }) => fullWidth && "100%"};
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border-radius: 0.375rem;
    color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.white : theme.colors["green-300"]};
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors["green-500"] : "transparent"};
    border: ${({ theme, variant }) =>
      variant === "secondary" &&
      `0.0625rem solid ${theme.colors["green-300"]}`};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors["green-300"]};
      color: ${({ theme, variant }) =>
        variant === "secondary" && theme.colors.white};
    }
    transition: background-color 0.2s;
  `,
  Title: styled.p`
    font-size: 1rem;
    font-weight: 700;
  `,
  SearchIcon: styled(MagnifyingGlass).attrs({ size: 20, weight: "bold" })``,
}
