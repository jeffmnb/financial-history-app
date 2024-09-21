import { styled } from "styled-components"
import { caseDevice } from "../../styles/GlobalStyle"

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  SummaryCardsList: styled.div`
    width: 100%;
    overflow: scroll;
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
    top: 5.375rem;
    position: absolute;
    justify-content: center;

    ${caseDevice("mobile")} {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      justify-content: start;
      gap: 2rem;
    }

    ${caseDevice("tablet")} {
      padding: 0 5rem 0 5rem;
      justify-content: start;
      gap: 2rem;
    }
  `,
  TransactionArea: styled.div`
    position: absolute;
    top: 20rem;
    padding: 0 10em;
    width: 100%;

    ${caseDevice("tablet")} {
      padding: 2.5rem 5rem 0 5rem;
    }

    ${caseDevice("mobile")} {
      padding: 0 1.5em;
    }
  `,
  TransactionLabels: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    margin-bottom: 1.25rem;
  `,
  Label: styled.p``,
  CountItens: styled.p`
    color: ${({ theme }) => theme.colors["gray-500"]};
  `,
  TransactionsList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 6.25rem;

    ${caseDevice("mobile")} {
      gap: 0.75rem;
    }
  `,
  EmptyText: styled.p`
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
  `,
}
