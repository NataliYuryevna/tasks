import React, {useEffect, useState} from 'react';
import {Div} from './index.style';

interface typePropsOverlay {
    changeOverlay: boolean;
}
function Overlay(props:React.PropsWithChildren<typePropsOverlay>){
    const [openOverlay, setOpenOverlay] = useState(false);

    useEffect(() => {
        if(props.changeOverlay)
            showOverlay();
        else
            hiddenOverlay();
    }, [props.changeOverlay]);

    function showOverlay() {
        setOpenOverlay(true);
    }

    function hiddenOverlay() {
        setOpenOverlay(false);
    }

    return (<>
            <Div $hidden={!openOverlay} onClick={hiddenOverlay}>
                {props.children}
            </Div>
        </>
    );
}

export default Overlay;