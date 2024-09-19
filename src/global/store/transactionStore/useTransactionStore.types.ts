import { TransactionsTypes } from "../../../services/transactions/transactions.types"

type TransactionsDetails = {
  allTransactions?: TransactionsTypes[] | []
  inputDetails?: {
    total: number
    lastDate?: string | Date
  }
  outputDetails?: {
    total: number
    lastDate?: string | Date
  }
  totalDetails?: {
    total: number
  }
}

export type useTransactionStoreProps = {
  transactions: TransactionsTypes[] | []
  transactionsDetails: TransactionsDetails
  setTransactionsStore: (transactions: TransactionsTypes[]) => void
  setTransactionsDetails: (transactionsDetails: TransactionsDetails) => void
}
