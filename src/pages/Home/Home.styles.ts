import { styled } from "styled-components"
import { caseDevice } from "../../styles/GlobalStyle"

export const S = {
  Container: styled.div`
    display: flex;
    position: relative;
    justify-content: center;
  `,
  SummaryCardsList: styled.div`
    width: 100%;
    overflow: scroll;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    margin-top: 2.5rem;
    top: 5.375rem;
    position: absolute;
    padding-left: 10rem;
    padding-right: 10rem;

    ${caseDevice("mobile")} {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    ${caseDevice("tablet")} {
      padding-right: 10rem;
    }
  `,
}
