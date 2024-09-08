import React, { useImperativeHandle, useState } from "react"
import { ModalTemplateProps, ModalTemplateRef } from "./ModalTemplate.types"
import { useDevice } from "../../../hooks/useDevice"
import { Render } from "../../../components/Render/Render"
import { S } from "./ModalTemplate.styles"
import "react-spring-bottom-sheet/dist/style.css"
import "./BottomSheet.css"

export const ModalTemplate = React.forwardRef<
  ModalTemplateRef,
  ModalTemplateProps
>(
  (
    {
      children,
      title,
      footerComponent: Footer,
      fullSize,
      isBottomSheetEnabled = false,
      onDismiss,
      withCloseButton,
    },
    ref,
  ) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const { isMobile } = useDevice()

    const openModal = () => setModalVisible(true)

    const closeModal = () => {
      setModalVisible(false)
      onDismiss?.()
    }

    useImperativeHandle(ref, () => ({
      open: openModal,
      close: closeModal,
    }))

    if (fullSize) return children

    return (
      <>
        <Render.If isTrue={isMobile && isBottomSheetEnabled}>
          <S.BottomSheet
            open={isModalVisible}
            onDismiss={closeModal}
            defaultSnap={({ maxHeight }) => maxHeight}
          >
            <S.Container>
              <S.HeaderWrapper>
                <S.Title>{title}</S.Title>
                {withCloseButton && (
                  <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                )}
              </S.HeaderWrapper>
              <S.ContentWrapper>{children}</S.ContentWrapper>
              {Footer}
            </S.Container>
          </S.BottomSheet>
        </Render.If>

        <Render.If
          isTrue={
            (isModalVisible && !isBottomSheetEnabled) ||
            (isModalVisible && !isMobile)
          }
        >
          <S.Overlay onClick={closeModal}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
              <S.Container>
                <S.HeaderWrapper>
                  <S.Title>{title}</S.Title>
                  {withCloseButton && (
                    <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                  )}
                </S.HeaderWrapper>
                <S.ContentWrapper>{children}</S.ContentWrapper>
                {Footer}
              </S.Container>
            </S.Modal>
          </S.Overlay>
        </Render.If>
      </>
    )
  },
)

ModalTemplate.displayName = "ModalTemplate"
