import classNames from "classnames";
import React from "react";
import { ButtonType, GeneralElementType } from "../../types";


export default function Button({
    buttoncolor = 'dark',
    ...rest
}: ButtonType & GeneralElementType) {

    return (<button className={classNames(
        rest.className,
        {
        // inner layout
        'justify-center flex items-center rounded-lg py-1 px-4': true,
        // primary colors
        'bg-light text-dark': buttoncolor === 'light' && !rest.ghost,
        'bg-dark text-light': buttoncolor === 'dark' && !rest.ghost,
        'bg-info-light text-light': buttoncolor === 'info' && !rest.ghost && rest.darkmode,
        'bg-info-dark text-light': buttoncolor === 'info' && !rest.ghost && !rest.darkmode,
        'bg-success-light text-light': buttoncolor === 'success' && !rest.ghost && rest.darkmode,
        'bg-success-dark text-light': buttoncolor === 'success' && !rest.ghost && !rest.darkmode,
        'bg-warning-light text-light': buttoncolor === 'warning' && !rest.ghost && rest.darkmode,
        'bg-warning-dark text-light': buttoncolor === 'warning' && !rest.ghost && !rest.darkmode,
        'bg-error-light text-light': buttoncolor === 'error' && !rest.ghost && rest.darkmode,
        'bg-error-dark text-light': buttoncolor === 'error' && !rest.ghost && !rest.darkmode,
        'bg-gradient-to-br from-warmGradientA to-warmGradientB text-light': buttoncolor === 'warmgradient' && !rest.ghost,
        'bg-gradient-to-br from-techyGradientA to-techyGradientB text-light': buttoncolor === 'techygradient' && !rest.ghost,
        // ghost colors
        'outline-light text-light': buttoncolor === 'light' && rest.ghost,
        'outline-dark text-dark': buttoncolor === 'dark' && rest.ghost,
        'outline-info-light text-info-light': buttoncolor === 'info' && rest.ghost && rest.darkmode,
        'outline-info-dark text-info-dark': buttoncolor === 'info' && rest.ghost && !rest.darkmode,
        'outline-success-light text-success-light': buttoncolor === 'success' && rest.ghost && rest.darkmode,
        'outline-success-dark text-success-dark': buttoncolor === 'success' && rest.ghost && !rest.darkmode,
        'outline-warning-light text-warning-light': buttoncolor === 'warning' && rest.ghost && rest.darkmode,
        'outline-warning-dark text-warning-dark': buttoncolor === 'warning' && rest.ghost && !rest.darkmode,
        'outline-error-light text-error-light': buttoncolor === 'error' && rest.ghost && rest.darkmode,
        'outline-error-dark text-error-dark': buttoncolor === 'error' && rest.ghost && !rest.darkmode,
        // primary hover
        'hover:brightness-110': !rest.ghost && !rest.nohover,
        // ghost hover
        'hover:bg-light hover:text-dark': buttoncolor === 'light' && rest.ghost && !rest.nohover,
        'hover:bg-dark hover:text-light': buttoncolor === 'dark' && rest.ghost && !rest.nohover,
        'hover:bg-info-light hover:text-light': buttoncolor === 'info' && rest.ghost && !rest.nohover && rest.darkmode,
        'hover:bg-info-dark hover:text-light': buttoncolor === 'info' && rest.ghost && !rest.nohover && !rest.darkmode,
        'hover:bg-success-light hover:text-light': buttoncolor === 'success' && rest.ghost && !rest.nohover && rest.darkmode,
        'hover:bg-success-dark hover:text-light': buttoncolor === 'success' && rest.ghost && !rest.nohover && !rest.darkmode,
        'hover:bg-warning-light hover:text-light': buttoncolor === 'warning' && rest.ghost && !rest.nohover && rest.darkmode,
        'hover:bg-warning-dark hover:text-light': buttoncolor === 'warning' && rest.ghost && !rest.nohover && !rest.darkmode,
        'hover:bg-error-light hover:text-light': buttoncolor === 'error' && rest.ghost && !rest.nohover && rest.darkmode,
        'hover:bg-error-dark hover:text-light': buttoncolor === 'error' && rest.ghost && !rest.nohover && !rest.darkmode,
        // text appearance
        'font-semibold': true,
        // interaction
        'hover:gap-5 duration-300 ease-out hover:scale-105': !rest.nohover
    })} onClick={rest.onClick ?? undefined}>{rest.children}</button>)
}