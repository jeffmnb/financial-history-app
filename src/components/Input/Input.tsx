import { S } from "./Input.styles"
import { InputProps } from "./Input.types"

export const Input = (props: InputProps) => {
  return (
    <S.Wrapper>
      <S.Container {...props} />
      <S.MessageError>{props.messageError}</S.MessageError>
    </S.Wrapper>
  )
}
