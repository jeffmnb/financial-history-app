import {
  getTransactionsByQueryService,
  getTransactionsService,
} from "../../services/transactions/transactions.service"
import { useTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { useEffect, useState } from "react"
import { FormSearchType } from "../../components/SearchForm/SearchForm.types"
import { saveTransactionsDetails } from "../../utils/transaction"

export const useHomePage = () => {
  const { setTransactionsStore, transactions, transactionsDetails } =
    useTransactionStore()

  const [showSkeleton, setShowSkeleton] = useState<boolean>(false)

  const getTransactions = () => {
    setShowSkeleton(true)
    getTransactionsService()
      .then((res) => {
        setTransactionsStore(res)
        saveTransactionsDetails(res)
      })
      .catch((err) => {
        throw new Error(
          `Error on get transactions at: Home.logic with error: ${err}`,
        )
      })
      .finally(() => setShowSkeleton(false))
  }

  const handleSearchTransactions = async ({ query }: FormSearchType) => {
    setShowSkeleton(true)
    return getTransactionsByQueryService(query)
      .then((res) => {
        setTransactionsStore(res)
      })
      .catch((err) => {
        throw new Error(
          `Error on search transactions at: handleSearchTransactions. with error: ${err}`,
        )
      })
      .finally(() => setShowSkeleton(false))
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return {
    transactions,
    showSkeleton,
    transactionsDetails,
    setShowSkeleton,
    handleSearchTransactions,
  }
}
