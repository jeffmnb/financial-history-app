import { styled } from "styled-components"

export const S = {
  Container: styled.select`
    background: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-500"]};
    padding: 1rem;
    border-radius: 0.375rem;
    border: 0 solid transparent;
    -webkit-appearance: none;
    &:hover {
      cursor: pointer;
    }
  `,
  Option: styled.option``,
}
