import React from "react"
import { S } from "./Home.styles"
import { Header } from "../../components/Header"
import { SummaryCardVariant } from "../../components/SummaryCard/SummaryCard.types"
import { SummaryCard } from "../../components/SummaryCard/SummaryCard"

export const HomePage: React.FC = () => {
  const inputsValue = "826.672,00"
  const outputsValue = "5.235,00"
  const currentValue = "821.437,00"

  return (
    <S.Container>
      <Header />
      <S.SummaryCardsList>
        <SummaryCard
          key={SummaryCardVariant.INPUT}
          type={SummaryCardVariant.INPUT}
          value={inputsValue}
        />
        <SummaryCard
          key={SummaryCardVariant.OUTPUT}
          type={SummaryCardVariant.OUTPUT}
          value={outputsValue}
        />
        <SummaryCard
          key={SummaryCardVariant.CURRENT}
          type={SummaryCardVariant.CURRENT}
          value={currentValue}
        />
      </S.SummaryCardsList>
    </S.Container>
  )
}
