import React from 'react'

export default function Text({
    children,
    wrap = 'normal',
    mont,
    textcolor = 'dark',
    linethrough,
    underline,
    format = 'span',
    darkmode,
    className, 
}: {
    children: React.ReactNode,
    wrap?: 'normal' | 'newline' | 'break',
    mont?: boolean,
    textcolor?: 'light' | 'dark' | 'info' |'success' | 'error' | 'warning' | 'warmgradient' | 'techygradient'
    linethrough?: boolean
    underline?: boolean,
    format?: 'div' | 'span' | 'p',
    darkmode?: boolean,
    className?: string
}) {

    const textColor = {
        'light': 'text-light',
        'dark': 'text-dark',
        'info': darkmode ? 'text-info-light ' : 'text-info-dark',
        'success': darkmode ? 'text-success-light ' : 'text-success-dark',
        'error': darkmode ? 'text-error-light ' : 'text-error-dark',
        'warning': darkmode ? 'text-warning-light ' : 'text-warning-dark',
        'warmgradient': 'bg-clip-text text-transparent bg-gradient-to-b from-warmGradientA to-warmGradientB',
        'techygradient': 'bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB',
    }[textcolor]

    const classNames = [
        textColor,
        wrap == 'normal' ? 'break-normal' : wrap == 'newline' ? 'break-words' : 'break-all',
        mont ? 'mont' : 'sans'
    ]

    if (linethrough) classNames.push('line-through')
    if (underline) classNames.push('underline')
    if (className) classNames.push(className)
    
    return (
        <>
        {format == 'span' && <span className={classNames.join(' ')}>{children}</span>}
        {format == 'p' && <p className={classNames.join(' ')}>{children}</p>}
        {format == 'div' && <div className={classNames.join(' ')}>{children}</div>}
        </>
    )
}