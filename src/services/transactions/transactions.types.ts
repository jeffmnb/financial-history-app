import {
  CategoryValue,
  TransactionValue,
} from "../../components/TransactionCard/TransactionCard.types"

export type TransactionsTypes = {
  id: number
  title: string
  type?: "input" | "output"
  transaction: TransactionValue
  category: CategoryValue
  date: string
}
