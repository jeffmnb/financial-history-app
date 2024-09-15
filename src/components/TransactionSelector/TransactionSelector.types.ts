import { IconProps } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react"

export type TransactionSelectorProps = {
  transactionType: "input" | "output"
} & IconProps &
  ButtonHTMLAttributes<HTMLElement>
