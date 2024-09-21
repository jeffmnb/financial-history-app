import { SummaryDetails } from "../components/SummaryCard/SummaryCard.types"
import { getTransactionStore } from "../global/store/transactionStore/useTransactionStore"
import { TransactionsTypes } from "../services/transactions/transactions.types"

export const saveTransactionsDetails = (
  transactionsUpdated: TransactionsTypes[] | [],
): {
  summaryDetails: SummaryDetails
} => {
  const { setTransactionsDetails } = getTransactionStore()
  const summaryDetails = transactionsUpdated?.reduce(
    (acc, transaction) => {
      const {
        transaction: { status, value },
      } = transaction
      if (status == "input") {
        acc.input += value
        acc.total += value
      } else {
        acc.output += value
        acc.total -= value
      }

      return acc
    },
    {
      input: 0,
      output: 0,
      total: 0,
    },
  )
  setTransactionsDetails({
    allTransactions: transactionsUpdated,
    inputDetails: { total: summaryDetails?.input! },
    outputDetails: { total: summaryDetails?.output! },
    totalDetails: { total: summaryDetails?.total! },
  })

  return { summaryDetails }
}
