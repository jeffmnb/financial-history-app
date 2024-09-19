export type SummaryCardProps = {
  type: SummaryCardVariant
}

export enum SummaryCardVariant {
  INPUT = "inputs",
  OUTPUT = "outputs",
  CURRENT = "current",
}
