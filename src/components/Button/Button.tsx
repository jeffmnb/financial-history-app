import { Render } from "../Render/Render"
import { S } from "./Button.styles"
import { ButtonProps } from "./Button.types"

export const Button = ({
  variant,
  text,
  fullWidth,
  iconOnly,
  ...props
}: ButtonProps) => {
  return (
    <S.Container {...props} variant={variant} fullWidth={fullWidth}>
      <Render.If isTrue={variant === "secondary"}>
        <S.SearchIcon />
      </Render.If>
      <Render.If isTrue={!iconOnly}>
        <S.Title>{text}</S.Title>
      </Render.If>
    </S.Container>
  )
}
