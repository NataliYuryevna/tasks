import React, {useState} from 'react';
import {Button} from "@shared";
import {AddTask} from "@features";
import {Div } from './index.style'
function WidgetAddTask() {
    const [openForm, setOpenForm] = useState(false)

    function openAddTask() {
        setOpenForm(true);
    }

    function closeAddTask() {
        setOpenForm(false);
    }

    return (<>
            <Button text={'Add'}  onClick={openAddTask}/>
            <Div $hidden={!openForm} onClick={closeAddTask}>
                <AddTask cancelHandle={closeAddTask}/>
            </Div>
        </>
    );
}

export default WidgetAddTask;