import { styled } from "styled-components"
import { SummaryCardProps, SummaryCardVariant } from "./SummaryCard.types"
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
  IconProps,
} from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/themes/default"
import { caseDevice } from "../../styles/GlobalStyle"

const BaseIcon = ({
  type,
  size,
}: Pick<IconProps, "size"> & SummaryCardProps) => {
  if (type === SummaryCardVariant.INPUT)
    return (
      <ArrowCircleUp color={defaultTheme.colors["green-300"]} size={size} />
    )
  if (type === SummaryCardVariant.OUTPUT)
    return (
      <ArrowCircleDown color={defaultTheme.colors["red-300"]} size={size} />
    )
  return <CurrencyDollar color={defaultTheme.colors.white} size={size} />
}

export const S = {
  Container: styled.div<SummaryCardProps>`
    min-width: 22rem;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 1.7rem 2rem;
    border-radius: 0.375rem;
    background-color: ${({ theme, type }) =>
      type === "current"
        ? theme.colors["green-700"]
        : theme.colors["gray-600"]};

    ${caseDevice("mobile")} {
      min-width: 17.5rem;
    }

    ${caseDevice("tablet")} {
      min-width: 23.5rem;
    }
  `,
  StatusArea: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Status: styled.p``,
  StatusIcon: styled(BaseIcon).attrs({ size: 32 })``,
  Value: styled.p<SummaryCardProps>`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-top: ${({ type }) =>
      type === SummaryCardVariant.CURRENT ? "0" : "0.8rem"};

    ${caseDevice("mobile")} {
      font-size: 1.5rem;
    }
  `,
  LastTimeAction: styled.p<SummaryCardProps>`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["gray-500"]};
    margin-top: 0.4rem;
    color: ${({ type, theme }) =>
      type === SummaryCardVariant.CURRENT && theme.colors.white};
    opacity: ${({ type }) => type === SummaryCardVariant.CURRENT && "0.7"};
  `,
}
