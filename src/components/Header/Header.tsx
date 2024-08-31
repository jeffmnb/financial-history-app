import React from "react"
import { S } from "./Header.styles"
import LogoApp from "../../assets/AppIcon.svg"
import { Button } from "../Button"

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.LogoArea>
        <S.Logo src={LogoApp} />
        <S.Title>Financial App</S.Title>
      </S.LogoArea>

      <Button text="Nova transação" variant="primary" />
    </S.Container>
  )
}
