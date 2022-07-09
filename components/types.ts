export type GeneralElementType = {
    w?: string;
    h?: string
    m?: number
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
    children: React.ReactNode
}

export type ButtonType = {
    buttoncolor?: 'light' | 'dark' | 'info' |'success' | 'error' | 'warning' | 'warmgradient' | 'techygradient',
    ghost?: boolean,
    nohover?: boolean,
    noborder?: boolean,
    noround?: boolean,
    className?: string,
    darkmode?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type FlexType = {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse', /** direction of flex item */
    justifycontent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly', /** flex and grid items are positioned along a container's main axis */
    aligncontent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly', /** how rows are positioned in multi-row flex and grid containers */
    justifyitems?: 'start' | 'end' | 'center' | 'stretch', /** how grid items are aligned along their inline axis */
    alignitems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline', /** how flex and grid items are positioned along a container's cross axis */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse', /** how flex items wrap */
    gap?: number,
    className?: string,
}