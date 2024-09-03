import { styled } from "styled-components"
import { caseDevice } from "../../styles/GlobalStyle"
import { TransactionValue } from "./TransactionCard.types"
import { CalendarBlank, TagSimple } from "@phosphor-icons/react"
export const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors["gray-700"]};
    height: 4.125rem;
    width: 100%;
    border-radius: 0.375rem;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.25rem 2rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    gap: 6rem;

    ${caseDevice("tablet")} {
      gap: 2rem;
    }

    ${caseDevice("mobile")} {
      height: 8.75rem;
      flex-direction: column;
      align-items: start;
      gap: 0;
    }
  `,
  Title: styled.p``,
  Value: styled.p<Pick<TransactionValue, "status">>`
    color: ${({ theme, status }) =>
      status === "input" ? theme.colors["green-300"] : theme.colors["red-300"]};

    ${caseDevice("mobile")} {
      font-size: 1.25rem;
      font-weight: 700;
    }
  `,
  TagSimple: styled(TagSimple).attrs({ size: "1rem" })`
    color: ${({ theme }) => theme.colors["gray-500"]};
  `,
  CalendarBlank: styled(CalendarBlank).attrs({ size: "1rem" })`
    color: ${({ theme }) => theme.colors["gray-500"]};
  `,
  Category: styled.p`
    ${caseDevice("mobile")} {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }
  `,
  Date: styled.p`
    ${caseDevice("mobile")} {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }
  `,
  Spacer: styled.div`
    display: flex;
    justify-content: space-between;

    ${caseDevice("mobile")} {
      flex-direction: column;
    }

    &:nth-child(1) {
      ${caseDevice("mobile")} {
        flex: 1.8;
      }
      flex: 2;
    }

    &:nth-child(2) {
      flex: 1.2;
      ${caseDevice("mobile")} {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: end;
      }
    }
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;
  `,
}
