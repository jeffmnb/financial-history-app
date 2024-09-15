import React, { createRef } from "react"

import { S } from "./TransactionModal.styles"

import { TransactionModalProps } from "./TransactionModal.types"
import { TransactionSelector } from "../TransactionSelector/TransactionSelector"
import { ModalTemplate } from "../../global/components/ModalTemplate"
import { Input } from "../Input"
import { Button } from "../Button"
import { TransactionSelectorProps } from "../TransactionSelector/TransactionSelector.types"

const transactionModalRef = createRef<TransactionModalProps>()

export const openTransactionModal = () => transactionModalRef.current?.open()

export const closeTransactionModal = () => transactionModalRef.current?.close()

export const TransactionModal: React.FC = () => {
  const handleSelectTransactionType = ({
    transactionType,
  }: TransactionSelectorProps) => {
    console.log(transactionType)
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
          <Input placeholder="Descrição" />
          <Input placeholder="Preço" />
          <Input placeholder="Categoria" />
        </S.InputsWrapper>

        <S.SelectorWrapper>
          <TransactionSelector
            transactionType="input"
            onClick={() =>
              handleSelectTransactionType({ transactionType: "input" })
            }
          />
          <TransactionSelector
            transactionType="output"
            onClick={() =>
              handleSelectTransactionType({ transactionType: "output" })
            }
          />
        </S.SelectorWrapper>

        <Button variant="primary" text="Cadastrar" fullWidth />
      </S.Container>
    </ModalTemplate>
  )
}
