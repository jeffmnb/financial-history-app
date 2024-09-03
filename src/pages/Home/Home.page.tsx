import React from "react"
import { S } from "./Home.styles"
import { Header } from "../../components/Header"
import { SummaryCardVariant } from "../../components/SummaryCard/SummaryCard.types"
import { SummaryCard } from "../../components/SummaryCard/SummaryCard"
import { TransactionCard } from "../../components/TransactionCard"
import { Render } from "../../components/Render/Render"
import { useDevice } from "../../hooks/useDevice"
import { SearchForm } from "../../components/SearchForm"
import {
  CategoryValue,
  TransactionCardProps,
} from "../../components/TransactionCard/TransactionCard.types"

export const HomePage: React.FC = () => {
  const { isMobile } = useDevice()

  const inputsValue = "826.672,00"
  const outputsValue = "5.235,00"
  const currentValue = "821.437,00"

  const exampleTransaction = {
    title: "Investimento em BTC",
    category: CategoryValue.INVESTMENTS,
    date: new Date().toString(),
    transaction: { status: "input", value: "2.500" },
  } as TransactionCardProps

  const exampleTransaction2 = {
    title: "Mcdonalds",
    category: CategoryValue.FOOD,
    date: new Date().toString(),
    transaction: { status: "output", value: "161" },
  } as TransactionCardProps
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
      <S.TransactionArea>
        <Render.If isTrue={isMobile}>
          <S.TransactionLabels>
            <S.Label>Transações</S.Label>
            <S.CountItens>4 itens</S.CountItens>
          </S.TransactionLabels>
        </Render.If>
        <SearchForm />
        <S.TransactionsList>
          <TransactionCard {...exampleTransaction} />
          <TransactionCard {...exampleTransaction2} />
        </S.TransactionsList>
      </S.TransactionArea>
    </S.Container>
  )
}
