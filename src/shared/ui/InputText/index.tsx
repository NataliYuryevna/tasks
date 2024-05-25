import React, {useEffect, useState} from 'react';
import {useDeferredValue} from "../../lib";
import {Input} from "./index.style";

interface typePropsInput {
    name: string,
    labelText?:string,
    default?: string,
    form?: boolean
}

function InputText(props:typePropsInput) {
    const [valueText, setValue] = useState<string>(props.default||'');

    function changeHandel(e:React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation();
        setValue(e.target.value);
    }

    return <>
        {props.labelText && <label htmlFor={props.name}>{props.labelText}</label>}
        <Input type={'text'} value={valueText} id={props.name} onChange={changeHandel} $form={!!props.form}/>
    </>;
}


export default InputText;
