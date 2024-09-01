import { styled } from "styled-components"
import { caseDevice } from "../../styles/GlobalStyle"

export const S = {
  Container: styled.header`
    background-color: ${({ theme }) => theme.colors["gray-900"]};
    width: 100%;
    height: 12.6rem;
    padding: 2.5rem 10rem 0 10rem;

    ${caseDevice("mobile")} {
      padding: 2rem 1.5rem;
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  LogoArea: styled.div`
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.img.attrs({ width: "45px", height: "45px" })`
    ${caseDevice("mobile")} {
      width: 2.1rem;
      height: 2.1rem;
    }
  `,
  Title: styled.p`
    font-size: 1.625rem;
    font-weight: 700;

    ${caseDevice("mobile")} {
      font-size: 1.2rem;
    }
  `,
}
