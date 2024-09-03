export type TransactionCardProps = {
  title: string
  transaction: TransactionValue
  category: CategoryValue
  date: string
}

export type TransactionValue = {
  value: string
  status: "input" | "output"
}

export enum CategoryValue {
  FOOD = "Alimentação",
  FUEL = "Combustível",
  INVESTMENTS = "Investimentos",
  LEISURE = "Lazer",
  OTHER = "Outros",
}
