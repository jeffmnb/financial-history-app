import { optionsToCategoryTransaction } from "../../utils/app"
import { S } from "./Select.styles"
import { SelectProps } from "./Select.types"

export const Select = (props: SelectProps) => {
  return (
    <S.Container {...props}>
      {optionsToCategoryTransaction.map((option) => (
        <S.Option key={option}>{option}</S.Option>
      ))}
    </S.Container>
  )
}
