import React from "react"
import { S } from "./Home.styles"
import { Header } from "../../components/Header"
import { SummaryCardVariant } from "../../components/SummaryCard/SummaryCard.types"
import { SummaryCard } from "../../components/SummaryCard/SummaryCard"
import { TransactionCard } from "../../components/TransactionCard"
import { Render } from "../../components/Render/Render"
import { useDevice } from "../../hooks/useDevice"
import { SearchForm } from "../../components/SearchForm"
import { TransactionModal } from "../../components/TransactionModal"
import { useHomePage } from "./Home.logic"

export const HomePage: React.FC = () => {
  const { isMobile } = useDevice()
  const { transactions, summaryDetails } = useHomePage()

  if (!transactions.length) return <></>

  return (
    <S.Container>
      <Header />
      <S.SummaryCardsList>
        <SummaryCard
          key={SummaryCardVariant.INPUT}
          type={SummaryCardVariant.INPUT}
          value={summaryDetails.input}
        />
        <SummaryCard
          key={SummaryCardVariant.OUTPUT}
          type={SummaryCardVariant.OUTPUT}
          value={summaryDetails.output}
        />
        <SummaryCard
          key={SummaryCardVariant.CURRENT}
          type={SummaryCardVariant.CURRENT}
          value={summaryDetails.total}
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
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </S.TransactionsList>
      </S.TransactionArea>
      <TransactionModal />
    </S.Container>
  )
}
