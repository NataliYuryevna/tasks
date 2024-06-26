import React, {useEffect, useState} from 'react';
import {Overlay} from "@entities";
import {ShowTask} from "@features";
import type {typeTasks} from "@shared";
function WidgetShowTask(props:{task:typeTasks|null}) {
    const [openTask, setOpenTask] = useState(false);

    useEffect(() => {
        if(props.task)
            showTask();
    }, [props.task]);

    function showTask() {
        setOpenTask(true);
    }

    function closeTask() {
        setOpenTask(false);
    }

    return (<Overlay changeOverlay={openTask} closeOverlay={closeTask}>
                {props.task &&
                    <ShowTask cancelHandle={closeTask} task={openTask?props.task:null}/>
                }
            </Overlay>
    );
}

export default WidgetShowTask;