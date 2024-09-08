import { S } from "./TransactionSelector.styles"
import { TransactionSelectorProps } from "./TransactionSelector.types"

export const TransactionSelector = ({
  transactionType,
}: TransactionSelectorProps) => {
  const getTitle = () => {
    if (transactionType === "input") return "Entrada"
    return "Saída"
  }

  return (
    <S.Container transactionType={transactionType}>
      <S.Icon transactionType={transactionType} />
      <S.Title>{getTitle()}</S.Title>
    </S.Container>
  )
}
