import React, {useState} from 'react';
import {Button} from "@shared";
import {AddTask} from "@features";
import {Overlay} from "@entities";
function WidgetAddTask() {
    const [openForm, setOpenForm] = useState(false);

    function openAddTask() {
        setOpenForm(true);
    }

    function closeAddTask() {
        setOpenForm(false);
    }

    return (<>
            <Button text={'Add new task'}  onClick={openAddTask}/>
            <Overlay changeOverlay={openForm} closeOverlay={closeAddTask}>
                {openForm && <AddTask cancelHandle={closeAddTask}/>}
            </Overlay>
        </>
    );
}

export default WidgetAddTask;