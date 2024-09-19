import { styled } from "styled-components"
import { caseDevice } from "../../styles/GlobalStyle"
export const S = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 1rem;

    ${caseDevice("mobile")} {
      gap: 0.5rem;
    }
  `,
}
