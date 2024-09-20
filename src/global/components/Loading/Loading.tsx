import React from "react"
import Lottie from "lottie-react"
import loadingLottie from "../../../assets/loading-lottie.json"
import { S } from "./Loading.styles"

export const Loading: React.FC = () => {
  return (
    <S.Container>
      <Lottie autoPlay loop animationData={loadingLottie} />
    </S.Container>
  )
}
