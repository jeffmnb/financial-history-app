import React from "react"
import { S } from "./Header.styles"
import LogoApp from "../../assets/AppIcon.svg"
import { Button } from "../Button"
import { useDevice } from "../../hooks/useDevice"

export const Header: React.FC = () => {
  const { isMobile } = useDevice()
  const getTitleButton = () => {
    if (isMobile) return <S.Plus />
    return "Inserir transação"
  }

  return (
    <S.Container>
      <S.Content>
        <S.LogoArea>
          <S.Logo src={LogoApp} />
          <S.Title>Financial App</S.Title>
        </S.LogoArea>
        <Button text={getTitleButton()} variant="primary" />
      </S.Content>
    </S.Container>
  )
}
