import React, {useState} from 'react';
import {Tasks} from "@features";
import {AddTask} from "@widgets";
function AllTasks() {
    const [openForm, setOpenForm] = useState(false)

    function openAddTask() {
        setOpenForm(true);
    }

    function closeAddTask() {
        setOpenForm(false);
    }

    return (<>
        <AddTask/>
        <Tasks/>
        </>
    );
}

export default AllTasks;