import { Render } from "../Render/Render"
import { S } from "./Button.styles"
import { ButtonTypes } from "./Button.types"

export const Button = ({ variant, text, fullWidth }: ButtonTypes) => {
  return (
    <S.Container variant={variant} fullWidth={fullWidth}>
      <Render.If isTrue={variant === "secondary"}>
        <S.SearchIcon />
      </Render.If>
      <S.Title>{text}</S.Title>
    </S.Container>
  )
}
