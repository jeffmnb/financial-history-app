import { InputHTMLAttributes } from "react"

export type InputProps = {
  messageError?: string
} & InputHTMLAttributes<HTMLElement>
