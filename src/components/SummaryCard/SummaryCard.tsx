import { useTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { formatCurrency } from "../../utils/formatter"
import { S } from "./SummaryCard.styles"
import { SummaryCardProps, SummaryCardVariant } from "./SummaryCard.types"
import { closestTo, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useEffect, useState } from "react"

export const SummaryCard = ({ type }: SummaryCardProps) => {
  const { transactionsDetails } = useTransactionStore()

  const [details, setDetails] = useState({
    value: "",
    title: "",
    message: "",
  })

  const getLastTransactionDate = () => {
    if (transactionsDetails?.allTransactions) {
      const { allTransactions } = transactionsDetails

      const lastInputDates = allTransactions
        .filter(({ transaction: { status } }) => status === "input")
        .map((t) => t.date)

      const closerInputDate = format(
        closestTo(new Date(), lastInputDates)!,
        "d 'de' MMMM",
        { locale: ptBR },
      )

      const lastOutputDates = allTransactions
        .filter(({ transaction: { status } }) => status === "output")
        .map((t) => t.date)
      const closerOutputDate = format(
        closestTo(new Date(), lastOutputDates)!,
        "d 'de' MMMM",
        { locale: ptBR },
      )
      return { closerInputDate, closerOutputDate }
    }
  }

  const updateDetailsCard = () => {
    switch (type) {
      case SummaryCardVariant.INPUT:
        setDetails({
          value: formatCurrency(transactionsDetails?.inputDetails?.total || 0),
          title: "Entradas",
          message: `Última entrada em ${getLastTransactionDate()?.closerInputDate}`,
        })
        break
      case SummaryCardVariant.OUTPUT:
        setDetails({
          value: formatCurrency(transactionsDetails?.totalDetails?.total || 0),
          title: "Saídas",
          message: `Última saída em ${getLastTransactionDate()?.closerOutputDate}`,
        })
        break
      default:
        setDetails({
          title: "Em conta",
          message: "Rendendo 102% do CDI",
          value: formatCurrency(transactionsDetails?.totalDetails?.total || 0),
        })
    }
  }

  useEffect(() => {
    updateDetailsCard()
  }, [])

  return (
    <S.Container type={type}>
      <S.StatusArea>
        <S.Status>{details?.title}</S.Status>
        <S.StatusIcon type={type} />
      </S.StatusArea>
      <S.Value type={type}>{details?.value}</S.Value>
      <S.LastTimeAction type={type}>{details?.message}</S.LastTimeAction>
    </S.Container>
  )
}
