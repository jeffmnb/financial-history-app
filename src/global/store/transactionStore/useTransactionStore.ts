import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { useTransactionStoreProps } from "./useTransactionStore.types"

const initialStoreValue = {
  transactions: [],
} as useTransactionStoreProps

export const useTransactionStore = create<useTransactionStoreProps>()(
  devtools(
    persist(
      (set) => ({
        ...initialStoreValue,
        setTransactionsStore: (transactions) => {
          set(
            () => ({
              transactions: transactions,
            }),
            false,
            "setAllTransactions",
          )
        },
        setTransactionsDetails: (transactionsDetails) => {
          set(
            () => ({
              transactionsDetails: transactionsDetails,
            }),
            false,
            "setTransactionsDetails",
          )
        },
      }),
      {
        name: "@financial-app-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      trace: true,
    },
  ),
)

export const getTransactionStore = useTransactionStore.getState
