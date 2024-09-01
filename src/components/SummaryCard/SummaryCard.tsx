import { S } from "./SummaryCard.styles"
import { SummaryCardProps, SummaryCardVariant } from "./SummaryCard.types"

export const SummaryCard = ({ type, value }: SummaryCardProps) => {
  const getStatusTitle = () => {
    switch (type) {
      case SummaryCardVariant.INPUT:
        return "Entradas"
      case SummaryCardVariant.OUTPUT:
        return "Saídas"
      default:
        return "Em conta"
    }
  }
  return (
    <S.Container type={type}>
      <S.StatusArea>
        <S.Status>{getStatusTitle()}</S.Status>
        <S.StatusIcon type={type} />
      </S.StatusArea>
      <S.Value>R$ {value}</S.Value>
      <S.LastTimeAction>Última entrada em 13 de abril</S.LastTimeAction>
    </S.Container>
  )
}
