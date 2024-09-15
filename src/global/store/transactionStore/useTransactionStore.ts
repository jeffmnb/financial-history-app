import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { useTransactionStoreProps } from "./useTransactionStore.types"

const initialStoreValue = {
  transactions: [],
} as useTransactionStoreProps

const useTransactionStore = create<useTransactionStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialStoreValue,
        setTransactions: (newTransactions) => {
          const isExistentTransaction = newTransactions.some((newT) =>
            get().transactions.some((t) => t.id === newT.id),
          )
          if (!isExistentTransaction) {
            set(
              ({ transactions }) => ({
                transactions: [...transactions, ...newTransactions],
              }),
              false,
              "setTransactions",
            )
          }
        },
      }),
      {
        name: "@financial-app-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)

export const getTransactionStore = useTransactionStore.getState
