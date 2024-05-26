import React, {useEffect, useState} from 'react';
import {Div} from './index.style';

interface typePropsOverlay {
    changeOverlay: boolean;
    closeOverlay: ()=>void
}
function Overlay(props:React.PropsWithChildren<typePropsOverlay>){
    const [openOverlay, setOpenOverlay] = useState(false);

    useEffect(() => {
        if(props.changeOverlay)
            showOverlay();
        else
            setOpenOverlay(false);
    }, [props.changeOverlay]);

    function showOverlay() {
        setOpenOverlay(true);
    }

    return (<>
            <Div $hidden={!openOverlay} onClick={props.closeOverlay}>
                {props.children}
            </Div>
        </>
    );
}

export default Overlay;