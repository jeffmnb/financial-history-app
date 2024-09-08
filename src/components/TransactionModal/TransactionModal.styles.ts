import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  Description: styled.p`
    text-align: center;
    margin-bottom: 1rem;
  `,
  Subtitle: styled.p`
    text-align: center;
  `,
  InputsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
  `,
  SelectorWrapper: styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button``,
}
