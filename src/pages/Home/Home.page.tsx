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
import { Loading } from "../../global/components/Loading"

export const HomePage: React.FC = () => {
  const { isMobile } = useDevice()
  const { transactions, showSkeleton, handleSearchTransactions } = useHomePage()

  if (showSkeleton) return <Loading />

  return (
    <S.Container>
      <Header />
      <S.SummaryCardsList>
        <SummaryCard
          key={SummaryCardVariant.INPUT}
          type={SummaryCardVariant.INPUT}
        />
        <SummaryCard
          key={SummaryCardVariant.OUTPUT}
          type={SummaryCardVariant.OUTPUT}
        />
        <SummaryCard
          key={SummaryCardVariant.CURRENT}
          type={SummaryCardVariant.CURRENT}
        />
      </S.SummaryCardsList>
      <S.TransactionArea>
        <Render.If isTrue={isMobile}>
          <S.TransactionLabels>
            <S.Label>Transações</S.Label>
            <S.CountItens>{transactions.length} itens</S.CountItens>
          </S.TransactionLabels>
        </Render.If>
        <SearchForm onSubmit={handleSearchTransactions} />
        <S.TransactionsList>
          <Render.If isTrue={!!transactions.length}>
            {transactions.map((transaction) => (
              <TransactionCard key={transaction.id} {...transaction} />
            ))}
          </Render.If>
          <Render.If isTrue={!transactions.length}>
            <S.EmptyText>Opps! Não encontrei esta transação 🙁</S.EmptyText>
          </Render.If>
        </S.TransactionsList>
      </S.TransactionArea>
      <TransactionModal />
    </S.Container>
  )
}
