import React from "react"

export type ModalTemplateRef = {
  open: () => void
  close: () => void
}

export type ModalTemplateProps = {
  withCloseButton?: boolean
  wrapContent?: boolean
  fullSize?: boolean
  isBottomSheetEnabled?: boolean
  onDismiss?: () => void
  children?: React.ReactNode
  title?: string
  footerComponent?: React.ReactNode
}
