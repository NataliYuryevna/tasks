import {Button, InputText} from "@shared";
import type {typeTaskWithoutId, typeTaskForAdd} from "@shared";
import {useRef} from "react";
import {Form, Buttons} from "./index.style";

interface typePropsForm<T extends typeTaskWithoutId|typeTaskForAdd> {
    cancelHandle:()=>void
    submit: {
        text: string,
        handle: (value: T)=>void
    }
    default: T
}
function MyForm<T extends typeTaskWithoutId|typeTaskForAdd>( props:typePropsForm<T>) {
    const refForm = useRef<HTMLFormElement|null>(null);

    function handleSubmit() {
        if(refForm.current) {
            // @ts-ignore
            props.submit.handle({name: refForm.current['name'].value, description: refForm.current['description'].value});
            props.cancelHandle();
        }
    }

    return <Form ref={refForm}>
        {Object.keys(props.default).map(name=>
            <InputText name={name} labelText={name} default={ String(props.default[name as keyof T])} form={true} key={name} />)}
        <Buttons>
            <Button type="cancel" onClick={props.cancelHandle} text={'Cancel'}/>
            <Button onClick={handleSubmit} text={props.submit.text}/>
        </Buttons>
    </Form>
}

export default MyForm;