import React from "react";

export const required = value => {
    if (value) {
        return undefined
    } else {
        return 'Field is required';
    }
}
export const maxLengthCreator = (maxLength:number) => (value:any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
