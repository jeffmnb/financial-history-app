import { S } from "./TransactionSelector.styles"
import { TransactionSelectorProps } from "./TransactionSelector.types"

export const TransactionSelector = ({
  transactionType,
  isSelected,
  ...props
}: TransactionSelectorProps & { isSelected: boolean }) => {
  const getTitle = () => {
    if (transactionType === "input") return "Entrada"
    return "Saída"
  }

  return (
    <S.Container
      {...props}
      transactionType={transactionType}
      isSelected={isSelected}
    >
      <S.Icon transactionType={transactionType} />
      <S.Title>{getTitle()}</S.Title>
    </S.Container>
  )
}
