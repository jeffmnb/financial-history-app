import axios from "axios"

import { TransactionsTypes } from "./transactions.types"

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const getTransactionsService = (): Promise<TransactionsTypes[]> => {
  return api
    .get("/transactions")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(
        `Error on get transactions at: getTransactionsService. with error: ${err}`,
      )
    })
}

export const getTransactionsByQueryService = (
  query: string,
): Promise<TransactionsTypes[]> => {
  return api
    .get("/transactions", { params: { q: query } })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(
        `Error on get transactions at: getTransactionsByQueryService. with error: ${err}`,
      )
    })
}

export const createTransactionService = (newTransaction: TransactionsTypes) => {
  if (newTransaction)
    return api
      .post("transactions", newTransaction)
      .then(({ data }) => {
        return data as TransactionsTypes
      })
      .catch((err) => {
        throw new Error(
          `Error on get transactions at: createTransactionService. with error: ${err}`,
        )
      })
}
