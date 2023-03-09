import { css } from "styled-components";

export type GeneralElementType = {
    w?: string;
    h?: string
    m?: number
    ma?: boolean
    mba?: boolean
    mla?: boolean
    mra?: boolean
    mta?: boolean
    mb?: number
    mt?: number
    ml?: number
    mr?: number
    mx?: number
    my?: number
    p?: number
    pb?: number
    pl?: number
    pr?: number
    pt?: number
    px?: number
    py?: number
}

export const GeneralElementCss = css<GeneralElementType>`
  ${(props) => props.w != undefined && `width: ${props.w};`}
  ${(props) => props.h != undefined && `height: ${props.h};`}
  ${(props) => props.m != undefined && `margin: ${props.m}px;`}
  ${(props) => props.mt != undefined && `margin-top: ${props.mt}px;`}
  ${(props) => props.ml != undefined && `margin-left: ${props.ml}px;`}
  ${(props) => props.mr != undefined && `margin-right: ${props.mr}px;`}
  ${(props) => props.mb != undefined && `margin-bottom: ${props.mb}px;`}
  ${(props) => props.mx !== undefined && `margin-left: ${props.mx}px; margin-right: ${props.mx}px;`}
  ${(props) => props.my !== undefined && `margin-top: ${props.my}px; margin-bottom: ${props.my}px;`}
  ${(props) => props.ma && `margin: auto;`}
  ${(props) => props.mta && `margin-top: auto;`}
  ${(props) => props.mba && `margin-bottom: auto;`}
  ${(props) => props.mla && `margin-left: auto;`}
  ${(props) => props.mra && `margin-right: auto;`}
  ${(props) => props.p != undefined && `padding: ${props.p}px;`}
  ${(props) => props.pt != undefined && `padding-top: ${props.pt}px;`}
  ${(props) => props.pl != undefined && `padding-left: ${props.pl}px;`}
  ${(props) => props.pr != undefined && `padding-right: ${props.pr}px;`}
  ${(props) => props.pb != undefined && `padding-bottom: ${props.pb}px;`}
  ${(props) => props.px !== undefined && `padding-left: ${props.px}px; padding-right: ${props.px}px;`}
  ${(props) => props.py !== undefined && `padding-top: ${props.py}px; padding-bottom: ${props.py}px;`}
`