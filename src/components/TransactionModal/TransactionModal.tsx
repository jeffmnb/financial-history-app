import React, { createRef } from "react"

import { S } from "./TransactionModal.styles"

import { TransactionModalProps } from "./TransactionModal.types"
import { TransactionSelector } from "../TransactionSelector/TransactionSelector"
import { ModalTemplate } from "../../global/components/ModalTemplate"
import { Input } from "../Input"
import { Button } from "../Button"

const transactionModalRef = createRef<TransactionModalProps>()

export const openTransactionModal = () => transactionModalRef.current?.open()

export const closeTransactionModal = () => transactionModalRef.current?.close()

export const TransactionModal: React.FC = () => {
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
          <TransactionSelector transactionType="input" />
          <TransactionSelector transactionType="output" />
        </S.SelectorWrapper>

        <Button variant="primary" text="Cadastrar" fullWidth />
      </S.Container>
    </ModalTemplate>
  )
}
