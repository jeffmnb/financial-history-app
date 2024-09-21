export type SummaryCardProps = {
  type: SummaryCardVariant
}

export enum SummaryCardVariant {
  INPUT = "inputs",
  OUTPUT = "outputs",
  CURRENT = "current",
}

export type SummaryDetails = {
  input: number
  output: number
  total: number
}
