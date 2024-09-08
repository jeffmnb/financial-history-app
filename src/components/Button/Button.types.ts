import React, { ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  variant: "primary" | "secondary"
  text?: string | React.ReactNode
  fullWidth?: boolean
  iconOnly?: boolean
} & ButtonHTMLAttributes<HTMLElement>
