import React, { createRef, useState } from "react"

import { S } from "./TransactionModal.styles"

import {
  TransactionFormSchema,
  TransactionModalProps,
} from "./TransactionModal.types"
import { TransactionSelector } from "../TransactionSelector/TransactionSelector"
import { ModalTemplate } from "../../global/components/ModalTemplate"
import { Input } from "../Input"
import { Button } from "../Button"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { TransactionsTypes } from "../../services/transactions/transactions.types"
import { createTransactionService } from "../../services/transactions/transactions.service"
import { Select } from "../Select"
import { useTransactionStore } from "../../global/store/transactionStore/useTransactionStore"
import { saveTransactionsDetails } from "../../utils/transaction"

const transactionModalRef = createRef<TransactionModalProps>()

export const openTransactionModal = () => transactionModalRef.current?.open()

export const closeTransactionModal = () => transactionModalRef.current?.close()

export const transactionFormSchema = zod.object({
  description: zod.string().min(2),
  value: zod.number().min(0),
  category: zod.enum([
    "Alimentação",
    "Combustível",
    "Investimentos",
    "Lazer",
    "Outros",
  ]),
  type: zod.enum(["input", "output"]),
})

export const TransactionModal: React.FC = () => {
  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    control,
    reset: resetForm,
  } = useForm<TransactionFormSchema>({
    defaultValues: {
      category: "Alimentação",
      description: "",
      type: "input",
      value: 0,
    },
    resolver: zodResolver(transactionFormSchema),
  })

  const { setTransactionsStore, transactions } = useTransactionStore()

  const [selectedTransactionType, setSelectedTransactionType] = useState<
    "input" | "output" | null
  >(null)

  const handleSelectTransactionType = (transactionType: "input" | "output") => {
    setSelectedTransactionType(transactionType)
  }

  const handleCreateNewTransaction = (formData: TransactionFormSchema) => {
    const { category, description, type, value } = formData
    const payload: TransactionsTypes = {
      id: parseInt(crypto.randomUUID()),
      title: description,
      date: new Date().toISOString(),
      category: category,
      transaction: {
        status: type,
        value: value,
      },
    }
    createTransactionService(payload)?.then((transactionCreated) => {
      const transactionsUpdated = [...transactions, transactionCreated]
      setTransactionsStore(transactionsUpdated)
      saveTransactionsDetails(transactionsUpdated)
      resetForm()
      closeTransactionModal()
    })
  }

  return (
    <ModalTemplate
      ref={transactionModalRef}
      isBottomSheetEnabled
      withCloseButton
      title="Nova transacao"
    >
      <S.Container>
        <S.InputsWrapper>
          <Controller
            control={control}
            name="description"
            render={({ field }) => {
              return (
                <Input
                  value={field.value || ""}
                  onChange={({ target }) =>
                    field.onChange((target as HTMLInputElement).value)
                  }
                  placeholder="Descrição"
                />
              )
            }}
          />
          <Controller
            control={control}
            name="value"
            render={({ field }) => {
              return (
                <Input
                  value={field.value || ""}
                  onChange={({ target }) =>
                    field.onChange(parseInt((target as HTMLInputElement).value))
                  }
                  placeholder="Preço"
                />
              )
            }}
          />
          <Controller
            control={control}
            name="category"
            render={({ field }) => {
              return (
                <Select
                  value={field.value || ""}
                  onChange={({ target }) =>
                    field.onChange((target as HTMLInputElement).value)
                  }
                />
              )
            }}
          />
        </S.InputsWrapper>

        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <S.SelectorWrapper>
                <TransactionSelector
                  transactionType="input"
                  isSelected={selectedTransactionType === "input"}
                  onClick={() => {
                    field.onChange("input")
                    handleSelectTransactionType("input")
                  }}
                />
                <TransactionSelector
                  onChange={() => field.onChange("output")}
                  transactionType="output"
                  isSelected={selectedTransactionType === "output"}
                  onClick={() => {
                    field.onChange("output")
                    handleSelectTransactionType("output")
                  }}
                />
              </S.SelectorWrapper>
            )
          }}
        />

        <Button
          onClick={handleSubmit(handleCreateNewTransaction)}
          variant="primary"
          text="Cadastrar"
          fullWidth
          disabled={!isValid || isSubmitting}
        />
      </S.Container>
    </ModalTemplate>
  )
}
