import React, {useState} from 'react';
import {Div} from "./index.style";

interface typePropsInput {
    name: string,
    labelText?:string,
    default?: boolean,
    changeValue?:(value:boolean)=>void
}

function Checkbox(props:typePropsInput) {
    const [valueChecked, setValue] = useState<boolean>(props.default||false);

    function changeHandel(e:React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation();
        setValue(e.target.checked);
        if(props.changeValue)
            props.changeValue(e.target.checked)
    }

    return <Div>
        <input type={'checkbox'} id={props.name} checked={valueChecked} onChange={changeHandel}/>
        {props.labelText && <label htmlFor={props.name}>{props.labelText}</label>}
    </Div>;
}


export default Checkbox;
