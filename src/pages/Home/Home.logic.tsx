import { useEffect, useState } from "react"
import { getTransactionsService } from "../../services/transactions/transactions.service"
import { TransactionsTypes } from "../../services/transactions/transactions.types"

export const useHomePage = () => {
  const [transactions, setTransactions] = useState<TransactionsTypes[]>([])

  const getTransactions = () => {
    getTransactionsService()
      .then((res) => {
        setTransactions(res)
      })
      .catch((err) => {
        setTransactions([])
        throw new Error(
          `Error on get transactions at: Home.logic with error: ${err}`,
        )
      })
  }

  const summaryDetails = transactions.reduce(
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

  useEffect(() => {
    getTransactions()
  }, [])

  return { transactions, summaryDetails }
}
