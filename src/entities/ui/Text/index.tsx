import React, {ReactNode} from 'react';
import {P} from "./index.style";

type ObjText = Record<string, string|boolean|number>;
interface typePropsText {
    text: ObjText|string
}

function MyText(props:React.PropsWithChildren<typePropsText>) {

    return (<>
            {
                typeof props.text === 'string' ?
                    <P $justText={true}>{props.text}</P>
                    : Object.keys(props.text).map((el,index)=><P key={index}>
                        <span>{el}:</span>
                        <span>{(()=>{
                            const text = (props.text as ObjText)[el];
                            if (typeof text !== 'boolean')
                                return (props.text as ObjText)[el].toString();
                            else return (text ? 'true' : 'false')})()}</span>
                    </P>)
            }
            {props.children}
        </>
    );
}

export default MyText;