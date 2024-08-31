import { styled } from "styled-components"

export const S = {
  Container: styled.header`
    background-color: ${({ theme }) => theme.colors["gray-900"]};
    width: 100%;
    height: 13.25rem;
    padding: 2.5rem 10rem 0 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  LogoArea: styled.div`
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.img.attrs({ width: "45px", height: "45px" })``,
  Title: styled.p`
    font-size: 1.625rem;
    font-weight: 700;
  `,
}
