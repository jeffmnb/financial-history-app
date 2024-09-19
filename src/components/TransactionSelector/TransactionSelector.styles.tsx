import { styled } from "styled-components"
import { TransactionSelectorProps } from "./TransactionSelector.types"
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/themes/default"

const BaseIcon = ({ transactionType }: TransactionSelectorProps) => {
  if (transactionType == "input") {
    return (
      <ArrowCircleUp color={defaultTheme.colors["green-300"]} size={"1.6rem"} />
    )
  }
  return (
    <ArrowCircleDown color={defaultTheme.colors["red-300"]} size={"1.55rem"} />
  )
}

export const S = {
  Container: styled.button.withConfig({
    shouldForwardProp: (prop) =>
      prop !== "transactionType" && prop !== "isSelected",
  })<TransactionSelectorProps & { isSelected: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme, isSelected, transactionType }) =>
      isSelected
        ? transactionType === "input"
          ? theme.colors["green-700"]
          : theme.colors["red-400"]
        : theme.colors["gray-700"]};
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 0;
    box-shadow: none;
    cursor: pointer;

    &:not(:focus):hover {
      background-color: ${({ theme, isSelected }) =>
        !isSelected && theme.colors["gray-600"]};
      transition: background-color 0.2s;
    }
  `,
  Icon: styled(BaseIcon)``,
  Title: styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
  `,
}
