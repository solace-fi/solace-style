export type ButtonType = {
    buttoncolor?: 'light' | 'dark' | 'info' |'success' | 'error' | 'warning' | 'warmgradient' | 'techygradient',
    ghost?: boolean,
    nohover?: boolean,
    noborder?: boolean,
    noround?: boolean,
    className?: string,
    hidden?: boolean,
    darkmode?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
