import { getTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { formatCurrency } from "../../utils/formatter"
import { S } from "./SummaryCard.styles"
import { SummaryCardProps, SummaryCardVariant } from "./SummaryCard.types"
import { closestTo, format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const SummaryCard = ({ type, value }: SummaryCardProps) => {
  const getLastTransactionDate = () => {
    const { transactions } = getTransactionStore()

    const lastInputDates = transactions
      .filter(({ type }) => type === "input")
      .map((t) => t.date)

    const closerInputDate = format(
      closestTo(new Date(), lastInputDates)!,
      "d 'de' MMMM", // 30 de julho
      {
        locale: ptBR,
      },
    )

    const lastOutputDates = transactions
      .filter(({ type }) => type === "output")
      .map((t) => t.date)
    const closerOutputDate = format(
      closestTo(new Date(), lastOutputDates)!,
      "d 'de' MMMM",
      {
        locale: ptBR,
      },
    )

    return { closerInputDate, closerOutputDate }
  }

  const getDetailsCard = () => {
    switch (type) {
      case SummaryCardVariant.INPUT:
        return {
          title: "Entradas",
          message: `Última entrada em ${getLastTransactionDate().closerInputDate}`,
        }
      case SummaryCardVariant.OUTPUT:
        return {
          title: "Saídas",
          message: `Última saída em ${getLastTransactionDate().closerOutputDate}`,
        }
      default:
        return { title: "Em conta", message: "Rendendo 102% do CDI" }
    }
  }

  return (
    <S.Container type={type}>
      <S.StatusArea>
        <S.Status>{getDetailsCard().title}</S.Status>
        <S.StatusIcon type={type} />
      </S.StatusArea>
      <S.Value type={type}>{formatCurrency(value!)}</S.Value>
      <S.LastTimeAction type={type}>
        {getDetailsCard().message}
      </S.LastTimeAction>
    </S.Container>
  )
}
