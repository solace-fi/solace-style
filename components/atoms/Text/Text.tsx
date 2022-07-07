import React from 'react'

export default function Text({
    children,
    wrap = 'normal',
    mont,
    textcolor = 'light',
    gradient = 'none',
    linethrough,
    underline,
    format = 'div',
    darkmode,
    className, 
}: {
    children: React.ReactNode,
    wrap?: 'normal' | 'newline' | 'break',
    mont?: boolean,
    textcolor?: 'light' | 'dark' | 'info' |'success' | 'error' | 'warning'
    gradient?: 'warmgradient' | 'techygradient' | 'none',
    linethrough?: boolean
    underline?: boolean,
    format?: 'div' | 'span' | 'p',
    darkmode?: boolean,
    className?: string
}) {

    const textColor = {
        'light': 'text-light ',
        'dark': 'text-dark ',
        'info': 'text-info' + (darkmode ? '-light ' : '-dark '),
        'success': 'text-success' + (darkmode ? '-light ' : '-dark '),
        'error': 'text-error' + (darkmode ? '-light ' : '-dark '),
        'warning': 'text-warning' + (darkmode ? '-light ' : '-dark '),
    }[textcolor]

    const classNames = [
        textColor,
        wrap == 'normal' ? 'break-normal ' : wrap == 'newline' ? 'break-words ' : 'break-all ',
        mont ? 'mont ' : 'sans ',
        gradient == 'warmgradient' ? 'bg-clip-text text-transparent bg-gradient-to-b from-warmGradientA to-warmGradientB ' : gradient == 'techygradient' ? 'bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB ' : '',
        linethrough ? 'text-linethrough ' : '',
        underline ? 'underline ' : '',
        (className ?? ''),
    ]
    
    return (
        <>
        {format == 'span' && <span className={classNames.join()}>{children}</span>}
        {format == 'p' && <p className={classNames.join()}>{children}</p>}
        {format == 'div' && <div className={classNames.join()}>{children}</div>}
        </>
    )
}