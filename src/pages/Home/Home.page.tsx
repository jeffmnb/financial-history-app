import React from "react"
import { S } from "./Home.styles"
import { Header } from "../../components/Header"

export const HomePage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <h1>Tela Home</h1>
    </S.Container>
  )
}
