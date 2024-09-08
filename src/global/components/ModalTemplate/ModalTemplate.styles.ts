import { styled } from "styled-components"
import { BottomSheet } from "react-spring-bottom-sheet"
import { X } from "@phosphor-icons/react"

export const S = {
  BottomSheet: styled(BottomSheet)``,
  Overlay: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0009;
    z-index: 99;
  `,
  Modal: styled.div`
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.colors["gray-800"]};
    z-index: 100;
    padding-top: 1.5rem;
    width: 33.125rem;
  `,
  CloseButton: styled(X).attrs({ size: "1.3rem", weight: "bold" })`
    color: ${({ theme }) => theme.colors["gray-400"]};
    cursor: pointer;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.colors["gray-100"]};
    text-align: start;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: bold;
  `,
  Container: styled.div`
    padding: 0.5rem 2rem 2rem 2rem;
    overflow: auto;
  `,
  ContentWrapper: styled.div`
    margin-top: 1.5rem;
    overflow-y: auto;
  `,
}
