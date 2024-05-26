import {Tasks} from "@features";
import {AddTask, ShowTask, TaskProvider} from "@widgets";
import type {typeTasks} from "@shared";
import {useState} from "react";
function AllTasks() {

    const [task, setTask] = useState<typeTasks|null>(null)

    function onClickTask(task: typeTasks) {
        setTask(task)
    }


    return (<>
            <AddTask/>
            <ShowTask task={task}/>
            <TaskProvider onClickTask={onClickTask}>
                <Tasks/>
            </TaskProvider>
        </>
    );
}

export default AllTasks;