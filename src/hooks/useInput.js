import {useState} from "react";


/*
export const useInput = (initialValue) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return {value, onChange}
}*/


export const useInput = (startValue) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {value, onChange}

}