import { FlexType } from "./types";
import { GeneralElementCss, GeneralElementType } from "../../types";
import styled, { css } from "styled-components";

export const Flex = styled.div<FlexType & GeneralElementType>`
  ${GeneralElementCss}

  ${({ col })                     => col                         ? css`flex-direction: column;`                        : ""}
  ${({ row })                     => row                         ? css`flex-direction: row;`                           : ""}
  ${({ colReverse })              => colReverse                  ? css`flex-direction: column-reverse;`                : ""}
  ${({ rowReverse })              => rowReverse                  ? css`flex-direction: row-reverse;`                   : ""}

  ${({ gap })                     => gap           !== undefined ? css`gap: ${gap}px;`                                 : ""}

  ${({ wrapped })                 => wrapped                     ? css`flex-wrap: wrap;`                               : ""}
  ${({ noWrap })                  => noWrap                      ? css`flex-wrap: nowrap;`                             : ""}
  ${({ wrapReverse })             => wrapReverse                 ? css`flex-wrap: wrap-reverse;`                       : ""}

  ${({ justifyItemsStretch })     => justifyItemsStretch         ? css`justify-items: stretch;`                        : ""}
  ${({ justifyItemsStart })       => justifyItemsStart           ? css`justify-items: flex-start;`                     : ""}
  ${({ justifyItemsCenter })      => justifyItemsCenter          ? css`justify-items: center;`                         : ""}
  ${({ justifyItemsEnd })         => justifyItemsEnd             ? css`justify-items: flex-end;`                       : ""}

  ${({ alignItemsStretch })       => alignItemsStretch           ? css`align-items: stretch;`                          : ""}
  ${({ alignItemsStart })         => alignItemsStart             ? css`align-items: flex-start;`                       : ""}
  ${({ alignItemsCenter })        => alignItemsCenter            ? css`align-items: center;`                           : ""}
  ${({ alignItemsEnd })           => alignItemsEnd               ? css`align-items: flex-end;`                         : ""}
  ${({ alignItemsBaseline })      => alignItemsBaseline          ? css`align-items: baseline;`                         : ""}

  ${({ justifyContentBetween })   => justifyContentBetween       ? css`justify-content: space-between;`                : ""}
  ${({ justifyContentAround })    => justifyContentAround        ? css`justify-content: space-around;`                 : ""}
  ${({ justifyContentEvenly })    => justifyContentEvenly        ? css`justify-content: space-evenly;`                 : ""}
  ${({ justifyContentStart })     => justifyContentStart         ? css`justify-content: flex-start;`                   : ""}
  ${({ justifyContentCenter })    => justifyContentCenter        ? css`justify-content: center;`                       : ""}
  ${({ justifyContentEnd })       => justifyContentEnd           ? css`justify-content: flex-end;`                     : ""}

  ${({ alignContentBetween })     => alignContentBetween         ? css`align-content: space-between;`                  : ""}
  ${({ alignContentAround })      => alignContentAround          ? css`align-content: space-around;`                   : ""}
  ${({ alignContentEvenly })      => alignContentEvenly          ? css`align-content: space-evenly;`                   : ""}
  ${({ alignContentStart })       => alignContentStart           ? css`align-content: flex-start;`                     : ""}
  ${({ alignContentCenter })      => alignContentCenter          ? css`align-content: center;`                         : ""}
  ${({ alignContentEnd })         => alignContentEnd             ? css`align-content: flex-end;`                       : ""}
`