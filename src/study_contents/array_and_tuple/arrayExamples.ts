
// Array判別
import {ensureProgram} from "ts-loader/dist/utils";

export function isArrayObject(arr: any): boolean {
    return Array.isArray(arr);
}

// Split String
export const splitStr = (str: string, delim: string = ""): string[] => str.split(delim);

// Join String
export const joinStr = (strArr: string[], delim: string = ""): string => strArr.join(delim);

// Generic
export const arrayLen = <T>(arr: T[]): number => arr.length;
export const arrIsEmpty = <T>(arr: T[]): boolean => arrayLen<T>(arr) == 0;

// Fold
export const foldEx = <T>(arr: T[], callback: (result: T, val: T) => T, initValue: T) => {
    let result: T = initValue;
    for (let i = 0; i < arr.length; ++i) {
        const value = arr[i];
        result = callback(result, value);
    }

    return result;
}