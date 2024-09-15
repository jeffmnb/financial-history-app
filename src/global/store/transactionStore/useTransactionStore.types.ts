import { TransactionsTypes } from "../../../services/transactions/transactions.types"

export type useTransactionStoreProps = {
  transactions: TransactionsTypes[] | []
  setTransactions: (newTransactions: TransactionsTypes[]) => void
}
