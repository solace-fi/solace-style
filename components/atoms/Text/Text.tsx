import classNames from 'classnames'
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

    return <VariableElement format={format} className={classNames({
        'text-light': textcolor === 'light',
        'text-dark': textcolor === 'dark',
        'text-info-light': textcolor === 'info' && !darkmode,
        'text-info-dark': textcolor === 'info' && darkmode,
        'text-success-light': textcolor === 'success' && !darkmode,
        'text-success-dark': textcolor === 'success' && darkmode,
        'text-warning-light': textcolor === 'warning' && !darkmode,
        'text-warning-dark': textcolor === 'warning' && darkmode,
        'text-error-light': textcolor === 'error' && !darkmode,
        'text-error-dark': textcolor === 'error' && darkmode,
        'bg-clip-text text-transparent bg-gradient-to-b from-warmGradientA to-warmGradientB': textcolor === 'warmgradient',
        'bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB': textcolor === 'techygradient',
        [wrap == 'normal' ? 'break-normal' : wrap == 'newline' ? 'break-words' : 'break-all']: true,
        [mont ? 'font-mont' : 'font-sans']: true,
        'line-through': linethrough,
        underline,
        className
    })}>{children}</VariableElement>
}

function VariableElement({format, children, className}: {
    format: 'div' | 'span' | 'p',
    children: React.ReactNode,
    className?: string
}) {
    const myP = <p className={className}>{children}</p>
    const myDiv = <div className={className}>{children}</div>
    const mySpan = <span className={className}>{children}</span>
    return { p: myP, div: myDiv, span: mySpan }[format]
}