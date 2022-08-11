import {canUseDOM} from './utils';

const getValueFromLocalStorage = (key) => {
    try {
        if(canUseDOM()) {
            const value = JSON.parse(localStorage.getItem(key));
            return value;
        };
    }
    catch(error) {
        return localStorage.getItem(key);
    }
};

const setValueInLocalStorage = (key, value) => {
    try {
        if(canUseDOM()) {
            const stringifiedValue = typeof value === "string" ? value : JSON.stringify(value);
            localStorage.setItem(key, stringifiedValue);
            return true;
        };
    }
    catch(error) {
        return false;
    }
}

export default class LocalStorage {
    static set(key, value) {
      return setValueInLocalStorage(key, value);  
    };

    static get(key) {
        return getValueFromLocalStorage(key);
    };
};