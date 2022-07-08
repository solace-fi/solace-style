import classNames from "classnames";
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

    // const primaryColor = {
    //     'light': 'bg-light text-dark',
    //     'dark': 'bg-dark text-light',
    //     'info': 'bg-info' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'success': 'bg-success' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'error': 'bg-error' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'warning': 'bg-warning' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'warmgradient': 'bg-gradient-to-br from-warmGradientA to-warmGradientB text-light ',
    //     'techygradient': 'bg-gradient-to-br from-techyGradientA to-techyGradientB text-light ',
    // }[buttoncolor]

    // const ghostColor = {
    //     'light': 'outline-light text-light',
    //     'dark': 'outline-dark text-dark',
    //     'info': 'outline-info' + (darkmode ? '-light ' : '-dark ') + 'text-info ',
    //     'success': 'outline-success' + (darkmode ? '-light ' : '-dark ') + 'text-success ',
    //     'error': 'outline-error' + (darkmode ? '-light ' : '-dark ') + 'text-error ',
    //     'warning': 'outline-warning' + (darkmode ? '-light ' : '-dark ') + 'text-warning ',
    //     'warmgradient': 'outline-gradient-to-br from-warmGradientA to-warmGradientB ',
    //     'techygradient': 'outline-gradient-to-br from-techyGradientA to-techyGradientB ',
    // }[buttoncolor]

    // const ghostColorHover = {
    //     'light': 'hover:bg-light hover:text-dark',
    //     'dark': 'hover:bg-dark hover:text-light',
    //     'info': 'hover:bg-info' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'success': 'hover:bg-success' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'error': 'hover:bg-error' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'warning': 'hover:bg-warning' + (darkmode ? '-light ' : '-dark ') + 'text-light ',
    //     'warmgradient': 'hover:bg-gradient-to-br hover:from-warmGradientA hover:to-warmGradientB hover:text-light',
    //     'techygradient': 'hover:bg-gradient-to-br hover:from-techyGradientA hover:to-techyGradientB hover:text-light',
    // }[buttoncolor]

    // const classNames = [
    //     ghost ? ghostColor + (noborder ? 'outline-0 ' : '' ) : primaryColor + 'outline-0 ',
    //     nohover ? '' : ghost ? ghostColorHover : 'hover: opacity-80',
    //     noround ? 'rounded-none ' : 'rounded-lg ',
    //     (className ?? ''),
    // ]

    return (<button className={classNames({
        // primary colors
        'bg-light text-dark': buttoncolor === 'light' && !ghost,
        'bg-dark text-light': buttoncolor === 'dark' && !ghost,
        'bg-info-light text-light': buttoncolor === 'info' && !ghost && darkmode,
        'bg-info-dark text-light': buttoncolor === 'info' && !ghost && !darkmode,
        'bg-success-light text-light': buttoncolor === 'success' && !ghost && darkmode,
        'bg-success-dark text-light': buttoncolor === 'success' && !ghost && !darkmode,
        'bg-warning-light text-light': buttoncolor === 'warning' && !ghost && darkmode,
        'bg-warning-dark text-light': buttoncolor === 'warning' && !ghost && !darkmode,
        'bg-error-light text-light': buttoncolor === 'error' && !ghost && darkmode,
        'bg-error-dark text-light': buttoncolor === 'error' && !ghost && !darkmode,
        'bg-gradient-to-br from-warmGradientA to-warmGradientB text-light': buttoncolor === 'warmgradient' && !ghost,
        'bg-gradient-to-br from-techyGradientA to-techyGradientB text-light': buttoncolor === 'techygradient' && !ghost,
        // ghost colors
        'outline-light text-light': buttoncolor === 'light' && ghost,
        'outline-dark text-dark': buttoncolor === 'dark' && ghost,
        'outline-info-light text-info-light': buttoncolor === 'info' && ghost && darkmode,
        'outline-info-dark text-info-dark': buttoncolor === 'info' && ghost && !darkmode,
        'outline-success-light text-success-light': buttoncolor === 'success' && ghost && darkmode,
        'outline-success-dark text-success-dark': buttoncolor === 'success' && ghost && !darkmode,
        'outline-warning-light text-warning-light': buttoncolor === 'warning' && ghost && darkmode,
        'outline-warning-dark text-warning-dark': buttoncolor === 'warning' && ghost && !darkmode,
        'outline-error-light text-error-light': buttoncolor === 'error' && ghost && darkmode,
        'outline-error-dark text-error-dark': buttoncolor === 'error' && ghost && !darkmode,
        // primary hover
        'hover:opacity-80': !ghost && !nohover,
        // ghost hover
        'hover:bg-light hover:text-dark': buttoncolor === 'light' && ghost && !nohover,
        'hover:bg-dark hover:text-light': buttoncolor === 'dark' && ghost && !nohover,
        'hover:bg-info-light hover:text-light': buttoncolor === 'info' && ghost && !nohover && darkmode,
        'hover:bg-info-dark hover:text-light': buttoncolor === 'info' && ghost && !nohover && !darkmode,
        'hover:bg-success-light hover:text-light': buttoncolor === 'success' && ghost && !nohover && darkmode,
        'hover:bg-success-dark hover:text-light': buttoncolor === 'success' && ghost && !nohover && !darkmode,
        'hover:bg-warning-light hover:text-light': buttoncolor === 'warning' && ghost && !nohover && darkmode,
        'hover:bg-warning-dark hover:text-light': buttoncolor === 'warning' && ghost && !nohover && !darkmode,
        'hover:bg-error-light hover:text-light': buttoncolor === 'error' && ghost && !nohover && darkmode,
        'hover:bg-error-dark hover:text-light': buttoncolor === 'error' && ghost && !nohover && !darkmode,
        // additional classes
    })} onClick={onClick ?? undefined}>{children}</button>)
}