import * as zod from "zod"
import { transactionFormSchema } from "./TransactionModal"

export type TransactionModalProps = {
  open: () => void
  close: () => void
}

export type TransactionFormSchema = zod.infer<typeof transactionFormSchema>
