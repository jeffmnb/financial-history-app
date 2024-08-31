import { RenderProps } from "./Render.types"

export const Render = {
  If: ({ children, isTrue }: RenderProps) => {
    if (!isTrue) return <></>
    return children
  },
}
