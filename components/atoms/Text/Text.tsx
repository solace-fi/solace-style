import styled, { css } from 'styled-components'
import { GeneralElementCss } from '../../types'
import { TextAlignType, TextFontType, GeneralTextType, TextStyleType } from './types'


export const Text1Css = css`
  font-size: 24px;

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }
`

export const Text2Css = css`
  font-size: 20px;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`

export const Text2_5Css = css`
  font-size: 18px;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`

export const Text3Css = css`
  font-size: 16px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`

export const Text1StaticCss = css`
  font-size: 24px;
  line-height: 24px;
`

const Text2StaticCss = css`
  font-size: 20px;
  line-height: 18px;
`

const Text2_5StaticCss = css`
  font-size: 18px;
  line-height: 16px;
`
export const Text3StaticCss = css`
  font-size: 16px;
  /* line-height: 14.4px; */
`

export const Text4Css = css`
  font-size: 14px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`

export const Text4StaticCss = css`
  font-size: 14px;
`

export const Text5StaticCss = css`
  font-size: 12px;
  line-height: 1.5;
`

export const Text6StaticCss = css`
  font-size: 10px;
  line-height: 12px;
`

export const Text6Css = css`
  font-size: 12px;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
`

export const Text7Css = css`
  font-size: 10px;

  @media screen and (max-width: 900px) {
    font-size: 8px;
  }
`

export const Text7StaticCss = css`
  font-size: 10px;
`

export const BigSize1Css = css`
  font-size: 48px;
`

export const BigSize2Css = css`
  font-size: 36px;
`

export const BigSize3Css = css`
  font-size: 24px;
`


export const TextFontCss = css<TextFontType>`
  ${(props) => {
    if (props.t1) return Text1Css
    if (props.t2) return Text2Css
    if (props.t2_5) return Text2_5Css
    if (props.t3) return Text3Css
    if (props.t4) return Text4Css
    if (props.t1s) return Text1StaticCss
    if (props.t2s) return Text2StaticCss
    if (props.t2_5s) return Text2_5StaticCss
    if (props.t3s) return Text3StaticCss
    if (props.t4s) return Text4StaticCss
    if (props.t5s) return Text5StaticCss
    if (props.t6) return Text6Css
    if (props.t6s) return Text6StaticCss
    if (props.t7) return Text7Css
    if (props.t7s) return Text7StaticCss
    if (props.big1) return BigSize1Css
    if (props.big2) return BigSize2Css
    if (props.big3) return BigSize3Css
    return css`
      font-size: inherit;
    `
  }}
`

export const TextAlignCss = css<TextAlignType>`
  ${(props) => props.textAlignCenter && `text-align: center;`}
  ${(props) => props.textAlignLeft && `text-align: left;`}
  ${(props) => props.textAlignRight && `text-align: right;`}
`

export const TextStyleCss = css<TextStyleType>`
  ${(props) => props.nowrap && `white-space: nowrap;`}
  ${(props) => props.mont && `font-family: 'Montserrat', sans-serif;`}
  ${(props) => props.medium && 'font-weight: 500;'}
  ${(props) => props.semibold && 'font-weight: 600;'}
  ${(props) => {
    if (props.bold && props.mont)
      return css`
        font-weight: 700;
        letter-spacing: 0.5px;
      `
    if (props.bold)
      return css`
        font-weight: 600;
      `
  }}
  color: rgb(125, 125, 125);
  ${(props) => props.regular && 'font-weight: 400;'}
  ${(props) => props.extrabold && 'font-weight: 700;'}
  ${(props) => props.italics && 'font-style: italic;'}
  ${(props) => props.underline && 'text-decoration: underline;'}
  ${(props) => props.info && `color: ${props.darkmode ? '#6ec3ff' : 'rgb(95, 93, 249)'};`}
  ${(props) => props.success && `color: ${props.darkmode ? 'rgb(74, 222, 128)' : 'rgb(40, 167, 69)'};`}
  ${(props) => props.error && `color: ${props.darkmode ? 'rgb(240, 77, 66)' : 'rgb(255, 12, 28)'};`}
  ${(props) => props.warning && `color: ${props.darkmode ? 'rgb(245, 221, 83)' : 'rgb(187, 136, 0)'};`}
  ${(props) => props.light && `color: rgb(250, 250, 250);`}
  ${(props) => props.dark && `color: rgb(125, 125, 125);`}
  ${(props) =>
    props.techygradient &&
    css`
      background-image: linear-gradient(
        to bottom,
        rgb(212, 120, 216),
        rgb(95, 93, 249)
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-weight: ${props.extrabold ? 700 : 600} !important;
    `}
  ${(props) =>
    props.warmgradient &&
    css`
      background-image: linear-gradient(
        to bottom right,
        rgba(243, 211, 126, 1),
        rgba(240, 77, 66, 1)
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-weight: ${props.extrabold ? 700 : 600} !important;
    `}
  ${GeneralElementCss}
  transition: all 200ms ease;
`

export const GeneralTextCss = css<GeneralTextType>`
  ${TextFontCss}
  ${TextAlignCss}
  ${TextStyleCss}
`

export const Text = styled.div<GeneralTextType>`
  ${GeneralTextCss}
  ${GeneralElementCss}
`

export const TextSpan = styled.span<GeneralTextType>`
  ${GeneralTextCss}
  ${GeneralElementCss}
`

export const TextParagraph = styled.p<GeneralTextType>`
  ${GeneralTextCss}
  ${GeneralElementCss}
`
