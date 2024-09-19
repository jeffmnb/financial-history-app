export type TransactionCardProps = {
  id: number
  title: string
  transaction: TransactionValue
  category: string
  date: string
}

export type TransactionValue = {
  value: number
  status: "input" | "output"
}

export enum CategoryValue {
  FOOD = "Alimentação",
  FUEL = "Combustível",
  INVESTMENTS = "Investimentos",
  LEISURE = "Lazer",
  OTHER = "Outros",
}
