import {Tasks} from "@features";
import {AddTask, ShowTask, TaskProvider} from "@widgets";
import type {typeTasks} from "@shared";
import {useState} from "react";
import {Div} from "./index.style"
import {Checkbox} from "@shared";
function AllTasks() {

    const [task, setTask] = useState<typeTasks|null>(null);
    const [sort, setSort] = useState<boolean>(false);

    function onClickTask(task: typeTasks) {
        setTask(task)
    }

    function changeSort(value:boolean){
        setSort(value);
    }



    return (<>
            <Div>
                <AddTask/>
                <Checkbox name={'sort'} default={false} labelText={'Sort completed'} changeValue={changeSort}/>
            </Div>
            <ShowTask task={task}/>
            <TaskProvider onClickTask={onClickTask}>
                <Tasks sortCompleted={sort}/>
            </TaskProvider>
        </>
    );
}

export default AllTasks;