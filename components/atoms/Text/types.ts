import { GeneralElementType } from "../../types"

export type TextAlignType = {
    textAlignCenter?: boolean
    textAlignLeft?: boolean
    textAlignRight?: boolean
}

export type TextFontType = {
    /** `48px` */ big1?: boolean
    /** `36px` */ big2?: boolean
    /** `24px` */ big3?: boolean
    /** `width < 900px` ? `24px` : `22px` */ t1?: boolean
    /** `width < 900px` ? `20px` : `18px` */ t2?: boolean
    /** `width < 900px` ? `18px` : `16px` */ t2_5?: boolean
    /** `width < 900px` ? `16px` : `14px` */ t3?: boolean
    /** `width < 900px` ? `14px` : `12px` */ t4?: boolean
    /** `font-size: 24px`, `line-height: 20px` */ t1s?: boolean
    /** `font-size: 20px`, `line-height: 18px` */ t2s?: boolean
    /** `font-size: 18px`, `line-height: 16px` */ t2_5s?: boolean
    /** `font-size: 16px` */ t3s?: boolean
    /** `14px` */ t4s?: boolean
    /** `font-size: 12px`, `line-height: 14px` */ t5s?: boolean
    /** `width < 900px` ? `12px` : `10px` */ t6?: boolean
    /** `font-size: 10px`, `line-height: 12px` */ t6s?: boolean
    /** `width < 900px` ? `10px` : `8px` */ t7?: boolean
    /** `font-size: 10px` */ t7s?: boolean
}

export interface TextStyleType extends GeneralElementType {
    nowrap?: boolean
    mont?: boolean
    light?: boolean
    dark?: boolean
    info?: boolean
    success?: boolean
    error?: boolean
    warning?: boolean
    techygradient?: boolean
    warmgradient?: boolean
    regular?: boolean
    medium?: boolean
    semibold?: boolean
    bold?: boolean
    extrabold?: boolean
    italics?: boolean
    underline?: boolean
    darkmode?: boolean
}

export interface GeneralTextType extends TextFontType, TextAlignType, TextStyleType {}
