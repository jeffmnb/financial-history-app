import { styled } from "styled-components"
import { InputProps } from "./Input.types"

export const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
  `,
  Container: styled.input.withConfig({
    shouldForwardProp: (prop) => prop !== "messageError",
  })<Pick<InputProps, "messageError">>`
    background: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-500"]};
    padding: 1rem;
    border-radius: 0.375rem;
    border: 0 solid transparent;

    &:not(:focus) {
      border-bottom: 1px solid
        ${({ theme, messageError }) =>
          messageError ? theme.colors["red-300"] : "transparent"};
    }

    &:focus {
      box-shadow: none;
      border-bottom: 1px solid
        ${({ theme, messageError }) =>
          messageError ? theme.colors["red-300"] : theme.colors["green-300"]};
    }
  `,
  MessageError: styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors["red-300"]};
  `,
}
