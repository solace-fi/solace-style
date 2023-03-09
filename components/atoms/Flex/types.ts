export type FlexType = {
    row?: boolean
    col?: boolean
    rowReverse?: boolean
    colReverse?: boolean

    gap?: number,

    wrapped?: boolean
    noWrap?: boolean
    wrapReverse?: boolean

    /** how grid items are aligned along their inline axis */
    justifyItemsStart?: boolean
    justifyItemsEnd?: boolean
    justifyItemsCenter?: boolean
    justifyItemsStretch?: boolean

    /** how flex and grid items are positioned along a container's cross axis */
    alignItemsStart?: boolean
    alignItemsEnd?: boolean
    alignItemsCenter?: boolean
    alignItemsBaseline?: boolean
    alignItemsStretch?: boolean

    /** flex and grid items are positioned along a container's main axis */
    justifyContentStart?: boolean
    justifyContentEnd?: boolean
    justifyContentCenter?: boolean
    justifyContentBetween?: boolean
    justifyContentAround?: boolean
    justifyContentEvenly?: boolean

    /** how rows are positioned in multi-row flex and grid containers */
    alignContentStart?: boolean
    alignContentEnd?: boolean
    alignContentCenter?: boolean
    alignContentBetween?: boolean
    alignContentAround?: boolean
    alignContentEvenly?: boolean
}