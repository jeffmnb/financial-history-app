import {
  getTransactionsByQueryService,
  getTransactionsService,
} from "../../services/transactions/transactions.service"
import { useTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { useEffect, useState } from "react"
import { TransactionsTypes } from "../../services/transactions/transactions.types"
import { FormSearchType } from "../../components/SearchForm/SearchForm.types"

export const useHomePage = () => {
  const {
    setTransactionsStore,
    setTransactionsDetails,
    transactions,
    transactionsDetails,
  } = useTransactionStore()

  const [showSkeleton, setShowSkeleton] = useState<boolean>(false)

  const getTransactions = () => {
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

  const saveTransactionsDetails = (transactions: TransactionsTypes[] | []) => {
    const summaryDetails = transactions?.reduce(
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

    setTransactionsDetails({
      allTransactions: transactions,
      inputDetails: { total: summaryDetails?.input! },
      outputDetails: { total: summaryDetails?.output! },
      totalDetails: { total: summaryDetails?.total! },
    })
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
