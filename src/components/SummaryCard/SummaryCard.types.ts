export type SummaryCardProps = {
  type: SummaryCardVariant
  value?: string
}

export enum SummaryCardVariant {
  INPUT = "inputs",
  OUTPUT = "outputs",
  CURRENT = "current",
}
