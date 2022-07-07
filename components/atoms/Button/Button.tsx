import React from "react";

export default function Button({
    className, 
    children,
    buttoncolor = 'dark',
    ghost,
    nohover,
    noborder,
    noround,
    darkmode,
    onClick,
}: {
    buttoncolor?: 'light' | 'dark' | 'info' |'success' | 'error' | 'warning' | 'warmgradient' | 'techygradient',
    ghost?: boolean,
    nohover?: boolean,
    noborder?: boolean,
    noround?: boolean,
    className?: string,
    darkmode?: boolean,
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {

    const primaryColor = {
        'light': 'bg-light text-dark',
        'dark': 'bg-dark text-light',
        'info': 'bg-info' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'success': 'bg-success' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'error': 'bg-error' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'warning': 'bg-warning' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'warmgradient': 'bg-gradient-to-br from-warmGradientA to-warmGradientB text-light ',
        'techygradient': 'bg-gradient-to-br from-techyGradientA to-techyGradientB text-light ',
    }[buttoncolor]

    const ghostColor = {
        'light': 'outline-light text-light',
        'dark': 'outline-dark text-dark',
        'info': 'outline-info' + (darkmode ? '-light ' : '-dark ') + 'text-info ',
        'success': 'outline-success' + (darkmode ? '-light ' : '-dark ') + 'text-success ',
        'error': 'outline-error' + (darkmode ? '-light ' : '-dark ') + 'text-error ',
        'warning': 'outline-warning' + (darkmode ? '-light ' : '-dark ') + 'text-warning ',
        'warmgradient': 'outline-gradient-to-br from-warmGradientA to-warmGradientB ',
        'techygradient': 'outline-gradient-to-br from-techyGradientA to-techyGradientB ',
    }[buttoncolor]

    const ghostColorHover = {
        'light': 'hover:bg-light hover:text-dark',
        'dark': 'hover:bg-dark hover:text-light',
        'info': 'hover:bg-info' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'success': 'hover:bg-success' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'error': 'hover:bg-error' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'warning': 'hover:bg-warning' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
        'warmgradient': 'hover:bg-gradient-to-br hover:from-warmGradientA hover:to-warmGradientB hover:text-light',
        'techygradient': 'hover:bg-gradient-to-br hover:from-techyGradientA hover:to-techyGradientB hover:text-light',
    }[buttoncolor]

    const classNames = [
        ghost ? ghostColor + (noborder ? 'outline-0 ' : '' ) : primaryColor + 'outline-0 ',
        nohover ? '' : ghost ? ghostColorHover : 'hover: opacity-80',
        noround ? 'rounded-none ' : 'rounded-lg ',
        (className ?? ''),
    ]

    return (<button className={classNames.join()} onClick={onClick ?? undefined}>{children}</button>)
}