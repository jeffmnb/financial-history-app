import axios from "axios"

import { getTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { TransactionsTypes } from "./transactions.types"

export const getTransactionsService = (): Promise<TransactionsTypes[]> => {
  const { setTransactions } = getTransactionStore()
  return axios
    .get("http://localhost:3000/transactions")
    .then(({ data }) => {
      setTransactions(data)
      return data
    })
    .catch((err) => {
      throw new Error(
        `Error on get transactions at: getTransactionsService. with error: ${err}`,
      )
    })
}

export const createTransactionService = (newTransaction: TransactionsTypes) => {
  const { setTransactions } = getTransactionStore()
  if (newTransaction)
    return axios
      .post("http://localhost:3000/transactions", newTransaction)
      .then(({ data }) => {
        setTransactions(data)
        return data
      })
      .catch((err) => {
        throw new Error(
          `Error on get transactions at: createTransactionService. with error: ${err}`,
        )
      })
}
