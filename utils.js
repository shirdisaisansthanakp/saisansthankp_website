import {HOME_PAGE, HTML_FONT_SIZE_IN_PX} from './constants';

export const canUseDOM = () => typeof window === "object" && typeof window.document === "object";

export const getActivePage = () => canUseDOM() ? window.location.hash : HOME_PAGE;

export const getPxFromRem = (remUnit = 0) => {
    let pixels;

    if(remUnit)
        pixels = remUnit * HTML_FONT_SIZE_IN_PX;
    else 
        pixels = canUseDOM() ? window.innerWidth : 1500;

    return `${pixels}px`;
}