import { useDevice } from "../../hooks/useDevice"
import { Button } from "../Button"
import { Input } from "../Input"
import { S } from "./SearchForm.styles"
import { SearchFormProps } from "./SearchForm.types"

export const SearchForm = ({}: SearchFormProps) => {
  const { isMobile } = useDevice()
  return (
    <S.Container>
      <Input placeholder="Busque uma transação" />
      <Button variant="secondary" iconOnly={isMobile} text="Buscar" />
    </S.Container>
  )
}
