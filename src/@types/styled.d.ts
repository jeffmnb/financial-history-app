import "styled-components"
import { defaultTheme } from "../styles/themes/default"

type DefaultThemeTypes = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeTypes {}
}
