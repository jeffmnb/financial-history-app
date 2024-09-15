export type SummaryCardProps = {
  type: SummaryCardVariant
  value?: number
}

export enum SummaryCardVariant {
  INPUT = "inputs",
  OUTPUT = "outputs",
  CURRENT = "current",
}
