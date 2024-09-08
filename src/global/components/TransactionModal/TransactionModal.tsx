import React, { createRef } from "react"

import { S } from "./TransactionModal.styles"
import { ModalTemplate } from "../ModalTemplate"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { TransactionModalProps } from "./TransactionModal.types"

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
        <Button variant="primary" text="Cadastrar" fullWidth />
      </S.Container>
    </ModalTemplate>
  )
}
