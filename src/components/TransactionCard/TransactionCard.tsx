import { useDevice } from "../../hooks/useDevice"
import { Render } from "../Render/Render"
import { S } from "./TransactionCard.styles"
import { TransactionCardProps } from "./TransactionCard.types"
import { format } from "date-fns"

export const TransactionCard = ({
  title,
  transaction,
  category,
  date,
}: TransactionCardProps) => {
  const { status, value } = transaction
  const isOutput = status === "output"
  const { isMobile } = useDevice()
  return (
    <S.Container>
      <S.Spacer>
        <S.Title>{title}</S.Title>
        <S.Value status={status}>
          <Render.If isTrue={isOutput}>- R$ {value}</Render.If>
          <Render.If isTrue={!isOutput}>R$ {value}</Render.If>
        </S.Value>
      </S.Spacer>

      <S.Spacer>
        <S.Wrapper>
          <Render.If isTrue={isMobile}>
            <S.TagSimple />
          </Render.If>
          <S.Category>{category}</S.Category>
        </S.Wrapper>

        <S.Wrapper>
          <Render.If isTrue={isMobile}>
            <S.CalendarBlank />
          </Render.If>
          <S.Date>{format(date, "dd/MM/yyyy")}</S.Date>
        </S.Wrapper>
      </S.Spacer>
    </S.Container>
  )
}
